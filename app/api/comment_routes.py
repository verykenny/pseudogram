from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from sqlalchemy.orm import joinedload
from app.models import db, User, Comment

comment_routes = Blueprint('comments', __name__)


@comment_routes.route('/')
@login_required
def get_comments():
    user = User.query.get(current_user.get_id())
    user_comments = [comment.to_dict() for comment in user.comment]
    following = [user.id for user in user.following]
    followings_comments = Comment.query.filter(Comment.userId.in_(following)).all()

    return {'comments': [comment.to_dict() for comment in followings_comments] + user_comments}
