

const spawn = require("child_process").spawn;
jsonInput = {
    "userPosts": [
      
      {
      
        "id": 21,
        "title": "Is it worth it",
         "content": "hello dear readers,even thought we both know that my story won't change a single thing in your life,i write this to just express myself because it might be good to live to the illusion of me writing down some things;the reason im gonna end it is simple,since im 13 after a minor surgery i got a condition that makes me feel wanting to pee 24/7,well you can imagine the rest,after that my life basically turned to hell,sleeping was impossible since i had to wake up every 30 min to pee,so my growth stopped,focus and memory was impossible,i saw all my capacities vanishing away kinda like a burning leaf,and now here i am a 17 yo looser who can barely remember shit,stuck in his 13 yo body,went from the best in my school to a total faillure since my brain is screwed up,parents are gonna kick me out at 18,my life is hopeless,no matter what i try(going to urologists,practicing sports,not drinking anything)i keep feeling the urge to pee 24/7,watching all my friends and familly growing up throught puberty normally,remembering what we do at school....,is getting me crazy,enought talking,meet me up there guys ^"
      },
      {
        "id": 18945,
        "title":"Grad depression",
        "content":"Hi,I know this is probably gonna be the typical student/new grad post many of you see here from time to time but I feel this is the only place where maybe someone can relate to my struggles.I'm currently a Undergrad Senior with just 7 classes left to graduate but I am currently having serious struggles at the very end of this part of the journey and I'm starting to feel I am unable to recover. I am more fearful of my career prospects than I am happy to be graduating soon. I decided to focus on becoming an Android Developer as my first role in this field however I am starting to crack under pressure from every single thing. I currently have no actual finished projects to showcase to obtain any internships or experience necessary for me to obtain an entry level position. While knowing this I lack the time necessary to contribute to this due to the classes I have left in college and to make it worse I am struggling bad in nearly every class.Algorithms class is seriously affecting my confidence as a software engineer as I feel very confused in nearly every lecture and I struggle to catch up no matter how much I try to read textbooks and attempt projects. At the end of each day I constantly feel that I didn't accomplish or improve in any way even after spending hours studying. Thinking about switching careers this late into my life will basically prove that the last 5 years of life were an absolute waste and I cannot accept that. To make matters even worse I don't have time on my side due to me having to move out exactly a year from now and I live in one of the most expensive metro cities in the U.S. Where exactly do I go from here? How do I tackle these issues? Should I just ultimately accept my failure and go through a \"quarter life crisis\"? I honestly feel like this field asks too much out of us and I wish I knew this years ago before fully committing. Feel like we have to sell our souls and time just to be experienced and valued in this field."
      },
      {
        "id":3527,
        "title":"Anyone feeling depressed thinking about there future?",
        "content":"I'm very close to graduating with my degree and I'm constantly terrified by the uncertainty of whether or not I will be able to have a career after graduation. I'm terrified by the thought that I will never be able to get my foot in the door and I will end up in poverty for the rest of my life. I don't want to imagine myself spending the rest of my life in the same town I grew up in, working shitty low-paying jobs with no escape. I don't know what it is about tonight but those thoughts feel especially oppressive at the moment. Does anyone in this sub get really bad anxiety thinking about these things? How do you deal with that anxiety?"
      },
      {
        "id":2234,
        "title": "My life rn",
        "content": "i've just never felt full of purpose or anything worthwhile i feel like i could disappear and nothing would change in the slightest"
      }
  
    ],
    "generalPosts":[
      {
        "id":28,
        "title": "Is life like this?",
        "content": "Am i the only one that wished some accident happened that could end my life because i don't want to commit suicide because it will hurt the people that know me i mean i have friends and my family loves me but i don't want to life anymore"
      },
      {
        "id":234,
        "title":"My current situation sucks!",
        "content":"My gf left me ,my mother and father died in an accident my friends totaly ignore me and i hate myself for everything if you want to tell any wishes before i die head to the comments"
      },
      {
        "id":324,
        "title":"The reality of my life",
        "content":"I wash my pillow cover everyday, because I usually cry myself to sleep and by the time I wake up it’s covered in dried up tears. I go prolonged periods of time without seeing the sun, I work at night and by the time I get home the sun is almost starting to rise and that’s when I sleep. So by the time I wake up it’s gone down, the longest I’ve gone without seeing the sun has been like 2 months. I drive at night and find an abandoned or empty place where I park my car and cry. I hug the steering wheel and I pretend it’s another person. If I’m not working or doing college work on my computer I lay in bed starring at the wall or ceiling for hours until I pass out. I drink vodka just feel numb and make me forget. I’ve never had a relationship before and don’t know what it feels like to be loved by another person. Of course, no one knows any of this. I pretend I’m okay and if you ever saw me in person I’ll most likely be smiling, laughing, and having a good time. I live in isolation and don’t dream about anything anymore, I just wake up because I have to."
      },
      {
        "id":892,
        "title":"I have ambitions, but depression has killed my drive.",
        "content":" Basically I wanna be a guitarist/singer. I play a lot, but I also lie in bed a LOT. Every once in a while I get terrible anxiety about my future, which causes me to question my choices. I feel locked down sometimes, and other times I get bursts of motivation right before going to sleep. I stay up too late, or I ignore this motivation and either way the next day is terrible. I feel trapped in my room because I’m tired all the time"
      },
      {
        "id":3189,
        "title":"Anticipating depression to return",
        "content":"Is it also a cycle for you guys? For no reason today I woke up feeling pretty good. The past few days were horrible. Didn’t do much, didn’t talk much, didn’t eat much, didn’t even cry much. Just numb and grey. It’s happened a couple of times where I’m alright for a couple days then it’s the same old. This makes me suspicious of the self I become when I don’t feel depressed, can I enjoy myself when I know it’s all going to come back? Who am I really? Do I just have to get used to things being the way it is? I want a balance, but maybe this is it, having these moods."
      },
      {
        "id":2341,
        "title":"28 Tomorrow, all but given up on life",
        "content":"Yeah, I am turning 28 tomorrow and honestly I have never felt such a mixture of disinterest and disappointment about the day ever before.All of this possibly stemming from my giving up on life in general. Like anyone else I had set goals in life but now I am just going through the motions day after day. Self esteem and self confidence is rock bottom.    Recently came out of a \"friendship\" where I was nothing more than an emotional punching bag for her. In almost a decade, I haven't said anything cross about her. Everyday she'd quarrel with her mom and complain about it to me and she kept bringing up this guy who even after being told no, pursues her asking her to marry him. Everyday she'd complain about him to me and when I would suggest just blocking his number and all social media she would just say that he is still a friend so she didn't want to do that. Because of all this I grew increasingly frustrated and when I told her so she blocked me everywhere. Now I am not going to beg anyone to stay but for some time now she was the only one I have regularly talked and that's no longer there.I have few friends as it is and while they have tried to help me, since I am not so close to them it feels weird beyond a certain point. As I have said above, that ambition and drive and burning desire to accomplish my goals is dead. I am just living life day to day, just going through the motions. The fact that I am a year older now makes me look in retrospect and see myself as a failure which makes me hate myself even more."
      },
      {
        "id":3768,
        "title":"Getting seriously depressed",
        "content":"My life right now is garbage. I study as an EU student in the UK but currently due to restrictions imposed in January I am staying with my parents (I went home for Christmas and was supposed to go back for start of second term, but I couldn't). With covid everything is closed, and the few friends that I have from highschool are scattered around the country because they went to unis there. I have very little human contact outside my family, if any.Things with my gf are going to shit for the past months as well. She lives and studies across the country but due to how the degree is difficult she literally has no time for me - even when I came for visit, she would wake up at 9, study till 2 AM only with breaks for quick food, then sometimes get hammered with friends, go to sleep at 6 AM and repeat. No weekends breaks, no holidays, no nothing. We used to call for hours, now it's few minutes here and there with little to talk about, as she only does uni. Seriously thinking about breaking up with her for the past months, but I keep saying to myself that I'll give her time till summer holidays and then decide. I am a Math Major, but during covid I last summer I decided to pick up coding - I believe I know a fair bit of Python and can solve some LC mediums - trying to work on it but usually after uni stuff I have little energy to do more work - I wanna have fun and just chill, I can't psychically study all day every day. I absolutely cannot find any internships - in my country it's not a thing at all, and even though I usually impress the companies, mainly due to studying in the UK on a better uni than any in this country are, but it fails on the thing that I can only work during summer. I can land anything in the US and in the UK, as the uni is not so impressive, even though it's top 10-15 UK. I've been applying for over half a year now, and nothing seems to work. I just can't, but I keep pushing myself. It's depressing tho, not sure for how much longer I can go. I never had this bad of a period in my life before covid. There were bad times, but I would always vent them through computer games, and sometimes just doing something with friends. My gaming rig is in the UK however with no way to get it here, so for the past 4 months I am unable to use my usual ways to stay happy - I tried numerous things (mindfulness and breathing exercises, started running, the famous Yale course) and while they do help a bit, I know what would help the most. My uni grades are dropping due to all this - last term I managed straight As in hopes of going to Oxbridge for Masters. I also have a somewhat prestigious bursary to study abroad - I am central Europe so UK is very expensive for me (for example it's an issue to pay the fees for tests when arriving to the UK and that's why I am stuck here) and I wouldn't be able to study here at all without it. I see this as an incredible achievement as there are some very wealthy people(Forbes global top 50) behind the foundation that sponsors me and I was the one that impressed them, but the imposter syndrome is real here and now that the grades are going to shit it's haunting me more than ever. Please help. Any thoughts or things that helped you stay happy are also welcome.TLDR: Everything is collapsing, nothing is working out and it's getting even worse. Getting very sad as there's little I can do, or atleast it's what it seems. I need advice / help on what to do."
      },
  
      {
        "id":13,
        "title":"Feeling depressed and suicidal",
        "content":"I basically went into this field because I heard it had a lot of high paying jobs. I really enjoyed my first year, but come second year the teachers are trying to weed people out by teaching you all of this data structures and algorithms material, while also giving giving you 6 software projects in a week to finish. I wouldn't mind any of this torture, but here's the thing.It's internship time, and there appears to be a quite a bit of companies who are offering jobs. I was so excited to see the postings, until I realized there wasn't enough jobs for everyone. The number of jobs vs. the number of students was huge. Later on, I also realized it all came down to grades because who the heck has 5 years of coding experience in over 10 programming languages with frameworks and libraries unless that's your hobby.I went into tech knowing nothing. I'm struggling to keep up with the workload and I'm ang that my profs said that there would be jobs in this field. They should have said there would be jobs only if you have a 90 average. I no longer enjoy coding, because it's a competition. I especially hate the classes where they overload us with projects knowing that we have other courses and jobs to apply to. This degree means nothing to me if I can't get a job. I'm wondering what are some tricks I can do to level up the playing field. Should I cheat and 'fake it until I make it?' At this point, everything comes down to grades and there's really no time to do anything on the side. If I do, I'll end up missing an assignment or failing a quiz."
      },
      {
        "id":35266,
        "title":"Can it all stop!!??",
        "content":"Another week and more bullshit with life. My body is aching from the stress of my personal life crashing down combined with my health declining by the month. I just want the world to stop, to stop the clock and be alone without having anyone or anything bother me with any nonsense. Tired and my bones are killing me from joint swelling. Tired of my mother trying to insert herself in my health issues by complaining how much of a drag my presence. I get that I'm a burden and I know that I'm just a waste of space but you don't need to remind me because I remind myself every morning.I don't like it here at all. I just want to leave this place and human existence all together"
      },
      {
        "id":6166,
        "title":"Where did it all go..?",
        "content":"Im just so tired........I have spend the last hour trying to get myself to even post this.......I'm going through a separation from my wife leading to divorce (its inevitable). I see my ex wife getting all these dude hitting her up and she still acts like she ain't got no one but I sitting here only have met truly on person and they just playing games with me but im so lonely that I'm just letting it happen.... My whole life for the last 7 years have crumbled in front of my eyes and I can't do a damn thing to fix it.....I'm just so tried of being tossed to the side by everyone I know or come across.....IM SICK AND TIRED OF BEING THE SECOND CHOICE OR NOT EVEN A OPTION......I don't know how much more I can"
      },
      {
        "id":15155,
        "title":"Alone",
        "content":"I’m not sure why I’m even making this post, as if it’s going to solve anything. But I guess we all probably feel similar when making our posts, right? Like why would a bunch of strangers on the internet care when it seems like the people actually in our lives are unbothered? Does anyone else just feel like they have no friends? There’s a few people I can think of that would get up in arms if they knew I said that, but are they really even friends or just clinging on to the past? These “friends” are people that I could play some games with on occasion and talk in a party chat, but when it comes to anything in real life? It’s one of those “friendship” dynamics where you know if you stopped texting first, or calling, or even if I stopped inviting them to game... I know I would never get one of those things from them if the roles were reversed. I see some of their tiktoks, snap stories, fb stories, etc. of their adventures or whatever else and just it just kinda sucks to know that I’m never someone that’s thought of when plans are made, never get the invite, blah blah blah. Anyways, I’m just realizing as I’m getting older (29) that it really sucks to not have friends. I’m constantly seeing people together with their friends, doing things together and I just desperately wish I had developed a bond like that with somebody. I’m jealous of the bonds you see friends have in movies and TV and I just want that with 1 person. How does anyone actually make friends as adults? I’m a big gamer and a fan of most things in nerd culture from Harry Potter, to Star Wars, to Lord of the Rings, and I just feel like the group of friends I had growing up... we couldn’t have possibly gone down paths that were any further apart from each other. My “friends” would rather go out and get drunk almost any night of the week and I don’t drink at all. Bars are just not my scene. I’m sorry for the long and random post, if anyone has actually read this far. I don’t know what I was hoping to achieve by typing all of this... nothing I suppose, just don’t have anyone to actually talk to."
      }
    ]
  }
// JSON.stringify(jsonInput)
jsonI
result = spawn('python',["./script.py"])

result.stdout.on('end',(data)=>{
    console.log(data);
})