from flask import Blueprint
from app.models.image import Image


image_routes = Blueprint('images', __name__)


@image_routes('/')
def image_feed():
    images = Image.query.all()

    return {'images': [image.to_dict() for image in images]}
