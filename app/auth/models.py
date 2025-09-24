from doctor_db import Base
from sqlalchemy import Column, Integer, String


class Doctor_register(Base):
    __tablename__ = "users"
    firstname = Column(String)
    lastname = Column(String)
    Medical_speciality = Column(String)
    Medical_licence = Column(String,unique=True)
    professional_email = Column(String, unique=True, index=True)
    password = Column(String)
    confirm_pass = Column(String)
