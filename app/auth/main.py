from fastapi import FastAPI , Depends ,status,HTTPException
import models
from database import engine
from sqlalchemy.orm import Session
from pydantic import BaseModel
from typing import Annotated

app = FastAPI()
models.Base.metadata.create_all(bind=engine)

def get_db():
    db = Session(bind=engine,expire_on_commit=False)
    try:
        yield db
    finally:
        db.close()

db_dependency = Annotated[Session,Depends(get_db)]

@app.get("/",status_code=status.HTTP_200_OK)
async def user(user:None,db:db_dependency):
    if user is None:
        raise HTTPException(status_code=401,detail="Authentication Failed")
    return {"user":user}