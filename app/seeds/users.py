
from app.models import db, User


def seed_users():
    marnie = User(
        username='marnie', email='marnie@aa.io', password='password',
        profileImgUrl='https://images.unsplash.com/photo-1525268771113-32d9e9021a97?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGhpbmd8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')
    bobbie = User(
        username='bobbie', email='bobbie@aa.io', password='password',
        profileImgUrl='https://images.unsplash.com/photo-1444459094717-a39f1e3e0903?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHRoaW5nfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')
    kenny = User(username='Kenneth Donahue', password='kenny123', email='kenny@aa.io',
                 following=[bobbie],
                 profileImgUrl='https://images.unsplash.com/photo-1556566382-339e7b3e26a0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHRoaW5nfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')
    curtis = User(username='Curtis Bridge', password='curtis123', email='curtis@aa.io',
                  following=[bobbie, kenny],
                  profileImgUrl='https://images.unsplash.com/photo-1561815582-930f67c35941?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHRoaW5nfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')

    arath = User(username='Arath Vidrio', password='arath123', email='arath@aa.io',
                 following=[bobbie, kenny, curtis],
                 profileImgUrl='https://images.unsplash.com/photo-1592934935867-14426f90d3de?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHRoaW5nfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')

    u1 = User(username='Johnny Depp', password='password', email='u1@aa.io',
              following=[bobbie, kenny, curtis, arath],
              profileImgUrl='https://images.unsplash.com/photo-1508022463381-46d2f3d3f84a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHRoaW5nfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')
    u2 = User(username='Arnold Schwarzenegger', password='password', email='u2@aa.io',
              following=[bobbie, kenny, curtis, arath, u1],
              profileImgUrl='https://images.unsplash.com/photo-1629793686288-1357ed8fe054?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHRoaW5nfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')
    u3 = User(username='Jim Carrey', password='password', email='u3@aa.io',
              following=[bobbie, kenny, curtis, arath, u1, u2],
              profileImgUrl='https://images.unsplash.com/photo-1511184059754-e4b5bbbcef75?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGhpbmd8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')
    u4 = User(username='Emma Watson', password='password', email='u4@aa.io',
              following=[bobbie, kenny, curtis, arath, u1, u2, u3],
              profileImgUrl='https://images.unsplash.com/photo-1517171771326-cbc7f641008a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')
    u5 = User(username='Robert Downey Jr', password='password', email='u5@aa.io',
              following=[bobbie, kenny, curtis, arath, u1, u2, u3, u4],
              profileImgUrl='https://images.unsplash.com/photo-1615650949849-37db4f2c67db?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dGhpbmd8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')
    u6 = User(username='Daniel Radcliffe', password='password', email='u6@aa.io',
              following=[bobbie, kenny, curtis, arath, u1, u2, u3, u4, u5],
              profileImgUrl='https://images.unsplash.com/photo-1526310627-0c148cd49f80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')
    u7 = User(username='Kevin Andersson', password='password', email='u7@aa.io',
              following=[bobbie, kenny, curtis, arath, u1, u2, u3, u4, u5, u6],
              profileImgUrl='https://images.unsplash.com/photo-1518295426861-b83016f55603?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')
    u8 = User(username='Davina Aston', password='password', email='u8@aa.io',
              following=[bobbie, kenny, curtis,
                         arath, u1, u2, u3, u4, u5, u6, u7],
              profileImgUrl='https://images.unsplash.com/photo-1496442485495-dcb2fa6bb0bc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')
    u9 = User(username='Megan Barber', password='password', email='u9@aa.io',
              following=[bobbie, kenny, curtis, arath,
                         u1, u2, u3, u4, u5, u6, u7, u8],
              profileImgUrl='https://images.unsplash.com/photo-1534330786040-317bdb76ccff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')
    u10 = User(username='Celia Barlow', password='password', email='u10@aa.io',
               following=[bobbie, kenny, curtis, arath,
                          u1, u2, u3, u4, u5, u6, u7, u8, u9],
               profileImgUrl='https://images.unsplash.com/photo-1475692277358-d66444784d6b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')
    u11 = User(username='Walter Brennan', password='password', email='u11@aa.io',
               following=[bobbie, kenny, curtis, arath, u1,
                          u2, u3, u4, u5, u6, u7, u8, u9, u10],
               profileImgUrl='https://images.unsplash.com/photo-1526382925646-27b5eb86796e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')
    u12 = User(username='William Bridges', password='password', email='u12@aa.io',
               following=[bobbie, kenny, curtis, arath, u1,
                          u2, u3, u4, u5, u6, u7, u8, u9, u11],
               profileImgUrl='https://images.unsplash.com/photo-1595399874399-10f2444c4eb2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')
    u13 = User(username='Sandra Burbridge', password='password', email='u13@aa.io',
               following=[bobbie, kenny, curtis, arath, u1,
                          u2, u3, u4, u5, u6, u7, u8, u9, u11, u12],
               profileImgUrl='https://images.unsplash.com/photo-1484684096794-03e03b5e713e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')
    u14 = User(username='Iqbal Bux', password='password', email='u14@aa.io',
               following=[bobbie, kenny, curtis, arath, u1, u2,
                          u3, u4, u5, u6, u7, u8, u9, u11, u12, u13],
               profileImgUrl='https://images.unsplash.com/photo-1613422954567-8eade6e47038?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')
    u15 = User(username='Danielle Casey', password='password', email='u15@aa.io',
               following=[bobbie, kenny, curtis, arath, u1, u2,
                          u3, u4, u5, u6, u7, u8, u9, u11, u12, u14],
               profileImgUrl='https://images.unsplash.com/photo-1464518296092-e812c98d457e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YnVnc3xlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')
    u16 = User(username='James Critchley', password='password', email='u16@aa.io',
               following=[bobbie, kenny, curtis, arath, u1, u2,
                          u3, u4, u5, u6, u7, u8, u9, u11, u12, u15],
               profileImgUrl='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60')
    u17 = User(username='Pauline Davison', password='password', email='u17@aa.io',
               following=[bobbie, kenny, curtis, arath, u1, u2,
                          u3, u4, u5, u6, u7, u8, u9, u11, u12, u15, u16],
               profileImgUrl='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')
    u18 = User(username='Rowena Drysdale', password='password', email='u18@aa.io',
               following=[bobbie, kenny, curtis, arath, u1, u2,
                          u3, u4, u5, u6, u7, u8, u9, u11, u12, u15, u16],
               profileImgUrl='https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60')
    u19 = User(username='Frank Duffin', password='password', email='u19@aa.io',
               following=[bobbie, kenny, curtis, arath, u1, u2, u3,
                          u4, u5, u6, u7, u8, u9, u11, u12, u15, u16, u17, u18],
               profileImgUrl='https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')
    u20 = User(username='Rodney Fay', password='password', email='u20@aa.io',
               following=[bobbie, kenny, curtis, arath, u1, u2, u3, u4,
                          u5, u6, u7, u8, u9, u11, u12, u15, u16, u17, u18, u19],
               profileImgUrl='https://images.unsplash.com/photo-1608889825205-eebdb9fc5806?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')
    demo = User(
        username='Demo', email='demo@aa.io', password='password',
        following=[bobbie, u1, u2, u3, u4, u5, u6, u8,
                   u9, u11, u12, u15, u16, u18, u19, u20],
        profileImgUrl='https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')
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
