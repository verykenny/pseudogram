from flask_wtf import FlaskForm
from wtforms import StringField


class CommentUpdateForm(FlaskForm):
    content = StringField('Content')
