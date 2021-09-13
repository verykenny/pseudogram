from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired


class ImageUploadForm(FlaskForm):
    imgUrl = StringField('Image Url', validators=[DataRequired()])
    caption = StringField('Caption')
