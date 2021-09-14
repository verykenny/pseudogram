# Table Images {
#   id int [pk, increment]
#   userId int
#   imgUrl varchar
#   caption varchar
#   totalLikes int
#   createdAt timestamp
# }
from .db import db


class Image(db.Model):
    __tablename__ = 'images'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey("users.id"))
    imgUrl = db.Column(db.String, nullable=False)
    caption = db.Column(db.String(255))
    totalLikes = db.Column(db.Integer, nullable=False)
    createdAt = db.Column(db.Time, nullable=False)

    images = db.relationship("User", back_populates='image')
    likes = db.relationship("Like", back_populates='imageLiked')
    comment = db.relationship("Comment", back_populates='image')
    tag = db.relationship("ImageTag", back_populates='taggedImg')

    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'imgUrl': self.imgUrl,
            'caption': self.caption,
            'totalLikes': self.totalLikes,
            'createdAt': self.createdAt.strftime('%m/%d/%Y %H:%M:%S')
        }

    def to_dict_extended(self):

        print('**************************************', dir(self.comment))
        image = {
            'comment': [comm.to_dict() for comm in self.comment]
        }
        # return {**image, **{
        #     'id': self.id,
        #     'userId': self.userId,
        #     'imgUrl': self.imgUrl,
        #     'caption': self.caption,
        #     'totalLikes': self.totalLikes,
        #     'createdAt': self.createdAt.strftime('%m/%d/%Y %H:%M:%S')
        # }}
        return image
