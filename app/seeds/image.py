
from app.models import db, Image
from datetime import datetime

now = datetime.now()


def seed_images():
    image1 = Image(userId=1, imgUrl='https://scontent-bos3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/211360836_1721868358020900_8685700322860583052_n.jpg?_nc_ht=scontent-bos3-1.cdninstagram.com&_nc_cat=100&_nc_ohc=uKK7qzRdSbMAX-1tXZX&edm=AP_V10EBAAAA&ccb=7-4&oh=9cb9e959ad18640ea35ccb504e841ff4&oe=6145912E&_nc_sid=4f375e',
                   caption='Good boy', totalLikes=0, createdAt=f'{now}')
    image2 = Image(userId=1, imgUrl='https://scontent-bos3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/211360836_1721868358020900_8685700322860583052_n.jpg?_nc_ht=scontent-bos3-1.cdninstagram.com&_nc_cat=100&_nc_ohc=uKK7qzRdSbMAX-1tXZX&edm=AP_V10EBAAAA&ccb=7-4&oh=9cb9e959ad18640ea35ccb504e841ff4&oe=6145912E&_nc_sid=4f375e',
                   caption='Good boy', totalLikes=0, createdAt=f'{now}')
    image3 = Image(userId=1, imgUrl='https://scontent-bos3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/211360836_1721868358020900_8685700322860583052_n.jpg?_nc_ht=scontent-bos3-1.cdninstagram.com&_nc_cat=100&_nc_ohc=uKK7qzRdSbMAX-1tXZX&edm=AP_V10EBAAAA&ccb=7-4&oh=9cb9e959ad18640ea35ccb504e841ff4&oe=6145912E&_nc_sid=4f375e',
                   caption='Good boy', totalLikes=0, createdAt=f'{now}')

    db.session.add(image1)
    db.session.add(image2)
    db.session.add(image3)

    db.session.commit()


def undo_image():
    db.session.execute('TRUNCATE images RESTART IDENTITY CASCADE;')
    db.session.commit()
