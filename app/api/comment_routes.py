from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from sqlalchemy.orm import joinedload
from app.models import db, User, Comment

comment_routes = Blueprint('comments', __name__)


@comment_routes.route('/')
@login_required
def get_comments():
    return {'users': 'success'}
