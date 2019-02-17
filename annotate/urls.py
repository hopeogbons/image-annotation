from django.contrib import admin
from django.urls import path, re_path, include
from django.views.generic import TemplateView
from rest_framework.routers import DefaultRouter
from annotate.backend.views import ImageViewSet

router = DefaultRouter()
router.register(r'images', ImageViewSet, base_name='image')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/', include(router.urls)),
    re_path('.*', TemplateView.as_view(template_name='index.html')),
]