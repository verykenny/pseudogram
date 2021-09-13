from flask import Blueprint, request
from app.models import db, Image, User
from flask_login import current_user, login_required
from app.forms import ImageUploadForm
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
