from django.views.generic import TemplateView
from django.views.static import serve
from django.urls import re_path
from django.conf import settings

urlpatterns = [
    re_path('^static/(?P<path>.*)$', serve, {'document_root': settings.STATIC_ROOT}),
    re_path(r'^.*$', TemplateView.as_view(template_name='base.html')),
]
