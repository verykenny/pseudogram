
from app.models import db, User


def seed_users():
    marnie = User(
        username='marnie', email='marnie@aa.io', password='password')
    bobbie = User(
        username='bobbie', email='bobbie@aa.io', password='password')
    kenny = User(username='Kenneth Donahue', password='kenny123', email='kenny@aa.io',
                 following=[bobbie])
    curtis = User(username='Curtis Bridge', password='curtis123', email='curtis@aa.io',
                  following=[bobbie, kenny])

    arath = User(username='Arath Vidrio', password='arath123', email='arath@aa.io',
                 following=[bobbie, kenny, curtis])

    u1 = User(username='Johnny Depp', password='password', email='u1@aa.io',
              following=[bobbie, kenny, curtis, arath])
    u2 = User(username='Arnold Schwarzenegger', password='password', email='u2@aa.io',
              following=[bobbie, kenny, curtis, arath, u1])
    u3 = User(username='Jim Carrey', password='password', email='u3@aa.io',
              following=[bobbie, kenny, curtis, arath, u1, u2])
    u4 = User(username='Emma Watson', password='password', email='u4@aa.io',
              following=[bobbie, kenny, curtis, arath, u1, u2, u3])
    u5 = User(username='Robert Downey Jr', password='password', email='u5@aa.io',
              following=[bobbie, kenny, curtis, arath, u1, u2, u3, u4])
    u6 = User(username='Daniel Radcliffe', password='password', email='u6@aa.io',
              following=[bobbie, kenny, curtis, arath, u1, u2, u3, u4, u5])
    u7 = User(username='Kevin Andersson', password='password', email='u7@aa.io',
              following=[bobbie, kenny, curtis, arath, u1, u2, u3, u4, u5, u6])
    u8 = User(username='Davina Aston', password='password', email='u8@aa.io',
              following=[bobbie, kenny, curtis, arath, u1, u2, u3, u4, u5, u6, u7])

    u9 = User(username='Megan Barber', password='password', email='u9@aa.io',
              following=[bobbie, kenny, curtis, arath, u1, u2, u3, u4, u5, u6, u7, u8])
    u10 = User(username='Celia Barlow', password='password', email='u10@aa.io',
               following=[bobbie, kenny, curtis, arath, u1, u2, u3, u4, u5, u6, u7, u8, u9])
    u11 = User(username='Walter Brennan', password='password', email='u11@aa.io',
               following=[bobbie, kenny, curtis, arath, u1, u2, u3, u4, u5, u6, u7, u8, u9, u10])
    u12 = User(username='William Bridges', password='password', email='u12@aa.io',
               following=[bobbie, kenny, curtis, arath, u1, u2, u3, u4, u5, u6, u7, u8, u9, u11])
    u13 = User(username='Sandra Burbridge', password='password', email='u13@aa.io',
               following=[bobbie, kenny, curtis, arath, u1, u2, u3, u4, u5, u6, u7, u8, u9, u11, u12])
    u14 = User(username='Iqbal Bux', password='password', email='u14@aa.io',
               following=[bobbie, kenny, curtis, arath, u1, u2, u3, u4, u5, u6, u7, u8, u9, u11, u12, u13])
    u15 = User(username='Danielle Casey', password='password', email='u15@aa.io',
               following=[bobbie, kenny, curtis, arath, u1, u2, u3, u4, u5, u6, u7, u8, u9, u11, u12, u14])
    u16 = User(username='James Critchley', password='password', email='u16@aa.io',
               following=[bobbie, kenny, curtis, arath, u1, u2, u3, u4, u5, u6, u7, u8, u9, u11, u12, u15])
    u17 = User(username='Pauline Davison', password='password', email='u17@aa.io',
               following=[bobbie, kenny, curtis, arath, u1, u2, u3, u4, u5, u6, u7, u8, u9, u11, u12, u15, u16])
    u18 = User(username='Rowena Drysdale', password='password', email='u18@aa.io',
               following=[bobbie, kenny, curtis, arath, u1, u2, u3, u4, u5, u6, u7, u8, u9, u11, u12, u15, u16])
    u19 = User(username='Frank Duffin', password='password', email='u19@aa.io',
               following=[bobbie, kenny, curtis, arath, u1, u2, u3, u4, u5, u6, u7, u8, u9, u11, u12, u15, u16, u17, u18])
    u20 = User(username='Rodney Fay', password='password', email='u20@aa.io',
               following=[bobbie, kenny, curtis, arath, u1, u2, u3, u4, u5, u6, u7, u8, u9, u11, u12, u15, u16, u17, u18, u19])
    demo = User(
        username='Demo', email='demo@aa.io', password='password', following=[bobbie, u1, u2, u3, u4, u5, u6, u7, u8, u9, u11, u12, u15, u16, u17, u18, u19, u20])
    u7.following.append(demo)
    u8.following.append(demo)
    u9.following.append(demo)
    u10.following.append(demo)
    u11.following.append(demo)
    u12.following.append(demo)
    u13.following.append(demo)
    u14.following.append(demo)
    u15.following.append(demo)
    u16.following.append(demo)
    u17.following.append(demo)
    u18.following.append(demo)
    u19.following.append(demo),

    seeds = [marnie, bobbie, demo, kenny, curtis, arath, u1, u2, u3, u4, u5,
             u6, u7, u8, u9, u10, u11, u12, u13, u14, u15, u16, u17, u18, u19, u20]

    for i in seeds:
        db.session.add(i)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
