# Table ImageTags {
#   id int [pk, increment]
#   imgId int
#   tagId int
# }


from .db import db


class ImageTag(db.Model):
    __tablename__ = 'imageTags'

    id = db.Column(db.Integer, primary_key=True)
    imgId = db.Column(db.Integer, db.ForeignKey('images.id'))
    tagId = db.Column(db.Integer, db.ForeignKey('tags.id'))

    taggedImg = db.relationship("Image", back_populates='tag')
    tagContentId = db.relationship("Tag", back_populates='tagContent')
