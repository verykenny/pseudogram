from sqlalchemy import and_
from flask import Blueprint, request
from app.models import db, Image, User, Comment, Like
from flask_login import current_user, login_required
from app.forms import ImageUploadForm, ImageUpdateForm, CommentForm
from datetime import datetime


image_routes = Blueprint('images', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@image_routes.route('')
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
    """
    Add image to the database and return the image
    """
    form = ImageUploadForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        image = Image()
        form.populate_obj(image)
        image.userId = current_user.get_id()
        image.totalLikes = 0
        image.createdAt = datetime.now()
        db.session.add(image)
        db.session.commit()

        return {'image': image.to_dict()}

    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@image_routes.route('/<int:imgId>', methods=['PUT'])
def update_image(imgId):
    """
    Update image caption on the database and return the image
    """
    form = ImageUpdateForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        image = Image.query.get(imgId)
        image.caption = form['caption'].data
        db.session.add(image)
        db.session.commit()
        return {'image': image.to_dict()}

    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@image_routes.route('/<int:imgId>', methods=['DELETE'])
@login_required
def delete_image(imgId):
    """
    Delete and image from the database
    """
    image = Image.query.get(imgId)
    db.session.delete(image)
    db.session.commit()
    return {'imgId': imgId}


@image_routes.route('/<int:imageId>/comments/create', methods=['POST'])
@login_required
def comment_on_image(imageId):
    """
    Add comment on image to the database and return the comment
    """
    form = CommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        comment = Comment()

        form.populate_obj(comment)
        comment.userId = current_user.get_id()
        comment.imgId = imageId
        comment.edited = False
        comment.createdAt = datetime.now()

        db.session.add(comment)
        db.session.commit()

        return {'comment': comment.to_dict()}

    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@image_routes.route('/<int:imageId>/likes/create', methods=['POST'])
@login_required
def like_image(imageId):
    """
    Add like to an image and return the like
    """
    like = Like()
    like.userId = current_user.get_id()
    like.imgId = imageId

    image = Image.query.get(imageId)
    image.totalLikes += 1

    db.session.add(like)
    db.session.add(image)
    db.session.commit()
    return {'like': like.to_dict()}


@image_routes.route('/<int:imgId>/likes/delete', methods=['DELETE'])
def un_like(imgId):
    like = Like.query.filter(and_(Like.userId == current_user.get_id(), Like.imgId == imgId)).first()
    db.session.delete(like)
    db.session.commit()
    return {'like': like.to_dict()}
