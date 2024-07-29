import React, { useState } from 'react'
import './VerifyId.css'

const PersonalInfo = () => {
    
    const [personalDetails, setPersonalDetails] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        gender: '',
        birthDate: '',
        maritalStatus: ''
    });
    const [personalDetailsfilled, setPersonalDetailsfilled] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPersonalDetails({
        ...personalDetails,
        [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(personalDetails);
        setPersonalDetailsfilled(true);
    };

  return (
    <div className='verify-info'>
        <h2>Personal Details</h2>
        <form onSubmit={handleSubmit}>
        <label>
            First Name:
            <input type="text" name="firstName" value={personalDetails.firstName} onChange={handleChange} />
        </label>
        <label>
            Middle Name:
            <input type="text" name="middleName" value={personalDetails.middleName} onChange={handleChange} />
        </label>
        <label>
            Last Name:
            <input type="text" name="lastName" value={personalDetails.lastName} onChange={handleChange} />
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
            <input type="date" name="birthDate" value={personalDetails.birthDate} onChange={handleChange} />
        </label>
        <label>
            Marital Status:
            <select name="maritalStatus" value={personalDetails.maritalStatus} onChange={handleChange}>
                <option value="">Select</option>
                <option value="single">Single</option>
                <option value="married">Married</option>
                <option value="divorced">Divorced</option>
                <option value="widowed">Widowed</option>
            </select>
        </label>
        <button className='hover' type="submit">Save changes</button>
    </form>
    </div>
    
  );
  return personalDetailsfilled;

}


export default PersonalInfo;
