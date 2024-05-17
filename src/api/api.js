    import axios from 'axios';


    const API_BASE_URL = 'https://api.airtable.com/v0/app4lxZO80azsrlm0';
    const API_KEY = 'pat1InfNwwVqpt9O4.e8f304668c28ef1831a57f332183dcb0a89c0cb37ffb4ebe0b451cdd60a7a2b2';

    // Get user information
    export const fetchUsers = async () => {
        const url = `${API_BASE_URL}/tblYmziTZzvMCuXa2`; 
        try {
            const response = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${API_KEY}`,
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
                    Authorization: `Bearer ${API_KEY}`,
                    'Content-Type': 'application/json'
                }
            });
            return response.data;
        } catch (error) {
            console.error("Error posting leave application to Airtable: ", error);
            throw error;
        }
    };
