from django.db import models

class Issue(models.Model):
    title = models.CharField(max_length=9999) # 제목
    country = models.CharField(max_length=15) # 장르
    content = models.TextField()
    url = models.URLField() # 주소
    img = models.CharField(max_length=9999) # 제목
    visit_count = models.IntegerField(default=0)
    created_at = models.CharField(max_length=30, null=True)

    def __str__(self):
        return self.title