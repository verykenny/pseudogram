
from app.models import db, Comment
from datetime import datetime
now = datetime.now()


def seed_comments():
    c1 = Comment(userId=2, imgId=1, content='best boy!',
                 edited=False, createdAt=f'{now}')
    c2 = Comment(userId=3, imgId=1, content='ok dog',
                 edited=False, createdAt=f'{now}')
    c3 = Comment(userId=2, imgId=3, content='ok dog',
                 edited=False, createdAt=f'{now}')
    # c3 = Comment(userId=2, imgId=3, content='ok dog',
    #              edited=False, createdAt=f'{now}')
    # c3 = Comment(userId=2, imgId=3, content='ok dog',
    #              edited=False, createdAt=f'{now}')
    # c3 = Comment(userId=2, imgId=3, content='ok dog',
    #              edited=False, createdAt=f'{now}')
    # c3 = Comment(userId=2, imgId=3, content='ok dog',
    #              edited=False, createdAt=f'{now}')
    # c3 = Comment(userId=2, imgId=3, content='ok dog',
    #              edited=False, createdAt=f'{now}')
    # c3 = Comment(userId=2, imgId=3, content='ok dog',
    #              edited=False, createdAt=f'{now}')
    # c3 = Comment(userId=2, imgId=3, content='ok dog',
    #              edited=False, createdAt=f'{now}')
    # c3 = Comment(userId=2, imgId=3, content='ok dog',
    #              edited=False, createdAt=f'{now}')
    # c3 = Comment(userId=2, imgId=3, content='ok dog',
    #              edited=False, createdAt=f'{now}')
    # c3 = Comment(userId=2, imgId=3, content='ok dog',
    #              edited=False, createdAt=f'{now}')
    # c3 = Comment(userId=2, imgId=3, content='ok dog',
    #              edited=False, createdAt=f'{now}')
    # c3 = Comment(userId=2, imgId=3, content='ok dog',
    #              edited=False, createdAt=f'{now}')
    # c3 = Comment(userId=2, imgId=3, content='ok dog',
    #              edited=False, createdAt=f'{now}')
    # c3 = Comment(userId=2, imgId=3, content='ok dog',
    #              edited=False, createdAt=f'{now}')
    # c3 = Comment(userId=2, imgId=3, content='ok dog',
    #              edited=False, createdAt=f'{now}')
    # c3 = Comment(userId=2, imgId=3, content='ok dog',
    #              edited=False, createdAt=f'{now}')
    # c3 = Comment(userId=2, imgId=3, content='ok dog',
    #              edited=False, createdAt=f'{now}')
    # c3 = Comment(userId=2, imgId=3, content='ok dog',
    #              edited=False, createdAt=f'{now}')
    # c3 = Comment(userId=2, imgId=3, content='ok dog',
    #              edited=False, createdAt=f'{now}')
    # c3 = Comment(userId=2, imgId=3, content='ok dog',
    #              edited=False, createdAt=f'{now}')

    seeds = [c1, c2, c3]

    for i in seeds:
        db.session.add(i)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_comments():
    db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
    db.session.commit()
