from django.urls import path
from django.conf.urls.static import static
from django.conf import settings
from . import views

#Your views go here
urlpatterns=[
    path(r'',views.index,name="home"),
    path(r'about/',views.about,name='about'),
    path(r'classes/<int:code>/',views.classes,name="classes"),
    path(r'contact/',views.contact,name="contact"),

]
if settings.DEBUG:
    urlpatterns+=static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)