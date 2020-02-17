from django import forms
from .models import Email,Contact


class subscriberForm(forms.ModelForm):
    class Meta:
        model = Email
        fields=['name','emailAddress']


class contactForm(forms.ModelForm):
    message = forms.CharField(widget=forms.Textarea(attrs={'width':"100%", 'cols' : "50", 'rows': "5", }))
    class Meta:
        model = Contact
        fields = ['name','emailAddress','message']

