from fuzzywuzzy import fuzz
from fuzzywuzzy import process

userPosts = []
generalPosts = []
dict = {}
ratioNumber = []
for x in userPosts: 
    for y in generalPosts: 
        ratio = fuzz.ratio(x,y); 


print(fuzz.ratio("This is a test", "this is a test!")); 

