import { Container, Button } from 'react-bootstrap';
import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [error, setError] = useState('');
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        setError('');

        try{
            await logout()
            navigate('/splash');
        }catch(e){
            setError('Failed to log out.')
        }
    }

    return (
        <Container>
            <p>Dashboard</p>
            <p><b>Email:</b> {currentUser && currentUser.email}</p>
            <Link to='/update-profile'>Update Profile</Link>
            <Button onClick={handleLogout}>Log out</Button>
        </Container>
    )
}

export default Dashboard;