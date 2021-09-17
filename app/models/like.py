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
    createdAt = db.Column(db.DateTime, default=f'{now}')

    like = db.relationship("User", back_populates='likes')
    imageLiked = db.relationship("Image", back_populates='likes')

    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'imgId': self.imgId,
            'createdAt': self.createdAt.strftime('%m/%d/%Y %H:%M:%S')
        }

    def to_dict_extended(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'user': self.like.to_dict(),
            'imgId': self.imageLiked.to_dict(),
            'createdAt': self.createdAt.strftime('%m/%d/%Y %H:%M:%S')
        }
