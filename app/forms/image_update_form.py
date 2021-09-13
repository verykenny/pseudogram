from flask_wtf import FlaskForm
from wtforms import StringField


class ImageUpdateForm(FlaskForm):
    caption = StringField('Caption')
