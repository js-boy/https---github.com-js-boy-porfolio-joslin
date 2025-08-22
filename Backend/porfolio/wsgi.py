"""
WSGI config for porfolio project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.2/howto/deployment/wsgi/
"""

import os
from django.core.wsgi import get_wsgi_application

# Load environment variables
from dotenv import load_dotenv
load_dotenv()

# Set the default Django settings module
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'porfolio.settings')

# This application object is used by the development server and any WSGI server
application = get_wsgi_application()

# Apply WSGI middleware here if needed
# from whitenoise import WhiteNoise
# application = WhiteNoise(application, root=os.path.join(BASE_DIR, 'staticfiles'))
