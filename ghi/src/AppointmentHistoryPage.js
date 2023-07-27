import React, { useState, useEffect } from 'react';

const AppointmentHistoryPage = () => {
  const [appointmentHistory, setAppointmentHistory] = useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await fetch('http://localhost:8000/appointment/history/landlord', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          credentials: 'include',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch appointment history');
      }

      const data = await response.json();
      setAppointmentHistory(data);
    } catch (error) {
      console.error('Error fetching appointment history:', error);
    }
  };

  return (
    <div>
      <h2>Appointment History</h2>
      {appointmentHistory.length === 0 ? (
        <p>No appointments found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Tenant ID</th>
              <th>Issue</th>
              <th>Created On</th>
              <th>Status Label</th>
            </tr>
          </thead>
          <tbody>
            {appointmentHistory.map((appointment) => (
              <tr key={appointment.tenant_id}>
                <td>{appointment.tenant_id}</td>
                <td>{appointment.issue}</td>
                <td>{appointment.created_on}</td>
                <td>{appointment.status_label}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AppointmentHistoryPage;
