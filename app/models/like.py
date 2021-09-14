# Table Likes {
#   id int [pk, increment]
#   userId int
#   imgId int
# }
from .db import db
from datetime import datetime

now = datetime.now()


class Like(db.Model):
    __tablename__ = 'likes'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'))
    imgId = db.Column(db.Integer, db.ForeignKey('images.id'))
    createdAt = db.Column(db.Time, default=f'{now}')

    like = db.relationship("User", back_populates='likes')
    imageLiked = db.relationship("Image", back_populates='likes')

    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'imgId': self.imgId
        }
