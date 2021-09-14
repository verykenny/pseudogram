from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired


class CommentUpdateForm(FlaskForm):
    content = StringField('Content', validators=[DataRequired()])
