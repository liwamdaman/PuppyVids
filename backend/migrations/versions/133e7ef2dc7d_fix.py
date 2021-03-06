"""fix

Revision ID: 133e7ef2dc7d
Revises: ae177de09966
Create Date: 2020-05-09 23:44:31.519134

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '133e7ef2dc7d'
down_revision = 'ae177de09966'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('videos',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('videoID', sa.String(length=64), nullable=True),
    sa.Column('title', sa.String(length=128), nullable=True),
    sa.Column('author', sa.String(length=64), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('videos')
    # ### end Alembic commands ###
