from flask import Blueprint, request
from app.models import Image, User, image
from flask_login import current_user, login_required


image_routes = Blueprint('images', __name__)


@image_routes.route('/images')
@login_required
def image_feed():
    """
    Return list of images created by session user and their followers
    """
    sessionUserId = current_user.get_id()
    user = User.query.get(sessionUserId)
    followings = [user.id for user in user.following]

    images = Image.query.filter(Image.userId == sessionUserId).all()
    followingsImages = Image.query.filter(Image.userId.in_(followings)).all()
    images.extend(followingsImages)

    return {'images': [image.to_dict() for image in images]}


@image_routes.route('/create', methods=['POST'])
@login_required
def upload_image():

    newImage = request.body
    print(newImage)

    image = Image()

    return {'image': image.to_dict()}
