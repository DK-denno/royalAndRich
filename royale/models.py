from django.db import models

# Create your models here.

class Email(models.Model):
    name = models.CharField(max_length=250)
    emailAddress = models.EmailField(max_length=30)

    def __str__(self):
        return self.name

class Contact(models.Model):
    name = models.CharField(max_length=250)
    emailAddress = models.EmailField(max_length=30)
    message = models.CharField(max_length=500)

    ordering = ['-id']
    def __str__(self):
        return '{} of email {} said {}'.format(self.name,self.emailAddress,self.message)