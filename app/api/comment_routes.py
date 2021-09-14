from app.forms.comment_update_form import CommentUpdateForm
from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import db, User, Comment, Image

comment_routes = Blueprint('comments', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


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


@comment_routes.route('/<int:commentId>', methods=['PUT'])
@login_required
def update_comment(commentId):

    form = CommentUpdateForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        comment = Comment.query.get(commentId)
        comment.content = form['content'].data
        comment.edited = True
        db.session.add(comment)
        db.session.commit()
        return {'comment': comment.to_dict()}

    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@comment_routes.route('/<int:commentId>', methods=['DELETE'])
@login_required
def delete_comment(commentId):
    comment = Comment.query.get(commentId)
    db.session.delete(comment)
    db.session.commit()
    return {'comment': comment.to_dict()}
