from fastapi import FastAPI
from authenticator import authenticator
from fastapi.middleware.cors import CORSMiddleware
<<<<<<< HEAD
from routers import accounts
=======
from routers import accounts, property, status, rent, appointments
from authenticator import authenticator
>>>>>>> main
import os

app = FastAPI()
app.include_router(authenticator.router)
<<<<<<< HEAD
=======
app.include_router(accounts.router)
>>>>>>> main


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

<<<<<<< HEAD

app.include_router(billings.router)
=======
app.include_router(property.router)
app.include_router(status.router)
app.include_router(rent.router)
app.include_router(appointments.router)
>>>>>>> main
