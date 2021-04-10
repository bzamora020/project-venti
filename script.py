from fuzzywuzzy import fuzz
from fuzzywuzzy import process

def takeRatio(elem):
    return elem['avg']
userPosts = []
generalPosts = []
ratiosOfGenPosts = {}
ratioNumber = []
orderedPosts = []

for x in generalPosts: 
    for y in userPosts: 
        ratio = fuzz.ratio(x,y); 
        ratiosOfGenPosts.setdefault(x,[])
        ratiosOfGenPosts[x].append(ratio)
 
for x in generalPosts:
    avg = sum(ratiosOfGenPosts[x])/len(ratiosOfGenPosts[x])
    ratioNumber.append({"id":x.id,"text":x.test,"avg":avg})

ratioNumber.sort(key=takeRatio)

    
