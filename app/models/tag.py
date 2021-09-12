# Table Tags {
#   id int [pk, increment]
#   tagName varchar
# }
from .db import db


class Tag(db.Model):
    __tablename__ = 'tags'

    id = db.Column(db.Integer, primary_key=True)
    tagName = db.Column(db.String(100), nullable=False)

    tagContent = db.relationship("ImageTag", back_populates='tagContentId')
