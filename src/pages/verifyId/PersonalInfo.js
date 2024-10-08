import React, { useState, useEffect } from 'react';
import api from '../../Api'; // Ensure you have the correct import for your Axios instance
import './VerifyId.css';

const PersonalInfo = ({ onNext }) => {
    const [personalDetails, setPersonalDetails] = useState({
        first_name: '',
        middle_name: '',
        last_name: '',
        email: '',
        gender: '',
        birth_date: '',
        marital_status: '',
        phone_number: '',
        id_number: '',
        account_number: ''
    });

    useEffect(() => {
        const checkIfSubmitted = async () => {
            try {
                const response = await api.get('/user-info', {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    },
                });
                if (response.data.personal_info) {
                    // Removed onNext() call to prevent automatic redirection
                }
            } catch (error) {
                console.error('Error checking submission status:', error.response?.data?.message || error.message);
            }
        };

        checkIfSubmitted();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPersonalDetails({
            ...personalDetails,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/personal-info', personalDetails, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            if (response.status === 200) {
                console.log('Personal details saved successfully:', response.data);
                onNext(); // Trigger page change after successful submission
            } else {
                console.error('Failed to save personal details:', response.statusText);
            }
        } catch (error) {
            console.error('Error saving personal details:', error.response?.data?.message || error.message);
        }
    };

    return (
        <div className='verify-info'>
            <h2>Personal Details</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input type="text" name="first_name" value={personalDetails.first_name} onChange={handleChange} />
                </label>
                <label>
                    Middle Name:
                    <input type="text" name="middle_name" value={personalDetails.middle_name} onChange={handleChange} />
                </label>
                <label>
                    Last Name:
                    <input type="text" name="last_name" value={personalDetails.last_name} onChange={handleChange} />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={personalDetails.email} onChange={handleChange} />
                </label>
                <label>
                    Gender:
                    <select name="gender" value={personalDetails.gender} onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </label>
                <label>
                    Birth Date:
                    <input type="date" name="birth_date" value={personalDetails.birth_date} onChange={handleChange} />
                </label>
                <label>
                    Marital Status:
                    <select name="marital_status" value={personalDetails.marital_status} onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="single">Single</option>
                        <option value="married">Married</option>
                        <option value="divorced">Divorced</option>
                        <option value="widowed">Widowed</option>
                    </select>
                </label>
                <label>
                    Phone Number:
                    <input type="number" name="phone_number" value={personalDetails.phone_number} onChange={handleChange} />
                </label>
                <label>
                    National/Kebele ID Number:
                    <input type="number" name="id_number" value={personalDetails.id_number} onChange={handleChange} />
                </label>
                <label>
                    Your Coop Bank Account:
                    <input type="number" name="account_number" value={personalDetails.account_number} onChange={handleChange} />
                </label>
                <button className='hover' type="submit">Next</button>
            </form>
        </div>
    );
};

export default PersonalInfo;
