from fastapi import FastAPI
from contextlib import asynccontextmanager
from src.doctor.routes import auth_router
from src.db.main import init_db

version = "v1"

@asynccontextmanager
async def life_span(app: FastAPI):
    print("Server is starting ...")
    await init_db()  
    yield
    print("Server is shutting down ....")

app = FastAPI(
    version=version,
    lifespan=life_span
)

app.include_router(auth_router, prefix=f"/api/{version}/auths", tags=["auths"])
