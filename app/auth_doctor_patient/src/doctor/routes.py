from fastapi import APIRouter, HTTPException, status, Depends
from .service import DoctorService
from .schemas import Doctor, NewDoctor
from sqlmodel.ext.asyncio.session import AsyncSession
from src.db.main import get_Seesion

auth_router = APIRouter()
doct_service = DoctorService()

@auth_router.post("/signupd", response_model=Doctor, status_code=status.HTTP_201_CREATED)
async def create_user_account(doct_data: NewDoctor, session: AsyncSession = Depends(get_Seesion)):
    email = doct_data.email
    user_exists = await doct_service.user_exists(email, session)
    
    if user_exists:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN, detail="User already exists"
        )
    
    new_doct = await doct_service.create_user(doct_data, session)
    return new_doct
