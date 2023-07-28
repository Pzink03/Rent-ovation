from fastapi import FastAPI
from apscheduler.schedulers.background import BackgroundScheduler
from authenticator import authenticator
from fastapi.middleware.cors import CORSMiddleware
from routers import accounts, property, status, rent, appointments, billings, appointment_history
from queries.rent import RentRepository
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
app.include_router(billings.router)
app.include_router(property.router)
app.include_router(status.router)
app.include_router(rent.router)
app.include_router(appointments.router)
app.include_router(appointment_history.router)


repo = RentRepository()
scheduler = BackgroundScheduler()
scheduler.add_job(repo.daily_update_rent, trigger='cron', hour=0, minute=0)
scheduler.start()
