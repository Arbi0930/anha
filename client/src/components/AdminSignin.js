import React, { useState, useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
// Remove the duplicate import of useHistory
import { AdminContext } from '../App';

const AdminSignin = () => {
  const { adminstate, dispatchadmin } = useContext(AdminContext);

  const adminHistory = useHistory();
  const [adminName, setAdminName] = useState('');
  const [adminPassword, setAdminPassword] = useState('');

  const signinAdmin = async (e) => {
    e.preventDefault();

    const res = await fetch('/signinAdmin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        adminName,
        adminPassword,
      }),
    });
    const data = res.json();

    if (res.status === 400 || !data) {
      window.alert('Invalid Credentials');
    } else {
      dispatchadmin({ type: 'ADMIN', payload: true });
      window.alert('Signin Successful');
      adminHistory.push('/dashboard');
    }
  };

  return (
    <>
      
    </>
  );
};

export default AdminSignin;
