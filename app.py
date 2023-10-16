from flask import Flask, render_template
from flask_socketio import SocketIO
from database import fetch_data

app = Flask(__name__)
socketio = SocketIO(app)
app.static_folder = 'static'


@app.route('/')
async def homepage():
  categories, blog_posts = await fetch_data()
  return render_template('homepage.html',
                         categories=categories,
                         blog_posts=blog_posts)


if __name__ == '__main__':
  socketio.run(app, host='0.0.0.0', debug=True)
