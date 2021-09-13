from .db import db


class Follow(db.Model):
    __tablename__ = 'follows'

    id = db.Column(db.Integer, primary_key=True)
    followingUserId = db.Column(db.Integer, db.ForeignKey('users.id'))
    followerUserId = db.Column(db.Integer, db.ForeignKey('users.id'))

    following = db.relationship("User", back_populates='follow')
    folower = db.relationship("User", back_populates='followers')

    def to_dict(self):
        return {
            'id': self.id,
            'followingUserId': self.followingUserId,
            'followerUserId': self.followerUserId
        }
