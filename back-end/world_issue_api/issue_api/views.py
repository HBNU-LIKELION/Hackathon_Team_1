from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .serializers import IssueSerializer
from .models import Issue

from django.core.cache import cache
from datetime import timedelta

class IssueViewSet(viewsets.ModelViewSet):
    queryset = Issue.objects.all()
    serializer_class = IssueSerializer

    @action(detail=True, methods=['post'])
    def increment_visit_count(self, request, pk=None):
        issue = self.get_object()

        user_ip = self.get_client_ip(request)
        cache_key = f'issue_visit_{user_ip}_{pk}'

        if cache.get(cache_key):
            return Response({'message': '10분 이내의 방문으로 인해 조회수가 증가하지 않았습니다.'})

        # 사용자의 방문 기록을 남기고 캐시를 10분 후에 만료되도록 설정
        cache.set(cache_key, True, timeout=600)

        issue.visit_count += 1
        issue.save()

        return Response({'message': '방문이 기록되었습니다.'})

    # 클라이언트 IP 주소를 가져오는 헬퍼 함수
    def get_client_ip(self, request):
        x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
        if x_forwarded_for:
            ip = x_forwarded_for.split(',')[0]
        else:
            ip = request.META.get('REMOTE_ADDR')
        return ip