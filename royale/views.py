from django.shortcuts import render,redirect
from .models import Email,Contact
from django.template.loader import render_to_string 
from django.contrib.sites.shortcuts import get_current_site
from django.core.mail import EmailMessage,EmailMultiAlternatives,send_mail
from .forms import subscriberForm,contactForm
from django.conf import settings

# Create your views here.


def index(request):
    if request.method=='POST':
        form = subscriberForm(request.POST)
        if form.is_valid():
            email = form.cleaned_data.get('emailAddress')
            if Email.objects.filter(emailAddress=email).count()>=1:
                Email.objects.filter(emailAddress=email).delete()
            else:
                form.save()
                send_email(request,form.cleaned_data.get('emailAddress'),'emails/subscriber.html')
            return render(request,"about_us.html",{"subscriberForm":form})
    form = subscriberForm()
    return render(request,'index.html',{"subscriberForm":form})

    
def about(request):
    return render(request,"about_us.html")

def classes(request):
    return render(request,"classes.html",{})



def send_email(request,mail_list,template_name):
    current_site = get_current_site(request)
    mail_subject = 'Welcome to Thobela community.'
    message = render_to_string(template_name, {

    })
    email = EmailMultiAlternatives(
                mail_subject, message, to=[mail_list]
    )
    email.content_subtype = 'html' 
    email.mixed_subtype = 'related'
    email.send()
    
def contact(request):
    contact = contactForm()
    if request.method=='POST':
        print('doing')
        contact = contactForm(request.POST)
        if contact.is_valid():
            contact.save()
            send_email(request,contact.cleaned_data.get('emailAddress'),'emails/email.html')
            return redirect('/contact')
    return render(request,"contact.html",{"contactForm":contact})

