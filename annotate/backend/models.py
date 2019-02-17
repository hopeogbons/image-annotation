from django.db import models


class Image(models.Model):
    title = models.CharField(max_length=100, unique=True)
    desc = models.CharField(max_length=100)
    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)
    date_deleted = models.DateTimeField(blank=True, null=True)

    def __str__(self):
        return self.title
