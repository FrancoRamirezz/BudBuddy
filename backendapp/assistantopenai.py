import openai 
import os 

OPENAI_API_KEY= "<YOUR PRIVATE KEY>"
os.environ["OPENAI_API_KEY"] = OPENAI_API_KEY
client = openai.OpenAI()


# the upload file function part 
def file_upload(file):
    file_path = open