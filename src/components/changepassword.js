import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { auth } from '../files/firebase';
import { auth } from 'firebase/auth';

const ChangePassword = () => {
    const history = useHistory();
    const location = useLocation();
    const { profile, name, email, password, mobile } = location.state;

    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        const timeout = setTimeout(() => {
            setError('');
            setMessage('');
        }, 5000); // Set timeout for 5 seconds (adjust as needed)

        return () => clearTimeout(timeout);
    }, [error, message]);

    const handlePasswordChange = async (e) => {
        e.preventDefault();
        setError('');
        setMessage('');

        if (newPassword !== confirmPassword) {
            setError('New password and confirm password do not match.');
            return;
        }

        try {
            const user = auth.currentUser;
            if (!user) throw new Error('No user is signed in');

            const credential = auth.EmailAuthProvider.credential(email, currentPassword);
            await user.reauthenticateWithCredential(credential);

            await user.updatePassword(newPassword);
            setMessage('Password updated successfully.');
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="change-password-wrapper">
            <h2>Change Password</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {message && <p style={{ color: 'green' }}>{message}</p>}
            <form onSubmit={handlePasswordChange}>
                <div>
                    <label>Current Password:</label>
                    <input
                        type="password"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>New Password:</label>
                    <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Confirm New Password:</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Change Password</button>
            </form>
        </div>
    );
};

export default ChangePassword;
