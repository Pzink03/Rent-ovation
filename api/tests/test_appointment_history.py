from fastapi.testclient import TestClient
from main import app
from queries.appointments import AppointmentRepository

client = TestClient(app)


class EmptyAppointmentQueries:
    def get_appointment_history(self, landlord_id):
        return []


def test_get_appointment_history():
    # Arrange
    app.dependency_overrides[AppointmentRepository] = EmptyAppointmentQueries()
    landlord_id = 123  # Replace with the actual landlord ID
    # Act
    response = client.get(f"/appointment/history/{landlord_id}")
    # Clean up
    app.dependency_overrides.clear()
    # Assert
    assert response.status_code == 200
    assert response.json() == []
