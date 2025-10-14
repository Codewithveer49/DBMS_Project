from pydantic import BaseModel, EmailStr, Field
import uuid
from datetime import datetime
from typing import Optional

class Doctor(BaseModel):
    uid: uuid.UUID
    firstname: str
    lastname: str
    medical_specialty: str
    medical_license_number: str
    phoneno: str
    email: str
    created_at: datetime

    class Config:
        from_attributes = True


class NewDoctor(BaseModel):
    firstname: str
    lastname: str
    medical_specialty: str
    medical_license_number: str
    phoneno: str
    email: EmailStr
    password: str                          
    created_at: datetime = Field(default_factory=datetime.utcnow)


class UpdateDoctor(BaseModel):
    firstname: Optional[str] = None
    lastname: Optional[str] = None
    medical_specialty: Optional[str] = None
    phoneno: Optional[str] = None
    email: Optional[EmailStr] = None
