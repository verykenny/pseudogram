
from app.models import db, Comment
from datetime import datetime
now = datetime.now()


def seed_comments():
    c1 = Comment(userId=2, imgId=4, content='"Frankly, my dear, I don\'t give a damn." - Gone With the Wind',
                 edited=False, createdAt=f'{now}')
    c2 = Comment(userId=3, imgId=4, content='"I\'m going to make him an offer he can\'t refuse." - The Godfather,',
                 edited=False, createdAt=f'{now}')
    c3 = Comment(userId=3, imgId=4, content='"You don\'t understand! I coulda had class. I coulda been a contender. I could\'ve been somebody, instead of a bum, which is what I am." - On the Waterfront',
                 edited=False, createdAt=f'{now}')
    c4 = Comment(userId=4, imgId=4, content='"Toto, I\'ve got a feeling we\'re not in Kansas anymore." - The Wizard of Oz',
                 edited=False, createdAt=f'{now}')
    c5 = Comment(userId=1, imgId=7, content='"Here\'s looking at you, kid." - Casablanca',
                 edited=False, createdAt=f'{now}')
    c6 = Comment(userId=11, imgId=7, content='"Go ahead, make my day." - Sudden Impact',
                 edited=False, createdAt=f'{now}')
    c7 = Comment(userId=12, imgId=7, content='"All right, Mr. DeMille, I\'m ready for my close-up." - Sunset Boulevard',
                 edited=False, createdAt=f'{now}')
    c8 = Comment(userId=22, imgId=8, content='"May the Force be with you." - Star Wars',
                 edited=False, createdAt=f'{now}')
    c9 = Comment(userId=15, imgId=9, content='"Fasten your seatbelts. It\'s going to be a bumpy night." - All About Eve',
                 edited=False, createdAt=f'{now}')
    c10 = Comment(userId=26, imgId=12, content='"You talking to me?" - Taxi Driver',
                  edited=False, createdAt=f'{now}')
    c11 = Comment(userId=26, imgId=1, content='"What we\'ve got here is failure to communicate." - Cool Hand Luke',
                  edited=False, createdAt=f'{now}')
    c12 = Comment(userId=2, imgId=24, content='"I love the smell of napalm in the morning." - Apocalypse Now',
                  edited=False, createdAt=f'{now}')
    c13 = Comment(userId=3, imgId=23, content='"E.T. phone home." - E.T. The Extra-Terrestrial',
                  edited=False, createdAt=f'{now}')
    c14 = Comment(userId=26, imgId=23, content='"Rosebud." - Citizen Kane',
                  edited=False, createdAt=f'{now}')
    c15 = Comment(userId=26, imgId=26, content='"Made it, Ma! Top of the world!" - White Heat',
                  edited=False, createdAt=f'{now}')
    c16 = Comment(userId=26, imgId=33, content='"Bond. James Bond." - Dr. No',
                  edited=False, createdAt=f'{now}')
    c17 = Comment(userId=26, imgId=31, content='"There\'s no place like home." - The Wizard of Oz',
                  edited=False, createdAt=f'{now}')
    c18 = Comment(userId=26, imgId=32, content='"I\'m walking here! I\'m walking here!" - Midnight Cowboy',
                  edited=False, createdAt=f'{now}')
    c19 = Comment(userId=4, imgId=32, content='"You can\'t handle the truth!" - A Few Good Men',
                  edited=False, createdAt=f'{now}')
    c20 = Comment(userId=7, imgId=1, content='"You\'re gonna need a bigger boat." - Jaws',
                  edited=False, createdAt=f'{now}')
    c21 = Comment(userId=6, imgId=1, content='"I\'ll be back." - The Terminator',
                  edited=False, createdAt=f'{now}')
    c22 = Comment(userId=8, imgId=10, content='"We rob banks." - Bonnie and Clyde',
                  edited=False, createdAt=f'{now}')
    c23 = Comment(userId=9, imgId=12, content='"Shane. Shane. Come back!" - Shane',
                  edited=False, createdAt=f'{now}')
    c24 = Comment(userId=10, imgId=20, content='"Houston, we have a problem." - Apollo 13',
                  edited=False, createdAt=f'{now}')
    c25 = Comment(userId=15, imgId=2, content='"Say "hello" to my little friend!" - Scarface',
                  edited=False, createdAt=f'{now}')
    c26 = Comment(userId=17, imgId=4, content='"Here\'s Johnny!" - The Shining',
                  edited=False, createdAt=f'{now}')
    c27 = Comment(userId=2, imgId=7, content='"Wait a minute, wait a minute. You ain\'t heard nothin\' yet!"',
                  edited=False, createdAt=f'{now}')
    c28 = Comment(userId=1, imgId=9, content='"Yo, Adrian!" - Rocky II',
                  edited=False, createdAt=f'{now}')
    c29 = Comment(userId=16, imgId=8, content='"A martini. Shaken, not stirred." - Goldfinger',
                  edited=False, createdAt=f'{now}')
    c30 = Comment(userId=18, imgId=8, content='"Carpe diem. Seize the day, boys. Make your lives extraordinary." - Dead Poets Society',
                  edited=False, createdAt=f'{now}')
    c31 = Comment(userId=19, imgId=9, content='"What\'s the most you ever lost on a coin toss?" - No Country for Old Men',
                  edited=False, createdAt=f'{now}')
    c32 = Comment(userId=5, imgId=2, content='“You and I are a team, Doc.” “Don’t feed me any more lines from Monsters Inc. It pisses me off.” – Baby Driver',
                  edited=False, createdAt=f'{now}')
    c33 = Comment(userId=4, imgId=3, content='Is everybody okay?',
                  edited=False, createdAt=f'{now}')
    c34 = Comment(userId=26, imgId=37, content='I saw this place in a movie once!',
                  edited=False, createdAt=f'{now}')
    c35 = Comment(userId=22, imgId=34, content='I feel ya! Let me know if you need to talk!',
                  edited=False, createdAt=f'{now}')
    c36 = Comment(userId=19, imgId=37, content='I have actually been here for a wedding with my family!',
                  edited=False, createdAt=f'{now}')
    c37 = Comment(userId=25, imgId=35, content='Loved that book!',
                  edited=False, createdAt=f'{now}')
    c38 = Comment(userId=21, imgId=37, content='COOOOL!!',
                  edited=False, createdAt=f'{now}')
    c39 = Comment(userId=24, imgId=36, content='You\'re telling me that you just *found* this????',
                  edited=False, createdAt=f'{now}')
    c40 = Comment(userId=18, imgId=37, content='It just a church...',
                  edited=False, createdAt=f'{now}')

    seeds = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15,
             c16, c17, c18, c19, c20, c21, c22, c23, c24, c25, c26, c27, c28, c29, c30, c31, c32, c33, c34, c35, c36, c37, c38, c39, c40]

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
