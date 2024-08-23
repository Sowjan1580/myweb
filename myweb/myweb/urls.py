from django.urls import include, path
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', include('myapp.urls')),
]+ static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)