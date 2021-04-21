from flask import Flask, render_template
from flask_jsglue import JSGlue

from flask_httpauth import HTTPBasicAuth
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
auth = HTTPBasicAuth()

users = {
    "cr2dgf": generate_password_hash("wpcr2")
}

@auth.verify_password
def verify_password(username, password):
    if username in users and \
            check_password_hash(users.get(username), password):
        return username
jsglue = JSGlue()
app = Flask(__name__)
jsglue.init_app(app)

@app.route('/')
@auth.login_required


def home():
   return render_template('index.html')

if __name__ == '__main__':
   app.run()