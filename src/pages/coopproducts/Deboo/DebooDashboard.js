import React, { useEffect, useState } from 'react';
import api from '../../../Api';
import DebooNav from './DebooNav';
import './DebooDashboard.css';

const DebooDashboard = () => {
    const [campaigns, setCampaigns] = useState([]);

    useEffect(() => {
        const fetchCampaigns = async () => {
            try {
                const response = await api.get('/funds');
                setCampaigns(response.data);
            } catch (error) {
                console.error('Error fetching campaigns:', error);
            }
        };

        fetchCampaigns();
    }, []);

    return (
        <div className='deboo-dashboard-main'>
            <DebooNav />
            <div className='campaigns-header'>
                <h2>Campaigns</h2>
            </div>
            
            <table className="campaigns-table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Target Amount</th>
                        <th>Raised Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {campaigns.map(campaign => (
                        <tr key={campaign.id}>
                            <td>{campaign.title}</td>
                            <td>{campaign.description}</td>
                            <td>{campaign.target_amount}</td>
                            <td>{campaign.raised_amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DebooDashboard;
