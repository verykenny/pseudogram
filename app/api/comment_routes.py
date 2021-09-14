from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from sqlalchemy.orm import joinedload
from app.models import db, User, Comment, Image

comment_routes = Blueprint('comments', __name__)


@comment_routes.route('/')
@login_required
def get_comments():
    user = User.query.get(current_user.get_id())
    images = user.image
    comments = []
    for image in images:
        comments = comments + image.comment
    following = [user.id for user in user.following]
    following_images = Image.query.filter(Image.userId.in_(following)).all()
    for image in following_images:
        comments = comments + image.comment
    comments = [comment.to_dict() for comment in comments]

    return {'comments': comments}
