"""change string sizes

Revision ID: ae177de09966
Revises: 12141ad7e8d4
Create Date: 2020-05-09 23:40:32.913770

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'ae177de09966'
down_revision = '12141ad7e8d4'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('videos')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('videos',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('videoID', sa.VARCHAR(length=128), autoincrement=False, nullable=True),
    sa.Column('title', sa.VARCHAR(length=128), autoincrement=False, nullable=True),
    sa.Column('author', sa.VARCHAR(length=128), autoincrement=False, nullable=True),
    sa.PrimaryKeyConstraint('id', name='videos_pkey')
    )
    # ### end Alembic commands ###