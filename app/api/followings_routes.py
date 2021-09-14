from flask import Blueprint


followings_routes = Blueprint('followings', __name__)


@followings_routes.route('/create', methods=['POST'])
def follow_user():
    return {'message': 'success'}
