
from app.models import db, Image
from datetime import datetime

now = datetime.now()


def seed_images():
    img1 = Image(userId=2, imgUrl='https://scontent-bos3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/211360836_1721868358020900_8685700322860583052_n.jpg?_nc_ht=scontent-bos3-1.cdninstagram.com&_nc_cat=100&_nc_ohc=uKK7qzRdSbMAX-1tXZX&edm=AP_V10EBAAAA&ccb=7-4&oh=9cb9e959ad18640ea35ccb504e841ff4&oe=6145912E&_nc_sid=4f375e',
                 caption='Don’t trust everything you see, even salt looks like sugar', totalLikes=0, createdAt=f'{now}')
    img2 = Image(userId=1, imgUrl='https://scontent-bos3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/241289134_1760211510845481_5556064939689026643_n.jpg?_nc_ht=scontent-bos3-1.cdninstagram.com&_nc_cat=1&_nc_ohc=hQevMUfNS_wAX_8yZH1&edm=AP_V10EBAAAA&ccb=7-4&oh=2a052c5598b376eba9be35dd02db4d94&oe=61473167&_nc_sid=4f375e',
                 caption='Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway. -Earl Nightingale', totalLikes=0, createdAt=f'{now}')
    img3 = Image(userId=4, imgUrl='https://scontent-bos3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/240727234_143337561290067_3292789234057491659_n.jpg?_nc_ht=scontent-bos3-1.cdninstagram.com&_nc_cat=103&_nc_ohc=oCcNWV4ouxEAX9H8ViC&edm=AP_V10EBAAAA&ccb=7-4&oh=6e716a2c55f24640611c76ba38e1ce63&oe=61477C64&_nc_sid=4f375e',
                 caption='Humble with a hint of Kanye', totalLikes=0, createdAt=f'{now}')
    img4 = Image(userId=11, imgUrl='https://scontent-bos3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/241313556_825495628127393_6172199682946108866_n.jpg?_nc_ht=scontent-bos3-1.cdninstagram.com&_nc_cat=105&_nc_ohc=WlI4v9CjuIgAX9BTkig&edm=AP_V10EBAAAA&ccb=7-4&oh=c3725b55ff5fd1fbddd94106a09e4349&oe=61461656&_nc_sid=4f375e',
                 caption='Can’t share won’t share', totalLikes=0, createdAt=f'{now}')
    img5 = Image(userId=2, imgUrl='https://scontent-bos3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/241502486_268542498442035_3047132126094182475_n.jpg?_nc_ht=scontent-bos3-1.cdninstagram.com&_nc_cat=103&_nc_ohc=JTgknTzZlwsAX-xgjP6&edm=AP_V10EBAAAA&ccb=7-4&oh=87dce061ef9ed1e6c7f08567d851b6d0&oe=61470931&_nc_sid=4f375e',
                 caption='*sprays Febreze on your attitude*', totalLikes=0, createdAt=f'{now}')
    img6 = Image(userId=3, imgUrl='https://scontent-bos3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/241104140_601322537534587_2226265466462319581_n.jpg?_nc_ht=scontent-bos3-1.cdninstagram.com&_nc_cat=107&_nc_ohc=XpwG1e1nS74AX_FWhzm&edm=AP_V10EBAAAA&ccb=7-4&oh=28e07b40cfefed7909c127a66c6fac0e&oe=614614C2&_nc_sid=4f375e',
                 caption='What’s an emoji for your mood right now?', totalLikes=0, createdAt=f'{now}')
    img7 = Image(userId=4, imgUrl='https://scontent-bos3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/241422619_210309647818688_1482025412761223410_n.jpg?_nc_ht=scontent-bos3-1.cdninstagram.com&_nc_cat=108&_nc_ohc=nBCvkKn7a3wAX_C_EBr&edm=AP_V10EBAAAA&ccb=7-4&oh=ae9ca0205c9aee723d5045dde41aaf90&oe=6145F424&_nc_sid=4f375e',
                 caption='Hot chocolate weather', totalLikes=0, createdAt=f'{now}')
    img8 = Image(userId=10, imgUrl='https://scontent-bos3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/240584496_880248892581610_4756569627164477175_n.jpg?_nc_ht=scontent-bos3-1.cdninstagram.com&_nc_cat=110&_nc_ohc=WG3Xm_JUctIAX8dlRU5&edm=AP_V10EBAAAA&ccb=7-4&oh=7469fcd01ac77d787a402493c2ce31a6&oe=61467FB7&_nc_sid=4f375e',
                 caption='Adulting is soup but I am a fork', totalLikes=0, createdAt=f'{now}')
    img9 = Image(userId=15, imgUrl='https://scontent-bos3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/241732141_261607092480472_2241362092222941137_n.jpg?_nc_ht=scontent-bos3-1.cdninstagram.com&_nc_cat=104&_nc_ohc=FhPxzTtkT4QAX8aC6GL&edm=AP_V10EBAAAA&ccb=7-4&oh=9bb60f6b1800369484dcff5409dd93f2&oe=6146B8A4&_nc_sid=4f375e',
                 caption='I don’t take shit personal from a person who don’t know me personally', totalLikes=0, createdAt=f'{now}')
    img10 = Image(userId=12, imgUrl='https://scontent-bos3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/235941685_923484201567088_9007846525463466972_n.jpg?_nc_ht=scontent-bos3-1.cdninstagram.com&_nc_cat=104&_nc_ohc=K4fULRM6R-EAX9dhJBL&edm=AP_V10EBAAAA&ccb=7-4&oh=f56f3441883368470a74239b065e2107&oe=61469613&_nc_sid=4f375e',
                  caption='Not every paradise is tropical', totalLikes=0, createdAt=f'{now}')
    img11 = Image(userId=13, imgUrl='https://scontent-bos3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/241273223_4174546335996425_8232232217592669842_n.jpg?_nc_ht=scontent-bos3-1.cdninstagram.com&_nc_cat=105&_nc_ohc=Yqe3Y4AyNg4AX_gk_yo&edm=AP_V10EBAAAA&ccb=7-4&oh=3e678c8e69f7748dd877133cc5b65395&oe=6146B3F4&_nc_sid=4f375e',
                  caption='Paris is always a good idea', totalLikes=0, createdAt=f'{now}')
    img12 = Image(userId=21, imgUrl='https://scontent-bos3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/240944853_1456384901389535_6195198196015235446_n.jpg?_nc_ht=scontent-bos3-1.cdninstagram.com&_nc_cat=111&_nc_ohc=nt4X7uOCQQQAX-Y08LM&edm=AP_V10EBAAAA&ccb=7-4&oh=b0818979908e5c51842c01b6613aa147&oe=61464B57&_nc_sid=4f375e',
                  caption='You don’t get what you wish for, you get what you work for', totalLikes=0, createdAt=f'{now}')
    img13 = Image(userId=12, imgUrl='https://scontent-bos3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/240954199_162542229355407_973305739198101366_n.jpg?_nc_ht=scontent-bos3-1.cdninstagram.com&_nc_cat=103&_nc_ohc=sXGGMLNkSt8AX_Fp4Mt&edm=AP_V10EBAAAA&ccb=7-4&oh=e313ba2f77d0d3cef368b7094dca8939&oe=6147444B&_nc_sid=4f375e',
                  caption='I miss you like an idiot misses the point', totalLikes=0, createdAt=f'{now}')
    img14 = Image(userId=2, imgUrl='https://scontent-bos3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/241461375_615749002921393_6962039561088311958_n.jpg?_nc_ht=scontent-bos3-1.cdninstagram.com&_nc_cat=101&_nc_ohc=xmZcj0lS370AX_r65RG&edm=AP_V10EBAAAA&ccb=7-4&oh=d23c782534064663b2ae07a60d9ddef1&oe=6146B03E&_nc_sid=4f375e',
                  caption='Whatever sprinkles your donuts', totalLikes=0, createdAt=f'{now}')
    img15 = Image(userId=4, imgUrl='https://scontent-bos3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/241325097_2211391389160128_1329918609485431779_n.jpg?_nc_ht=scontent-bos3-1.cdninstagram.com&_nc_cat=100&_nc_ohc=pScpHCaS4jkAX9Xl3fG&edm=AP_V10EBAAAA&ccb=7-4&oh=02eb94718123e6deb7d46b849fc7b2c1&oe=6146B6DF&_nc_sid=4f375e',
                  caption='Life is a combination of magic and pasta', totalLikes=0, createdAt=f'{now}')
    img16 = Image(userId=1, imgUrl='https://scontent-bos3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/241313395_929564777923632_8240248403840778671_n.jpg?_nc_ht=scontent-bos3-1.cdninstagram.com&_nc_cat=100&_nc_ohc=H8lixCMSOM8AX85B9_I&edm=AP_V10EBAAAA&ccb=7-4&oh=e5aadf7d0f5b89d14f088a1a29ef41db&oe=6146D09D&_nc_sid=4f375e',
                  caption='Where to? Anywhere.', totalLikes=0, createdAt=f'{now}')
    img17 = Image(userId=3, imgUrl='https://scontent-bos3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/241313553_367448278430103_1050043849276172916_n.jpg?_nc_ht=scontent-bos3-1.cdninstagram.com&_nc_cat=103&_nc_ohc=8rPduBLQniQAX_wHY-f&edm=AP_V10EBAAAA&ccb=7-4&oh=e08b7d269105b68ac166d614e0b8a5e3&oe=61468CAC&_nc_sid=4f375e',
                  caption='Just burned 2000 calories. That’s the last time I leave brownies in the oven while I nap', totalLikes=0, createdAt=f'{now}')
    img18 = Image(userId=15, imgUrl='https://scontent-bos3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/175897058_743056323049813_5854654131722753031_n.jpg?_nc_ht=scontent-bos3-1.cdninstagram.com&_nc_cat=101&_nc_ohc=CJFao_mRTIYAX8KCkKV&edm=AP_V10EBAAAA&ccb=7-4&oh=6a9e7bc17b9d2010d40a9513504d5540&oe=6145E267&_nc_sid=4f375e',
                  caption='Forget the past, you’ve got me now', totalLikes=0, createdAt=f'{now}')
    img19 = Image(userId=18, imgUrl='https://scontent-bos3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/223055818_5948900601848118_2079185919246189912_n.jpg?_nc_ht=scontent-bos3-1.cdninstagram.com&_nc_cat=106&_nc_ohc=B1hhwQn957MAX9Ee8az&edm=AP_V10EBAAAA&ccb=7-4&oh=4438e0611e8c51c632836c67a66c737d&oe=61477D02&_nc_sid=4f375e',
                  caption='Where’s your favorite place to shop right now?', totalLikes=0, createdAt=f'{now}')
    img20 = Image(userId=11, imgUrl='https://scontent-bos3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/233684996_1023612408469320_8616954672259538491_n.jpg?_nc_ht=scontent-bos3-1.cdninstagram.com&_nc_cat=100&_nc_ohc=rXT0ewHzS2oAX_3TGxx&tn=SjApWnw_Sr9IgRF-&edm=AP_V10EBAAAA&ccb=7-4&oh=e5f4758721b51fc77add0449475be8fa&oe=61472DAF&_nc_sid=4f375e',
                  caption='Are you a dog person or a cat person?', totalLikes=0, createdAt=f'{now}')
    img21 = Image(userId=8, imgUrl='https://scontent-bos3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/241737403_134124125608472_5512465594492866085_n.jpg?_nc_ht=scontent-bos3-1.cdninstagram.com&_nc_cat=108&_nc_ohc=4A_QAlNNoOgAX-fUGTW&edm=AP_V10EBAAAA&ccb=7-4&oh=bdfc3a76963aac7d6fbd888dd7751e95&oe=6147736E&_nc_sid=4f375e',
                  caption='Don’t study me, you won’t graduate', totalLikes=0, createdAt=f'{now}')
    img22 = Image(userId=9, imgUrl='https://scontent-bos3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/241180811_627475031567687_6293247585003072602_n.jpg?_nc_ht=scontent-bos3-1.cdninstagram.com&_nc_cat=111&_nc_ohc=7tra0jJqp4kAX-1hbds&edm=AP_V10EBAAAA&ccb=7-4&oh=aa0a71f3d57c7df69c8556b2a4abfce9&oe=61478652&_nc_sid=4f375e',
                  caption='The secret ingredient is always cheese', totalLikes=0, createdAt=f'{now}')
    img23 = Image(userId=7, imgUrl='https://scontent-bos3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/241381898_388343556242535_9014011703708641165_n.jpg?_nc_ht=scontent-bos3-1.cdninstagram.com&_nc_cat=103&_nc_ohc=vHVGcAQK0tgAX-sgbsE&edm=AP_V10EBAAAA&ccb=7-4&oh=1e6e691e60daec2dec1128c1dde101c3&oe=6146D966&_nc_sid=4f375e',
                  caption='What happened to me? I grew up.', totalLikes=0, createdAt=f'{now}')
    img24 = Image(userId=8, imgUrl='https://scontent-bos3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/241239194_443572403563871_2819986580433092326_n.jpg?_nc_ht=scontent-bos3-1.cdninstagram.com&_nc_cat=111&_nc_ohc=T_Wh9dYHtC0AX9PiCZT&edm=AP_V10EBAAAA&ccb=7-4&oh=694a454b3ef1287ebd898d9830353f06&oe=61467793&_nc_sid=4f375e',
                  caption='Nothing is gone forever, only out of place -Mary Poppins', totalLikes=0, createdAt=f'{now}')
    img25 = Image(userId=5, imgUrl='https://scontent-bos3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/241474966_263507995619307_5381408195349789521_n.jpg?_nc_ht=scontent-bos3-1.cdninstagram.com&_nc_cat=103&_nc_ohc=9pI3Y5C-tpoAX9LZgAT&edm=AP_V10EBAAAA&ccb=7-4&oh=0ae641d52b1f24c7a339bf1dab721e92&oe=61468F0C&_nc_sid=4f375e',
                  caption='Yeah working is great, but have you tried travelling?', totalLikes=0, createdAt=f'{now}')
    img26 = Image(userId=4, imgUrl='https://scontent-bos3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/241448060_354079163082945_333192455394769363_n.jpg?_nc_ht=scontent-bos3-1.cdninstagram.com&_nc_cat=109&_nc_ohc=jkcDmRP8Ag4AX9AdXPU&edm=AP_V10EBAAAA&ccb=7-4&oh=aa119ccc30b1d61051ee302ee8ac0f0b&oe=614696F1&_nc_sid=4f375e',
                  caption='In most cases, being a good boss means hiring talented people and then getting out of their way. -Tina Fey', totalLikes=0, createdAt=f'{now}')
    img27 = Image(userId=7, imgUrl='https://scontent-bos3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/241272321_1172808646574862_8622460035177077085_n.jpg?_nc_ht=scontent-bos3-1.cdninstagram.com&_nc_cat=106&_nc_ohc=6cWdeoRagpsAX-Jdg0Q&edm=AP_V10EBAAAA&ccb=7-4&oh=15621e2830803e8f8bf47acccf55f6bb&oe=6146B7F3&_nc_sid=4f375e',
                  caption='Why do we fall, sir? So that we can learn to pick ourselves up. -Batman Begins', totalLikes=0, createdAt=f'{now}')
    img28 = Image(userId=5, imgUrl='https://scontent-bos3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/240626247_408972183900832_4310673755559401650_n.jpg?_nc_ht=scontent-bos3-1.cdninstagram.com&_nc_cat=104&_nc_ohc=o51ceE6iHU8AX-z1JaP&tn=SjApWnw_Sr9IgRF-&edm=AP_V10EBAAAA&ccb=7-4&oh=de6d099a8054e6413943664ac1d29ff8&oe=614636A5&_nc_sid=4f375e',
                  caption='Vacation calories don’t count', totalLikes=0, createdAt=f'{now}')
    img29 = Image(userId=9, imgUrl='https://scontent-bos3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/241707341_1211678729350927_2470494358672100813_n.jpg?_nc_ht=scontent-bos3-1.cdninstagram.com&_nc_cat=107&_nc_ohc=M9mfkYWhLEQAX_POrKV&edm=AP_V10EBAAAA&ccb=7-4&oh=589beba210ff4cc8ee63d00ee3a16347&oe=614699FD&_nc_sid=4f375e',
                  caption='As someone who has a long history of not understanding anything, I feel confident in my ability to continue not knowing what is going on.', totalLikes=0, createdAt=f'{now}')
    img30 = Image(userId=5, imgUrl='https://scontent-bos3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/241199418_1152435641947210_2824454180866134250_n.jpg?_nc_ht=scontent-bos3-1.cdninstagram.com&_nc_cat=110&_nc_ohc=wf5IR0dgyqsAX-2t8H1&edm=AP_V10EBAAAA&ccb=7-4&oh=6071fdb2579741f5f1a16b053d447785&oe=6145FDE0&_nc_sid=4f375e',
                  caption='Houston, we have a problem.', totalLikes=0, createdAt=f'{now}')
    img31 = Image(userId=2, imgUrl='https://scontent-bos3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/241313884_1511528822573108_756851552076854367_n.jpg?_nc_ht=scontent-bos3-1.cdninstagram.com&_nc_cat=108&_nc_ohc=UkXn5K6rkMsAX8y4jDi&edm=AP_V10EBAAAA&ccb=7-4&oh=396ebbf850fc60cfacadd817a23b2102&oe=6146F1DF&_nc_sid=4f375e',
                  caption='There\'s no place like home - The Wizard of Oz', totalLikes=0, createdAt=f'{now}')
    img32 = Image(userId=4, imgUrl='https://scontent-bos3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/240956865_1246208472494123_8421514024564974408_n.jpg?_nc_ht=scontent-bos3-1.cdninstagram.com&_nc_cat=111&_nc_ohc=B2gZWVUmfdsAX_VzPZY&tn=SjApWnw_Sr9IgRF-&edm=AP_V10EBAAAA&ccb=7-4&oh=1c78a6f61c35c59214a6ce74f2579fbd&oe=61465100&_nc_sid=4f375e',
                  caption='Something something this is pretty', totalLikes=0, createdAt=f'{now}')
    seeds = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13,
             img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26, img27, img28, img29, img30, img31, img32]

    for i in seeds:
        db.session.add(i)

    db.session.commit()


def undo_image():
    db.session.execute('TRUNCATE images RESTART IDENTITY CASCADE;')
    db.session.commit()
