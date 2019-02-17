from annotate.backend.models import Image
from rest_framework import serializers


class ImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = Image
        fields = ('id', 'title', 'desc', 'date_created', 'date_updated', 'date_deleted')
