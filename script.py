from fuzzywuzzy import fuzz
from fuzzywuzzy import process
import json
import sys
def takeRatio(elem):
    return elem["avg"]

# with open('data.json') as json_file:
#     posts = json.load(json_file)

posts = json.load(sys.argv[0])
ratiosOfGenPosts = {}
ratioNumber = []
orderedPosts = []

for x in posts["userPosts"]: 
    for y in posts["generalPosts"]: 
        ratio = fuzz.ratio(x,y)
        ratiosOfGenPosts.setdefault(x[id],[])
        ratiosOfGenPosts[x["id"]].append(ratio)

for x in posts['generalPosts']:
    avg = sum(ratiosOfGenPosts[x['id']])/len(ratiosOfGenPosts[x['id']])
    ratioNumber.append({"id":x["id"],"text":x["text"],"avg":avg})

ratioNumber.sort(reverse = True,key=takeRatio)
print(ratioNumber)
sys.stdout.flush()
