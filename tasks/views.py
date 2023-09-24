from rest_framework import viewsets
from tasks.serializer import TaskSerializer
from tasks.models import Task


class TaskView(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()
