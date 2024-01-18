from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import HTMLResponse, FileResponse
import stripe
import os
# this will be used to get the ai compoment of the
# os.system("python AI.py")
app = FastAPI()

origins = [
     "http://localhost",
    "http://localhost:8000",
    "http://localhost:3000"
    ]
app.add_middleware(

    CORSMiddleware,
    allow_orgins = origins,
    allow_credentials = True,
    allow_methods  = ["*"],
    allow_headers = ["*"]
)

@app.get('/')
async def route():
    return {"App": "Hello Virgo AI Saas"}






