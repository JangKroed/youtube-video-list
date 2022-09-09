from bs4 import BeautifulSoup
from pymongo import MongoClient
from flask import Flask, render_template, request, jsonify
app = Flask(__name__)

client = MongoClient(
    'mongodb+srv://test:sparta@cluster0.hg1pk.mongodb.net/Cluster0?retryWrites=true&w=majority')
db = client.dbsparta


@app.route('/')
def home():
    return render_template("index.html", pageName="home")


@app.route('/music')
def music():
    return render_template("index.html", pageName="home")


@app.route('/game')
def game():
    return render_template("index.html", pageName="home")


@app.route('/sports')
def sports():
    return render_template("index.html", pageName="home")


@app.route('/my-content')
def mycontent():
    return render_template("my-content.html", pageName="home")


@app.route('/mycontent/insert', methods=["POST"])
def mycontent_post():
    title_receive = request.form['title_give']
    channel_title_receive = request.form['channel_title_give']
    view_count_receive = request.form['view_count_give']
    image_receive = request.form['image_give']
    url_receive = request.form['url_give']

    mycontent_list = list(db.mycontent.find({}, {'_id': False}))
    count = len(mycontent_list) + 1

    doc = {
        'num': count,
        'title': title_receive,
        'channelTitle': channel_title_receive,
        'viewCount': view_count_receive,
        'image': image_receive,
        'url': url_receive
    }

    db.mycontent.insert_one(doc)

    print(doc)

    return jsonify({'msg': '찜하기 완료!'})

@app.route('/mycontent/delete', methods=["POST"])
def mycontent_delete():
    num_receive = request.form['num_give']

    print(num_receive)

    db.mycontent.delete_one({'num': int(num_receive)})

    return jsonify({'msg': '찜삭제 완료!'})

@app.route("/mycontent", methods=["GET"])
def mycontent_get():
    mycontent_list = list(db.mycontent.find({},{'_id':False}))
    return jsonify({'mycontent': mycontent_list})

@app.route('/log-in')
def login():
    return render_template("log-in.html", pageName="home")


@app.route('/join')
def join():
    return render_template("join.html", pageName="home")


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)

print("hello")