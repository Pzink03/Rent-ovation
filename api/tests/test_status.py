from fastapi.testclient import TestClient
from main import app
from queries.status import StatusRepository


client = TestClient(app)


class EmptyStatusQueries:
    def get_all_statuses(self):
        return []


def test_get_all_statues():
    # Arrange
    app.dependency_overrides[StatusRepository] = EmptyStatusQueries
    # Act
    response = client.get("/status/")
    # Clean up
    app.dependency_overrides = {}
    # Assert
    assert response.status_code == 200
    assert response.json() == []
