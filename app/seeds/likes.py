from app.models import db, Like


def seed_likes():
    like1 = Like(userId=1, imgId=1)
    like2 = Like(userId=2, imgId=1)
    like3 = Like(userId=3, imgId=1)
    l1 = Like(userId=4, imgId=1)
    l2 = Like(userId=5, imgId=1)
    l3 = Like(userId=26, imgId=1)
    l4 = Like(userId=26, imgId=2)
    l5 = Like(userId=2, imgId=2)
    l6 = Like(userId=6, imgId=2)
    l7 = Like(userId=7, imgId=2)
    l8 = Like(userId=8, imgId=3)
    l9 = Like(userId=9, imgId=23)
    l10 = Like(userId=26, imgId=23)
    l11 = Like(userId=26, imgId=24)
    l12 = Like(userId=12, imgId=24)
    l13 = Like(userId=1, imgId=24)
    l14 = Like(userId=2, imgId=24)
    l15 = Like(userId=14, imgId=25)
    l16 = Like(userId=11, imgId=25)
    l17 = Like(userId=13, imgId=26)
    l18 = Like(userId=26, imgId=27)
    l19 = Like(userId=16, imgId=28)
    l20 = Like(userId=15, imgId=29)
    l21 = Like(userId=1, imgId=11)
    l22 = Like(userId=4, imgId=11)
    l23 = Like(userId=5, imgId=11)
    l24 = Like(userId=26, imgId=11)
    l25 = Like(userId=2, imgId=11)
    l26 = Like(userId=3, imgId=11)
    l27 = Like(userId=2, imgId=12)
    l28 = Like(userId=26, imgId=33)
    l29 = Like(userId=4, imgId=33)
    l30 = Like(userId=9, imgId=33)
    l31 = Like(userId=16, imgId=33)
    l32 = Like(userId=17, imgId=14)
    l33 = Like(userId=17, imgId=15)
    l34 = Like(userId=7, imgId=15)
    l35 = Like(userId=18, imgId=15)
    l36 = Like(userId=8, imgId=15)
    l37 = Like(userId=9, imgId=16)
    l38 = Like(userId=10, imgId=16)
    l39 = Like(userId=1, imgId=16)
    l40 = Like(userId=2, imgId=16)
    l41 = Like(userId=3, imgId=17)
    l42 = Like(userId=4, imgId=19)
    l43 = Like(userId=19, imgId=37)
    l44 = Like(userId=20, imgId=37)
    l45 = Like(userId=25, imgId=37)
    l46 = Like(userId=24, imgId=36)
    l47 = Like(userId=25, imgId=36)
    l48 = Like(userId=26, imgId=35)
    l49 = Like(userId=19, imgId=34)
    l50 = Like(userId=20, imgId=34)

    seed = [like1, like2, like3, l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11, l12, l13, l14, l15, l16, l17, l18,
            l19, l20, l21, l22, l23, l24, l25, l26, l27, l28, l29, l30, l31, l32, l33, l34, l35, l36, l37, l38, l39, l40, l41, l42, l43, l44, l45, l46, l47, l48, l49, l50]
    for i in seed:
        db.session.add(i)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_likes():
    db.session.execute('TRUNCATE likes RESTART IDENTITY CASCADE;')
    db.session.commit()
