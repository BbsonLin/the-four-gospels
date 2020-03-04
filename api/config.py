import os

basedir = os.path.abspath(os.path.dirname(__file__))


SECRET_KEY = os.getenv('FLASK_SECRET_KEY', 'itssecretkey')

UPLOAD_FOLDER = os.environ.get('UPLOAD_FOLDER', os.path.abspath('./uploads/'))
