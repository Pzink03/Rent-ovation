from fastapi.testclient import TestClient
from queries.property import PropertyRepository
from main import app

client = TestClient(app)


class EmptyPropertyQueries:
    def get_all_properties(self):
        return []


def test_get_all_properties():
    # Arrange
    app.dependency_overrides[PropertyRepository] = EmptyPropertyQueries
    # Act
    response = client.get("/property/")
    # Clean up
    app.dependency_overrides = {}
    # Assert
    assert response.status_code == 200
    assert response.json() == []
