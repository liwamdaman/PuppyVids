"""change name.

Revision ID: 12141ad7e8d4
Revises: 66d9e6748b29
Create Date: 2020-05-09 22:59:14.878325

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '12141ad7e8d4'
down_revision = '66d9e6748b29'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('videos',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('videoID', sa.String(length=128), nullable=True),
    sa.Column('title', sa.String(length=128), nullable=True),
    sa.Column('author', sa.String(length=128), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.drop_table('video')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('video',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('videoID', sa.VARCHAR(length=128), autoincrement=False, nullable=True),
    sa.Column('title', sa.VARCHAR(length=128), autoincrement=False, nullable=True),
    sa.Column('author', sa.VARCHAR(length=128), autoincrement=False, nullable=True),
    sa.PrimaryKeyConstraint('id', name='video_pkey')
    )
    op.drop_table('videos')
    # ### end Alembic commands ###