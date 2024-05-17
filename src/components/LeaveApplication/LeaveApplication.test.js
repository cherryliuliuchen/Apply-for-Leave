// LeaveApplication.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LeaveApplication from './LeaveApplication';
import { postLeaveApplication } from '../../api/api';

jest.mock('../../api/api', () => ({
    postLeaveApplication: jest.fn()
}));

describe('LeaveApplication Component', () => {
    test('submits the form data correctly', async () => {
        const user = { ID: '002' }; // Example user object
        render(<LeaveApplication user={user} />);

        // Fill out the form
        fireEvent.change(screen.getByLabelText(/Procentsats \(%\)/), { target: { value: '50%' } });
        fireEvent.change(screen.getByLabelText(/Start datum/), { target: { value: '2023-01-01' } }); // 注意这里文本应与组件中的一致
        fireEvent.change(screen.getByLabelText(/Varaktighet/), { target: { value: 'Morning' } });
        fireEvent.change(screen.getByLabelText(/Slutdatum/), { target: { value: '2023-01-02' } });
        fireEvent.change(screen.getByLabelText(/Telefon/), { target: { value: '+46123456789' } });

        // Submit the form
        fireEvent.submit(screen.getByText(/Skicka in/)); // Ensure button text matches

        // Check if the postLeaveApplication was called correctly
        expect(postLeaveApplication).toHaveBeenCalledWith({
            "User ID": '002',
            "Type": 'Annual leave',
            "Percentage": '50%',
            "Start Date": '2023-01-01',
            "Duration": 'Morning',
            "End Date": '2023-01-02',
            "Comments": '',
            "Tel": '+46123456789',
            "Prioritize": "No"
        });
    });
});
