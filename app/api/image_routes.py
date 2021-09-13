from flask import Blueprint
from app.models.image import Image


image_routes = Blueprint('images', __name__)


@image_routes.route('/')
def image_feed():
    images = Image.query.all()
    for image in images:
        image.createdAt = image.createdAt.strftime('%m/%d/%Y')
        image = image.to_dict()

    return {'images': images}
