from rest_framework import serializers
from .models import Issue

class IssueSerializer(serializers.ModelSerializer):
    class Meta:
        model = Issue # 모델 설정
        fields = ('__all__') # 필드 설정