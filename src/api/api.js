import axios from 'axios';
import { TOKEN } from '../constants/tokens'; // Import the TOKEN

const API_BASE_URL = 'https://api.airtable.com/v0/app4lxZO80azsrlm0';

// Get user information
export const fetchUsers = async () => {
    const url = `${API_BASE_URL}/tblYmziTZzvMCuXa2`; 
    try {
        const response = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${TOKEN}`,
                'Content-Type': 'application/json'
            }
        });
        return response.data.records.map(record => ({
            id: record.id,
            email: record.fields.ID.trim(),
            name: record.fields.Name,
            password: record.fields.Password,
            role: record.fields.Role
        }));
    } catch (error) {
        console.error("Error fetching users from Airtable: ", error);
        throw error;
    }
};

// Post the leave application
export const postLeaveApplication = async (fields) => {
    const url = `${API_BASE_URL}/tbl5UhZuNMQpTHtpv`; // URL for Airtable
    try {
        // axios helps to send http post { records: [{ fields }] }request to the above url
        const response = await axios.post(url, { records: [{ fields }] }, {
            headers: {
                Authorization: `Bearer ${TOKEN}`,
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error posting leave application to Airtable: ", error);
        throw error;
    }
};
