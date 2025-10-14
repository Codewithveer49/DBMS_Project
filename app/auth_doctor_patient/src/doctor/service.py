from sqlalchemy.ext.asyncio import AsyncSession
from .schemas import NewDoctor
from sqlmodel import select
from .models import Doctor
from fastapi import HTTPException
from .utils import generate_password_hash


class DoctorService:
    async def get_doctor_by_email(self, email: str, session: AsyncSession):
        statement = select(Doctor).where(Doctor.email == email)
        result = await session.execute(statement)
        return result.scalar_one_or_none()
    
    async def user_exists(self, email: str, session: AsyncSession):
        return await self.get_doctor_by_email(email, session) is not None
    
    async def create_user(self, doct_data: NewDoctor, session: AsyncSession):
        doct_data_dict = doct_data.model_dump()
        password = doct_data_dict.pop("password")   

        if await self.user_exists(doct_data_dict["email"], session):
            raise HTTPException(status_code=400, detail="User already exists")
        
        password_hash = generate_password_hash(password)

        new_doct = Doctor(
            **doct_data_dict,
            password_hash=password_hash
        )
        
        session.add(new_doct)
        await session.commit()
        await session.refresh(new_doct)
        return new_doct
