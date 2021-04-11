from fuzzywuzzy import fuzz
from fuzzywuzzy import process
import flask
from flask import Flask
from flask import request
import json
app = Flask(__name__)

def takeRatio(elem):
    return elem["avg"]

@app.route('/simChecker',methods = ['POST'])

def simChecker():
    if request.method == 'POST':
        posts = json.loads(flask.request.data)

        print(posts)
        ratiosOfGenPosts = {}
        ratioNumber = []
        orderedPosts = []

        for x in posts["userPosts"]: 
            for y in posts["generalPosts"]: 
                if y["id"] != x["id"]:
                    ratio = fuzz.ratio(x,y)
                    ratiosOfGenPosts.setdefault(y["id"],[])
                    ratiosOfGenPosts[y["id"]].append(ratio)

        for x in posts['generalPosts']:
            avg = sum(ratiosOfGenPosts[x["id"]])/len(ratiosOfGenPosts[x["id"]])
            ratioNumber.append({"id":x["id"], "title":x["title"],"user_id": x["user_id"],"content":x["content"],"avg":avg})

        ratioNumber.sort(reverse = True,key=takeRatio)
        jsonInfo = json.dumps(ratioNumber)
        return jsonInfo

if __name__ == "__main__":
    app.run(debug=True)