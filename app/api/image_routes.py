from flask import Blueprint, request
from app.models import Image
from flask_login import current_user, login_required


image_routes = Blueprint('images', __name__)


@image_routes.route('/')
def image_feed():
    """
    Return list of images created by session user and their followers
    """
    sessionUserId = current_user.get_id()
    print('**********************************', sessionUserId)
    print('**********************************', request.headers)

    images = Image.query.filter_by(userId=sessionUserId).all()

    return {'images': [image.to_dict() for image in images]}
