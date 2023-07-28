from fastapi.testclient import TestClient
from main import app

client = TestClient(app)


def test_get_landlord_appointment_history():
    # Sample data for landlord appointment history
    def get_landlord_appointment_history(landlord_id):
        appointments = [
            {
                "id": 1,
                "landlord_id": landlord_id,
                "datetime": "2023-07-28T10:00:00",
                "description": "Meeting with tenant 1",
            },
            {
                "id": 2,
                "landlord_id": landlord_id,
                "datetime": "2023-07-30T15:30:00",
                "description": "Property inspection",
            },
        ]
        return appointments

    # Mocking the function that retrieves landlord appointment history
    app.dependency_overrides[
        get_landlord_appointment_history
    ] = get_landlord_appointment_history

    landlord_id = 123

    response = client.get(f"/appointment/history/{landlord_id}")

    app.dependency_overrides = {}

    assert response.status_code == 200
    assert isinstance(response.json(), list)
    assert len(response.json()) > 0
