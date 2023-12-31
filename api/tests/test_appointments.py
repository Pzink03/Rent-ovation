from fastapi.testclient import TestClient
from queries.appointments import AppointmentRepository
from main import app


client = TestClient(app)


class EmptyAppointmentQueries:
    def get_all_appointments(self):
        return []


def test_get_all_appointments():
    # Arrange
    app.dependency_overrides[AppointmentRepository] = EmptyAppointmentQueries
    # Act
    response = client.get("/appointment/")
    # Clean up
    app.dependency_overrides = {}
    # Assert
    assert response.status_code == 200
    assert response.json() == []
