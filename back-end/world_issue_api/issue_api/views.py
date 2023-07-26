from rest_framework import viewsets
from .serializers import IssueSerializer
from .models import Issue

class IssueViewSet(viewsets.ModelViewSet):
    queryset = Issue.objects.all()
    serializer_class = IssueSerializer