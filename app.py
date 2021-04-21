from flask import Flask, render_template
from flask_jsglue import JSGlue


jsglue = JSGlue()
app = Flask(__name__)
jsglue.init_app(app)

@app.route('/')


def home():
   return render_template('index.html')

if __name__ == '__main__':
   app.run()