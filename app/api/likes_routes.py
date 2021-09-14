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
    likes = Like.query.filter(Like.userId == current_user.get_id()).all()
    other_likes = Like.query.filter(Like.userId.in_(followings)).all()
    likes = likes + other_likes
    return {'likes': [like.to_dict() for like in likes]}


# @likes_routes.route('/<int:likeId>', methods=['DELETE'])
# def un_like(likeId):
#     like = Like.query.get(likeId)
#     db.session.delete(like)
#     db.session.commit()
#     return {'like': like.to_dict()}
