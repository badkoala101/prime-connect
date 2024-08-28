import React, { useState } from 'react';
import api from '../../../Api';
import DebooNav from './DebooNav';
import './DebooCampaign.css';

const DebooCampaign = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [targetAmount, setTargetAmount] = useState('');
    const [message, setMessage] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/funds', {
                title,
                description,
                target_amount: targetAmount,
            });
            setMessage('Campaign created successfully');
            
            // Optionally, reset the form or redirect
        } catch (error) {
            console.error('Error creating campaign:', error);
            setMessage('Faild to create campaign successfully');
        }
    };
    

    return (
        <div className='campaign-main'>
            <DebooNav />
            <div className="create-campaign">
                <h2>Create New Campaign</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Campaign Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                    <textarea
                        placeholder="Campaign Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                    <input
                        type="number"
                        placeholder="Target Amount"
                        value={targetAmount}
                        onChange={(e) => setTargetAmount(e.target.value)}
                        required
                    />
                    <button type="submit">Create Campaign</button>
                </form>
                {message && <p>{message}</p>}
            </div>
            
        </div>
    );
};

export default DebooCampaign;
