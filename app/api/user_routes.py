from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from sqlalchemy.orm import joinedload
from app.models import db, User
from app.forms import UserUpdateForm

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


@user_routes.route('/<int:id>', methods=['PUT'])
@login_required
def update_user(id):
    form = UserUpdateForm()

    if form.validate_on_submit():
        user = User.query.get(id)
        form.populate_obj(user)
        user.profileImgUrl = form['profileImgUrl'].data

        db.session.add(user)
        db.session.commit(user)

    return user.to_dict()


@user_routes.route('/<int:userId>/followings')
@login_required
def user_followings(userId):
    paramUser = User.query.get(userId)
    return {'followings': [user.to_dict() for user in paramUser.following]}


@user_routes.route('/<int:userId>/followings/create', methods=['POST'])
def follow_user(userId):
    session_user = User.query.get(current_user.get_id())
    user = User.query.get(userId)
    session_user.following.append(user)
    db.session.add(session_user)
    db.session.commit()

    return {'following': user.to_dict()}


@user_routes.route('/<int:userId>/followings/delete', methods=['DELETE'])
def unfollow_user(userId):
    session_user = User.query.get(current_user.get_id())
    user = User.query.get(userId)
    session_user.following = \
        [user for user in session_user.following if user.id != userId]
    db.session.add(session_user)
    db.session.commit()

    return {'unfollowed': user.to_dict()}


@user_routes.route('/<int:userId>/followers')
@login_required
def user_followers(userId):
    paramUser = User.query.get(userId)
    users = User.query.all()

    return ({
        'followers':
            [user.to_dict() for user in users if paramUser in user.following]
    })


@user_routes.route('/<int:userId>/images')
@login_required
def user_images(userId):
    user = User.query.options(joinedload(User.image)).get(userId)
    return {'images': [image.to_dict_extended() for image in user.image]}
