from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class MyUser(User):
    phone = models.CharField(max_length=12, unique=True)
