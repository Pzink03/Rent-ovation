from fastapi.testclient import TestClient
from main import app
from queries.accounts import AccountRepository


client = TestClient(app)


class EmptyAccountQueries:
    def get_all_accounts(self):
        return []


def test_get_all_accounts():
    # Arrange
    app.dependency_overrides[AccountRepository] = EmptyAccountQueries
    # Act
    response = client.get("/accounts/all/")
    # Clean up
    app.dependency_overrides = {}
    # Assert
    assert response.status_code == 200
    assert response.json() == []
