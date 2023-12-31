from fastapi.testclient import TestClient
from queries.rent import RentRepository
from main import app

client = TestClient(app)


class EmptyRentQueries:
    def get_all_rents(self):
        return []


def test_get_all_rents():
    # Arrange
    app.dependency_overrides[RentRepository] = EmptyRentQueries
    # Act
    response = client.get("/rent/")
    # Clean up
    app.dependency_overrides = {}
    # Assert
    assert response.status_code == 200
    assert response.json() == []
