from fastapi import FastAPI
import AI.py
app = FastAPI()
@route("/")
def new_route():
    return {"App": "Hello Virgo AI Saas"}
@route("/Post")
def openai_function():
    pass
# will add the new functions below this 


if __name__ == "__main__":
    uvicorn.run(app, host = "")


