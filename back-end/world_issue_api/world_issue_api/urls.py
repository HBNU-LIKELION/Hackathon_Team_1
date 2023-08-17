from django.conf.urls import include
from django.urls import re_path, path
from django.contrib import admin
from rest_framework import routers
from issue_api.views import IssueViewSet

router = routers.DefaultRouter() 
router.register('Issue', IssueViewSet) 

urlpatterns = [
    re_path(r'^admin/', admin.site.urls),
    re_path(r'^', include(router.urls)),
    path('Issue/visit/<int:pk>/', IssueViewSet.as_view({'post': 'increment_visit_count'}), name='increment-visit-count'),
]
