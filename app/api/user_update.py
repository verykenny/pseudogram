# from flask import Blueprint, jsonify
# from flask_login import login_required, current_user
# from flask_migrate import current
# from app.models import db, User
# from app.forms import UserUpdateForm

# user_update_routes = Blueprint('user_update', __name__)


# def validation_errors_to_error_messages(validation_errors):
#     """
#     Simple function that turns the WTForms validation errors into a simple list
#     """
#     errorMessages = []
#     for field in validation_errors:
#         for error in validation_errors[field]:
#             errorMessages.append(f'{field} : {error}')
#     return errorMessages


# @user_update_routes.route('/', methods=['PUT'])
# @login_required
# def update_user():
#     form = UserUpdateForm()
#     user = User.query.get(current_user.get_id())
#     if form.validate_on_submit():
#         # user.username = form['username'].data
#         # user.email = form['email'].data
#         # user.profileImgUrl = form['profileImgUrl'].data

#         db.session.add(user)
#         db.session.commit(user)
#         return user.to_dict()
#     return {'errors': validation_errors_to_error_messages(form.errors)}, 401
