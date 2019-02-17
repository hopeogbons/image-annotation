from annotate.backend.models import Image
from annotate.backend.serializers import ImageSerializer
from rest_framework import viewsets


class ImageViewSet(viewsets.ModelViewSet):
    queryset = Image.objects.all().order_by('-date_created')
    serializer_class = ImageSerializer
