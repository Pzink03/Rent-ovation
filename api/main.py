from fastapi import FastAPI
from apscheduler.schedulers.background import BackgroundScheduler
from authenticator import authenticator
from fastapi.middleware.cors import CORSMiddleware
from routers import accounts, property, status, rent, appointments, billings
from authenticator import authenticator
import os

app = FastAPI()
app.include_router(authenticator.router)
app.include_router(accounts.router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[os.environ.get("CORS_HOST", "http://localhost:3000")],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/launch-details")
def launch_details():
    return {
        "launch_details": {
            "module": 3,
            "week": 17,
            "day": 5,
            "hour": 19,
            "min": "00",
        }
    }


@app.get("/appointment/history/{landlord_id}")
def get_landlord_appointment_history(landlord_id: int):
    # Your logic to fetch the appointment history for the given landlord_id
    # For now, we will return dummy data
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


app.include_router(billings.router)
app.include_router(property.router)
app.include_router(status.router)
app.include_router(rent.router)
app.include_router(appointments.router)
app.include_router(appointment_history_router)
