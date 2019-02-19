from annotate.backend.models import Image, Annotation
from annotate.backend.serializers import ImageSerializer, AnnotationSerializer
from rest_framework import viewsets


class ImageViewSet(viewsets.ModelViewSet):
    queryset = Image.objects.all().order_by('-date_created')
    serializer_class = ImageSerializer


class AnnotationViewSet(viewsets.ModelViewSet):
    queryset = Annotation.objects.all().order_by('-date_created')
    serializer_class = AnnotationSerializer
