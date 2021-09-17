# Table Comments {
#   id int [pk, increment]
#   userId int
#   imgId int
#   content varchar
#   edited boolean
#   createdAt timestamp
# }
from .db import db


class Comment(db.Model):
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'))
    imgId = db.Column(db.Integer, db.ForeignKey('images.id'))
    content = db.Column(db.String(255), nullable=False)
    edited = db.Column(db.Boolean)
    createdAt = db.Column(db.DateTime)

    commenter = db.relationship("User", back_populates='comment')
    image = db.relationship("Image", back_populates='comment')

    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'imgId': self.imgId,
            'content': self.content,
            'edited': self.edited,
            'createdAt': self.createdAt.strftime('%m/%d/%Y %H:%M:%S')
        }

    def to_dict_extended(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'commenter': self.commenter.to_dict(),
            'imgId': self.imgId,
            'content': self.content,
            'edited': self.edited,
            'createdAt': self.createdAt.strftime('%m/%d/%Y %H:%M:%S')
        }
