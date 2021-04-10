from fuzzywuzzy import fuzz
from fuzzywuzzy import process

userPosts = []
generalPosts = []
ratiosOfGenPosts = {}
ratioNumber = []


for x in generalPosts: 
    for y in userPosts: 
        ratio = fuzz.ratio(x,y); 
        ratiosOfGenPosts(x,[])
        a[x].append(ratio)
 
print(fuzz.ratio("This is a test", "this is a test!")); 

