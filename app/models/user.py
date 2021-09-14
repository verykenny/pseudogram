from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from datetime import datetime

now = datetime.now()


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    profileImgUrl = db.Column(
        db.String, default='https://i.pinimg.com/474x/60/13/a3/6013a33f806d8d74f43ee2eb565ff4dc.jpg')

    image = db.relationship("Image", back_populates='images')
    likes = db.relationship("Like", back_populates='like')
    comment = db.relationship("Comment", back_populates='commenter')

    following = db.relationship(
        'User', lambda: user_following,
        primaryjoin=lambda: User.id == user_following.c.user_id,
        secondaryjoin=lambda: User.id == user_following.c.following_id,
        backref='followers'
    )

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'profileImgUrl': self.profileImgUrl
        }


user_following = db.Table(
    'user_following',
    db.Column('user_id', db.Integer, db.ForeignKey(User.id), primary_key=True),
    db.Column('following_id', db.Integer,
              db.ForeignKey(User.id), primary_key=True),
    db.Column('createdAt', db.Time, default=f'{now}')
)
