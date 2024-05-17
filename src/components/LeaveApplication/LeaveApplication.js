import React, { useState } from 'react';
import { postLeaveApplication } from '../../api/api'; 
import './LeaveApplication.css';

//Define LeaveApplication component, accept the object user as attributes
function LeaveApplication({ user }) {
    //useState is a Hook. leaveType save the leave type which user select. setLeaveType help to update the leaveType.
    const [leaveType, setLeaveType] = useState('Annual leave'); 
    const [comments, setComments] = useState('');
    const [percentage, setPercentage] = useState('');
    const [startDate, setStartDate] = useState('');
    const [duration, setDuration] = useState('');
    const [endDate, setEndDate] = useState('');
    const [tel, setTel] = useState('+46');
    const [prioritize, setPrioritize] = useState(false);
    const [error, setError] = useState('');

    //Define validateForm to validate the data in form. If the required fieled is not filled, return flse.
    const validateForm = () => {
        if (!leaveType || !percentage || !startDate || !duration || !endDate || tel === '+46') {
            setError('Alla fält markerade med * är obligatoriska.');
            return false;
        }
        return true;
    };

        /*Define handleSubmit to handle the form submit. Stop the default event and validate the form.
        if validateFrom return false, use return to stop .
    Use postLeaveApplication to send the data.*/
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!validateForm()) {
            return;
        }

        const fields = {
            "User ID": user.ID,
            "Type": leaveType,
            "Percentage": percentage,
            "Start Date": startDate,
            "Duration": duration,
            "End Date": endDate,
            "Comments": comments,
            "Tel": tel,
            "Prioritize": prioritize ? "Yes" : "No"
        };

        try {
            const response = await postLeaveApplication(fields);
            alert('Lämna ansökan som har skickats in.');
            console.log(response);
        } catch (error) {
            alert(`Misslyckades med att lämna in ledighetsansökan: ${error.message}`);
        }
    };

        /*Render different form fields based on the value of leaveType, 
    and display error messages and submit buttons.*/
    return (
        <div className="leaveapplication-page container mt-5">
            <h2 className="mb-3">Lämna ansökan</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="mb-3 btn-group d-flex" role="group">
                    <button type="button" className={`btn ${leaveType === 'Annual leave' ? 'btn-success' : 'btn-secondary'}`} onClick={() => setLeaveType('Annual leave')}>Årlig ledighet</button>
                    <button type="button" className={`btn ${leaveType === 'VAB' ? 'btn-success' : 'btn-secondary'}`} onClick={() => setLeaveType('VAB')}>VAB</button>
                </div>

                {leaveType === 'Annual leave' && (
                    <div>
                        <div className="mb-3 form-group row">
                            <label htmlFor="percentage" className="col-sm-3 col-form-label">
                                Procentsats (%)
                                <span className="text-danger">*</span>
                            </label>
                            <div className="col-sm-9">
                                <select id="percentage" className="form-control" value={percentage} onChange={(e) => setPercentage(e.target.value)} required>
                                    <option value="">Välj Procent</option>
                                    <option value="25%">25%</option>
                                    <option value="50%">50%</option>
                                    <option value="75%">75%</option>
                                    <option value="100%">100%</option>
                                </select>
                            </div>
                        </div>

                        <div className="mb-3 form-group row">
                            <label htmlFor="startDate" className="col-sm-3 col-form-label">Start datum<span className="text-danger">*</span></label>
                            <div className="col-sm-9">
                                <input id="startDate" type="date" className="form-control" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
                            </div>
                        </div>
                        <div className="mb-3 form-group row">
                            <label htmlFor="duration" className="col-sm-3 col-form-label">Varaktighet <span className="text-danger">*</span></label>
                            <div className="col-sm-9">
                                <select id="duration" className="form-control" value={duration} onChange={(e) => setDuration(e.target.value)} required>
                                    <option value="">Välj Varaktighet</option>
                                    <option value="Morning">Morgon</option>
                                    <option value="Afternoon">Eftermiddag</option>
                                    <option value="Fullday">Hel dag</option>
                                </select>
                            </div>
                        </div>
                        <div className="mb-3 form-group row">
                            <label htmlFor="endDate" className="col-sm-3 col-form-label">Slutdatum <span className="text-danger">*</span></label>
                            <div className="col-sm-9">
                                <input id="endDate" type="date" className="form-control" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
                            </div>
                        </div>
                        <div className="mb-3 form-group row">
                            <label htmlFor="tel" className="col-sm-3 col-form-label">Telefon <span className="text-danger">*</span></label>
                            <div className="col-sm-9">
                                <input id="tel" type="text" className="form-control" value={tel} onChange={(e) => setTel(e.target.value)} required />
                                <small className="form-text text-muted">Kan endast acceptera svenska telefonnummer</small>
                            </div>
                        </div>
                        <div className="mb-3 form-group row">
                            <label htmlFor="comments" className="col-sm-3 col-form-label">Kommentarer</label>
                            <div className="col-sm-9">
                                <textarea id="comments" className="form-control" value={comments} onChange={(e) => setComments(e.target.value)} placeholder="Eventuell ytterligare information"></textarea>
                            </div>
                        </div>
                        <div className="mb-3 form-group form-check">
                            <input id="prioritize" type="checkbox" className="form-check-input" checked={prioritize} onChange={(e) => setPrioritize(e.target.checked)} />
                            <label className="form-check-label" htmlFor="prioritize">Prioritize me</label>
                        </div>
                    </div>
                )}

                {leaveType === 'VAB' && (
                    <div>
                        <div className="mb-3 form-group row">
                            <label htmlFor="commentsVAB" className="col-sm-3 col-form-label">Kommentarer</label>
                            <div className="col-sm-9">
                                <textarea id="commentsVAB" className="form-control" value={comments} onChange={(e) => setComments(e.target.value)} placeholder="Anledning till VAB"></textarea>
                            </div>
                        </div>
                    </div>
                )}

                <div className="mb-3 col-12">
                    <button type="submit" className="btn btn-success">Skicka in</button>
                </div>
            </form>
        </div>
    );
}

export default LeaveApplication;





