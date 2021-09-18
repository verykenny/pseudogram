
from app.models import db, Image
from datetime import datetime

now = datetime.now()


def seed_images():
    img1 = Image(userId=2, imgUrl='https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                 caption='Don’t trust everything you see, even salt looks like sugar', totalLikes=0, createdAt=f'{now}')
    img2 = Image(userId=1, imgUrl='https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                 caption='Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway. -Earl Nightingale', totalLikes=0, createdAt=f'{now}')
    img3 = Image(userId=4, imgUrl='https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80',
                 caption='Humble with a hint of Kanye', totalLikes=0, createdAt=f'{now}')
    img4 = Image(userId=11, imgUrl='https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
                 caption='Can’t share won’t share', totalLikes=0, createdAt=f'{now}')
    img5 = Image(userId=2, imgUrl='https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                 caption='*sprays Febreze on your attitude*', totalLikes=0, createdAt=f'{now}')
    img6 = Image(userId=3, imgUrl='https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80',
                 caption='What’s an emoji for your mood right now?', totalLikes=0, createdAt=f'{now}')
    img7 = Image(userId=4, imgUrl='https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                 caption='Hot chocolate weather', totalLikes=0, createdAt=f'{now}')
    img8 = Image(userId=10, imgUrl='https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80',
                 caption='Adulting is soup but I am a fork', totalLikes=0, createdAt=f'{now}')
    img9 = Image(userId=15, imgUrl='https://images.unsplash.com/photo-1542224566-6e85f2e6772f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
                 caption='I don’t take shit personal from a person who don’t know me personally', totalLikes=0, createdAt=f'{now}')
    img10 = Image(userId=12, imgUrl='https://images.unsplash.com/photo-1434394354979-a235cd36269d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1333&q=80',
                  caption='Not every paradise is tropical', totalLikes=0, createdAt=f'{now}')
    img11 = Image(userId=13, imgUrl='https://images.unsplash.com/photo-1485160497022-3e09382fb310?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                  caption='Paris is always a good idea', totalLikes=0, createdAt=f'{now}')
    img12 = Image(userId=21, imgUrl='https://images.unsplash.com/photo-1445363692815-ebcd599f7621?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
                  caption='You don’t get what you wish for, you get what you work for', totalLikes=0, createdAt=f'{now}')
    img13 = Image(userId=12, imgUrl='https://images.unsplash.com/photo-1456428199391-a3b1cb5e93ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80',
                  caption='I miss you like an idiot misses the point', totalLikes=0, createdAt=f'{now}')
    img14 = Image(userId=2, imgUrl='https://images.unsplash.com/photo-1444927714506-8492d94b4e3d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80',
                  caption='Whatever sprinkles your donuts', totalLikes=0, createdAt=f'{now}')
    img15 = Image(userId=4, imgUrl='https://images.unsplash.com/photo-1486520299386-6d106b22014b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                  caption='Life is a combination of magic and pasta', totalLikes=0, createdAt=f'{now}')
    img16 = Image(userId=1, imgUrl='https://images.unsplash.com/photo-1491904768633-2b7e3e7fede5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80',
                  caption='Where to? Anywhere.', totalLikes=0, createdAt=f'{now}')
    img17 = Image(userId=3, imgUrl='https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
                  caption='Just burned 2000 calories. That’s the last time I leave brownies in the oven while I nap', totalLikes=0, createdAt=f'{now}')
    img18 = Image(userId=15, imgUrl='https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1347&q=80',
                  caption='Forget the past, you’ve got me now', totalLikes=0, createdAt=f'{now}')
    img19 = Image(userId=18, imgUrl='https://images.unsplash.com/photo-1439853949127-fa647821eba0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
                  caption='Where’s your favorite place to shop right now?', totalLikes=0, createdAt=f'{now}')
    img20 = Image(userId=11, imgUrl='https://images.unsplash.com/photo-1540390769625-2fc3f8b1d50c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80',
                  caption='Are you a dog person or a cat person?', totalLikes=0, createdAt=f'{now}')
    img21 = Image(userId=8, imgUrl='https://images.unsplash.com/photo-1518021964703-4b2030f03085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1353&q=80',
                  caption='Don’t study me, you won’t graduate', totalLikes=0, createdAt=f'{now}')
    img22 = Image(userId=9, imgUrl='https://images.unsplash.com/photo-1464278533981-50106e6176b1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80',
                  caption='The secret ingredient is always cheese', totalLikes=0, createdAt=f'{now}')
    img23 = Image(userId=26, imgUrl='https://images.unsplash.com/photo-1501822810445-bba370e517ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
                  caption='What happened to me? I grew up.', totalLikes=2, createdAt=f'{now}')
    img24 = Image(userId=26, imgUrl='https://images.unsplash.com/photo-1579846321882-45cf6140c2ee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
                  caption='Nothing is gone forever, only out of place -Mary Poppins', totalLikes=4, createdAt=f'{now}')
    img25 = Image(userId=26, imgUrl='https://images.unsplash.com/photo-1538947151057-dfe933d688d1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
                  caption='Yeah working is great, but have you tried travelling?', totalLikes=2, createdAt=f'{now}')
    img26 = Image(userId=26, imgUrl='https://images.unsplash.com/photo-1472791108553-c9405341e398?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1108&q=80',
                  caption='In most cases, being a good boss means hiring talented people and then getting out of their way. -Tina Fey', totalLikes=1, createdAt=f'{now}')
    img27 = Image(userId=26, imgUrl='https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
                  caption='Why do we fall, sir? So that we can learn to pick ourselves up. -Batman Begins', totalLikes=1, createdAt=f'{now}')
    img28 = Image(userId=26, imgUrl='https://images.unsplash.com/photo-1443632864897-14973fa006cf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
                  caption='Vacation calories don’t count', totalLikes=1, createdAt=f'{now}')
    img29 = Image(userId=26, imgUrl='https://images.unsplash.com/photo-1456066775592-f14f4ea694a4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80',
                  caption='As someone who has a long history of not understanding anything, I feel confident in my ability to continue not knowing what is going on.', totalLikes=1, createdAt=f'{now}')
    img30 = Image(userId=26, imgUrl='https://images.unsplash.com/photo-1508913449378-01b9b8174e46?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
                  caption='Houston, we have a problem.', totalLikes=0, createdAt=f'{now}')
    img31 = Image(userId=26, imgUrl='https://images.unsplash.com/photo-1444065707204-12decac917e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80',
                  caption='There\'s no place like home - The Wizard of Oz', totalLikes=0, createdAt=f'{now}')
    img32 = Image(userId=26, imgUrl='https://images.unsplash.com/photo-1604537529586-87ac173f4310?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
                  caption='boxed water is better', totalLikes=0, createdAt=f'{now}')
    img33 = Image(userId=26, imgUrl='https://images.unsplash.com/photo-1515735543535-12664d2453f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
                  caption='big ole cat fishy', totalLikes=5, createdAt=f'{now}')
    img34 = Image(userId=25, imgUrl='https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80',
                  caption='I have a lot to do this week...', totalLikes=0, createdAt=f'{now}')
    img35 = Image(userId=24, imgUrl='https://images.unsplash.com/photo-1611424564056-65b8f1403ba2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
                  caption='awwww, alice...', totalLikes=0, createdAt=f'{now}')
    img36 = Image(userId=23, imgUrl='https://images.unsplash.com/photo-1631749860812-9cb1bf3d312c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
                  caption='Found this in my backyard last night', totalLikes=0, createdAt=f'{now}')
    img37 = Image(userId=25, imgUrl='https://images.unsplash.com/photo-1629090970758-05e6903db132?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80',
                  caption='What a place...', totalLikes=0, createdAt=f'{now}')
    seeds = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13,
             img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26, img27, img28, img29, img30, img31, img32, img33, img34, img35, img36, img37]

    for i in seeds:
        db.session.add(i)

    db.session.commit()


def undo_image():
    db.session.execute('TRUNCATE images RESTART IDENTITY CASCADE;')
    db.session.commit()
