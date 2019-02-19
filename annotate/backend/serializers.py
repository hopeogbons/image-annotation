from annotate.backend.models import Image
from rest_framework import serializers


class ImageSerializer(serializers.ModelSerializer):
    count_annotations = serializers.SerializerMethodField()

    @staticmethod
    def get_count_annotations(obj):
        return obj.annotations.count()

    class Meta:
        model = Image
        fields = ('id', 'title', 'desc', 'file_path', 'count_annotations', 'date_created', 'date_updated',
                  'date_deleted')


class AnnotationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ('id', 'image', 'details', 'date_created', 'date_updated', 'date_deleted')
