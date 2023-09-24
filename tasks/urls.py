"""
URL configuration for django_crud_api project.

"""
from django.urls import include, path
from rest_framework import routers, serializers, viewsets
from rest_framework.documentation import include_docs_urls
from tasks import views

# api versioning
router = routers.DefaultRouter()
router.register(r"tasks", views.TaskView, "tasks")

urlpatterns = [
    path("api/v1/", include(router.urls)),
    path("docs/", include_docs_urls(title="Tasks API")),
]
