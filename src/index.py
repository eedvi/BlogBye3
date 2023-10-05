from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/Gallery') 
def Gallery():  
    return render_template('gallery.html')

@app.route('/white Board')
def whiteB():
    return render_template('/wBoard.html')

@app.route('/musicSec')
def music():
    return render_template('/music.html')
 
if __name__ == '__main__':
    app.run(debug=True)

