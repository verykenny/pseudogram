from flask import Blueprint
from app.models.image import Image


image_routes = Blueprint('images', __name__)


@image_routes.route('/')
def image_feed():
    images = Image.query.all()
    images[0].createdAt = images[0].createdAt.strftime('%m/%d/%Y')

    return {'images': images[0].to_dict()}
