from flask import Blueprint
from flask_login import login_required, current_user
from app.models import db, Like, User

likes_routes = Blueprint('likes', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@likes_routes.route('')
@login_required
def get_likes():
    user = User.query.get(current_user.get_id())
    followings = [user.id for user in user.following]
    images = [image for image in user.image]
    likes = Like.query.filter(Like.userId == current_user.get_id()).all()
    other_likes = Like.query.filter(Like.userId.in_(followings)).all()
    image_likes = [image.likes for image in images]
    all_image_likes = []
    for likes in image_likes:
        all_image_likes += likes
    likes = set(likes + other_likes + all_image_likes)
    return {'likes': [like.to_dict_extended() for like in likes]}
