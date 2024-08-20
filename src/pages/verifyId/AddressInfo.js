import React, { useState } from 'react';
import api from '../../Api'; // Ensure you have the correct import for your Axios instance
import './VerifyId.css';

const AddressInfo = () => {
    const [addressDetails, setAddressDetails] = useState({
        country: '',
        region: '',
        zone: '',
        city: '',
        woreda: '',
        kebele: '',
        house_number: '',
        street_address: '',
        address_type: 'commercial',
        address_duration: 'permanent'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAddressDetails({
            ...addressDetails,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/address-info', addressDetails, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            if (response.status === 200) {
                console.log('Address details saved successfully:', response.data);
            } else {
                console.error('Failed to save address details:', response.statusText);
            }
        } catch (error) {
            console.error('Error saving address details:', error.response?.data?.message || error.message);
        }
    };

    return (
        <div className="verify-info">
            <h2>Address Info</h2>
            <form onSubmit={handleSubmit}>
                <label>Country
                    <input type="text" name="country" value={addressDetails.country} onChange={handleChange} />
                </label>
                <label>Region
                    <input type="text" name="region" value={addressDetails.region} onChange={handleChange} />
                </label>
                <label>Zone/Sub-city
                    <input type="text" name="zone" value={addressDetails.zone} onChange={handleChange} />
                </label>
                <label>City
                    <input type="text" name="city" value={addressDetails.city} onChange={handleChange} />
                </label>
                <label>Woreda
                    <input type="text" name="woreda" value={addressDetails.woreda} onChange={handleChange} />
                </label>
                <label>Kebele
                    <input type="text" name="kebele" value={addressDetails.kebele} onChange={handleChange} />
                </label>
                <label>House Number
                    <input type="text" name="house_number" value={addressDetails.house_number} onChange={handleChange} />
                </label>
                <label>Street Address
                    <input type="text" name="street_address" value={addressDetails.street_address} onChange={handleChange} />
                </label>
                <div className='address-type'>
                    <div className="address-type-duration ">
                        <p>Address Type</p>
                        <label>Commercial
                            <input type="radio" name="address_type" value="commercial" checked={addressDetails.address_type === 'commercial'} onChange={handleChange} />
                        </label>
                        <label>Residential
                            <input type="radio" name="address_type" value="residential" checked={addressDetails.address_type === 'residential'} onChange={handleChange} />
                        </label>
                    </div>
                    <div className="address-type-duration ">
                        <p>Address Duration</p>
                        <label>Permanent
                            <input type="radio" name="address_duration" value="permanent" checked={addressDetails.address_duration === 'permanent'} onChange={handleChange} />
                        </label>
                        <label>Temporary
                            <input type="radio" name="address_duration" value="temporary" checked={addressDetails.address_duration === 'temporary'} onChange={handleChange} />
                        </label>
                    </div>
                </div>
                <button type="submit">Save changes</button>
            </form>
        </div>
    );
};

export default AddressInfo;
