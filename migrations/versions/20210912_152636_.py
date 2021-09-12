"""empty message

Revision ID: 5661a79eb852
Revises: eedd295a5a3a
Create Date: 2021-09-12 15:26:36.687281

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '5661a79eb852'
down_revision = 'eedd295a5a3a'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('comments',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('images',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('userId', sa.Integer(), nullable=True),
    sa.Column('imgUrl', sa.String(), nullable=False),
    sa.Column('caption', sa.String(length=255), nullable=True),
    sa.Column('totalLikes', sa.Integer(), nullable=False),
    sa.Column('createdAt', sa.Time(), nullable=False),
    sa.ForeignKeyConstraint(['userId'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('likes',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('userId', sa.Integer(), nullable=True),
    sa.Column('imgId', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['imgId'], ['images.id'], ),
    sa.ForeignKeyConstraint(['userId'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('likes')
    op.drop_table('images')
    op.drop_table('comments')
    # ### end Alembic commands ###
