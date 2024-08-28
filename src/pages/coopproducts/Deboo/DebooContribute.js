import React, { useEffect, useState } from 'react';
import api from '../../../Api';
import DebooNav from './DebooNav';
import './DebooContribute.css';

const ContributionPage = () => {
    const [campaigns, setCampaigns] = useState([]);
    const [contributionAmount, setContributionAmount] = useState('');
    const [selectedCampaign, setSelectedCampaign] = useState(null);
    const [message, setMessage] = useState('');

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

    const handleContribute = async (campaignId) => {
        if (!contributionAmount) return;
        
        try {
            const response = await api.post(`/funds/${campaignId}/contribute`, {
                amount: contributionAmount,
            });
            setMessage('Contribution successful');
            setContributionAmount('');
            setSelectedCampaign(null);

            // Fetch updated campaigns to reflect the contribution
            const updatedCampaigns = await api.get('/funds');
            setCampaigns(updatedCampaigns.data);
        } catch (error) {
            console.error('Error contributing:', error);
            setMessage('Failed to contribute');
        }
    };

    return (
        <div className='contribution-main'>
            <DebooNav />
            <div className="contribute-to-campaign">
                <h2>Contribute to a Campaign</h2>
                {campaigns.length > 0 ? (
                    <table className="contribute-table">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Target Amount</th>
                                <th>Raised Amount</th>
                                <th>Contribute</th>
                            </tr>
                        </thead>
                        <tbody>
                            {campaigns.map(campaign => (
                                <tr key={campaign.id}>
                                    <td>{campaign.title}</td>
                                    <td>{campaign.description}</td>
                                    <td>${campaign.target_amount}</td>
                                    <td>${campaign.raised_amount}</td>
                                    <td>
                                        <input
                                            type="number"
                                            placeholder="Amount"
                                            value={selectedCampaign === campaign.id ? contributionAmount : ''}
                                            onChange={(e) => setContributionAmount(e.target.value)}
                                            onFocus={() => setSelectedCampaign(campaign.id)}
                                        />
                                        <button onClick={() => handleContribute(campaign.id)}>
                                            Contribute
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No active campaigns available.</p>
                )}
                {message && <p>{message}</p>}
            </div>
        </div>
    );
};

export default ContributionPage;
