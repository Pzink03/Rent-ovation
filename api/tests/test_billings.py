from fastapi.testclient import TestClient
from main import app
from queries.billings import BillingsRepository


client = TestClient(app)

class EmptyBillingsQueries:
    def get_all_billings(self):
        return []

def test_get_all_billings():
    #Arrange
    app.dependency_overrides[BillingsRepository] = EmptyBillingsQueries
    #Act
    response = client.get("/billings/")
    #Clean up
    app.dependency_overrides = {}
    #Assert
    assert response.status_code == 200
    assert response.json() == []
