from django.contrib.postgres.fields import JSONField
from django.db import models


class Image(models.Model):
    title = models.CharField(max_length=100, unique=True)
    desc = models.CharField(max_length=100)
    file_path = models.CharField(max_length=100)
    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)
    date_deleted = models.DateTimeField(blank=True, null=True)

    def __str__(self):
        return '({}) -> {}'.format(self.id, self.title)


class Annotation(models.Model):
    image = models.ForeignKey(Image, related_name='annotations', on_delete=models.CASCADE)
    details = JSONField()
    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)
    date_deleted = models.DateTimeField(blank=True, null=True)

    def __str__(self):
        return '{} -> {}'.format(self.image, self.details)
