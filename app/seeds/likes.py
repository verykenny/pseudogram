from app.models import db, Like


def seed_likes():
    like1 = Like(userId=1, imgId=1)
    like2 = Like(userId=2, imgId=1)
    like3 = Like(userId=3, imgId=1)

    db.session.add(like1)
    db.session.add(like2)
    db.session.add(like3)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_likes():
    db.session.execute('TRUNCATE likes RESTART IDENTITY CASCADE;')
    db.session.commit()
