
from app.models import db, Image
from datetime import datetime

now = datetime.now()


def seed_images():
    image1 = Image(userId=1, imgUrl='https://live.staticflickr.com/2095/4510974401_0e89737736_b.jpg',
                   caption='Good boy', totalLikes=0, createdAt=f'{now}')
    image2 = Image(userId=1, imgUrl='https://live.staticflickr.com/4106/5126883524_b81ee85f34_m.jpg',
                   caption='Good boy', totalLikes=0, createdAt=f'{now}')
    image3 = Image(userId=1, imgUrl='https://live.staticflickr.com/1/1126630_2d6a2caf67.jpg',
                   caption='Good boy', totalLikes=0, createdAt=f'{now}')

    db.session.add(image1)
    db.session.add(image2)
    db.session.add(image3)

    db.session.commit()


def undo_image():
    db.session.execute('TRUNCATE images RESTART IDENTITY CASCADE;')
    db.session.commit()
