(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},43:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var s=n(0),i=n.n(s),a=n(18),o=n.n(a),c=(n(35),n(36),n(11)),l=n(6),r=n(13),h=n(12),d=n(66),A=(n(37),n(1)),j=function(e){return Object(A.jsx)("div",{children:Object(A.jsx)(d.a,{id:"messageCard",children:Object(A.jsxs)("div",{id:"testing",children:[Object(A.jsx)("img",{id:"liIcon",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMVSURBVHgBvZhfSBRRFId/Z9wkTVOrB0OkCJKIAqFEykAl7CWiqMgMgogKLDKplzJrd1GUwl5Kzf5QhA9lFD31ZllRZpAPRpBphGBIEWVJre3szJyOUrauO+3dXZ0PdmZ27rl3vr1zZs5lCTHAD+u2wjDLQFqeFfBn+keGDSb0EuM5ceBcUlnLAKKEognm9rocWNwmvXL/njMDfvhHvgYNSJbJXJNa1uhBFGiqgdzesBzM7cESYePAmkZw/2w7fBnTLcKPa7MB/b4cZkMV5v2+2xVHVcPVZkSnKhl4MaLF4nq+V5muEhpRhDvcLtntQQzIbUr06cYRldjIM2K41sl2NmJEkneTSlxkESb1vAg/QJZKlEKOUALigtJUoiKLEI0gDpi5TyUusoju70QcENH0iNBG70fZPUKMEKxGlTjFNyufQAwQaR1JpU1PVGKVRKikuku2pxAVPOC39L2q0cq1hkqqaqGxRzG8V2ezOCOKKqwsMi6zvtoLtnLk8G64dmZ8k6Tw6KOuNRlRLgVc/2usvM7p+mxsYQ1LZb3gsixcpA3UL03bueNsJgz/CiQkZDHJ7yGjZw7wjnY0/xjru7KOlwVM7JNDXeS601Lw9EUlfbK7lu16pPwWV8r4bikYwUVr0AIaWkrpvF2/oiZOGfqCY3I4VnnnTjQwBsiFmrcn6ZqyyMG28Vxwwwa5Be9Fss608PLSTupZ5eZkfzIWmQFsE9HdbCEHtp3h7XOTJ6JI+U1eKxd5BkWGfUD3IKIiQUPhm2qa9FhPSVapLK2YYQwT3tBzk0QO3eF8mbolmGGIUJRbz3mwE4GJzXCIXyYKYSciSVgIh5Br5cNORFJ3NZyjGOFEDrTyQtklwiFkRuYXnOHUKSKJhAVwmKEA5iFUxEqE0pJuOuHAv/fYhIgUnVE4THJQrZsQ8Rn4AIdJSsJnhIpc3TVeGbvgEHJPHnQfp+9TRP5QBYeYpeF08PdJIs2l1CHV04MZRP4pMOTRrXhdTZ22ImPIWsNrGsiRqbshdeeVnDIQJzKWJZ8Bkbgin4J+N10IjfkNBmoB1/lFIGsAAAAASUVORK5CYII="}),Object(A.jsx)("p",{id:"postTittle",children:e.title}),Object(A.jsx)("p",{id:"message",children:e.content})]})})})},u=function(e){Object(r.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(c.a)(this,n),(s=t.call(this,e)).state={homeData:{name:"0e7e8d",posts:[{id:2,title:"This is a good post right",content:"Damn thats kinda messed up ngl",comments:[]},{id:3,title:"TYO WHERt",content:"Okay it's not that bad man sheesh",comments:[]},{id:4,title:">:)",content:":O",comments:[]},{id:5,title:"duisfuidsaf",content:"sdafsdafsdfsfd",comments:[]},{id:1,title:"Why I hate snails",content:"They are so slow man!",comments:[{id:2,user_id:12,content:"They are so slow man!",likes:0,name:"0e7e8d"},{id:3,user_id:12,content:"Bruh ikirrrrr!!!",likes:0,name:"0e7e8d"},{id:4,user_id:12,content:"skr skr skr skr",likes:0,name:"0e7e8d"},{id:5,user_id:12,content:"SHOOOT",likes:0,name:"0e7e8d"}]}]}},s}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/user/getHome",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.state)}).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({homeData:t})})).catch((function(e){console.error(e)}))}},{key:"render",value:function(){return Object(A.jsx)("section",{children:this.state.homeData&&this.state.homeData.posts.map((function(e){return Object(A.jsx)(j,{title:e.title,content:e.content})}))})}}]),n}(i.a.Component),b=(n(43),n(7));var g=function(){return Object(A.jsx)("div",{children:Object(A.jsxs)("div",{className:"container",children:[Object(A.jsx)("div",{children:Object(A.jsx)(b.b,{className:"link",to:"/createpost",children:Object(A.jsx)("h1",{className:"title",children:" VENTI"})})}),Object(A.jsx)(u,{}),Object(A.jsxs)("footer",{id:"foot",children:[Object(A.jsx)(b.b,{className:"link",to:"/home",children:Object(A.jsx)(d.a,{id:"leftbutton",className:"button",variant:"contained",color:"#FFFFFF",children:"Home"})}),Object(A.jsx)(b.b,{className:"link",to:"/viewpost",children:Object(A.jsx)(d.a,{id:"rightbutton",className:"button",variant:"contained",color:"#FFFFFF",children:"Show Love \u2764"})})]})]})})},m=n(4),O=(n(48),function(e){Object(r.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(c.a)(this,n),(s=t.call(this,e)).state={email:"",password:""},s.handleEmailChange=s.handleEmailChange.bind(Object(m.a)(s)),s.handlePasswordChange=s.handlePasswordChange.bind(Object(m.a)(s)),s.handleSubmit=s.handleSubmit.bind(Object(m.a)(s)),s}return Object(l.a)(n,[{key:"handleEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"handlePasswordChange",value:function(e){this.setState({password:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this;alert("A name was submitted: "+this.state.email+" "+this.state.password),e.preventDefault(),fetch("/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.state)}).then((function(e){return e.json()})).then((function(e){console.log(e),t.props.history.push("/home")})).catch((function(e){console.error(e)}))}},{key:"render",value:function(){return Object(A.jsx)("div",{className:"container",children:Object(A.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(A.jsxs)("label",{children:["Title:",Object(A.jsx)("input",{type:"text",value:this.state.value,onChange:this.handleEmailChange})]}),Object(A.jsxs)("label",{children:["Content:",Object(A.jsx)("input",{type:"text",value:this.state.value,onChange:this.handlePasswordChange})]}),Object(A.jsx)("input",{type:"submit",value:"Submit"})]})})}}]),n}(i.a.Component)),p=function(e){Object(r.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(c.a)(this,n),(s=t.call(this,e)).state={email:"",password:""},s.handleEmailChange=s.handleEmailChange.bind(Object(m.a)(s)),s.handlePasswordChange=s.handlePasswordChange.bind(Object(m.a)(s)),s.handleSubmit=s.handleSubmit.bind(Object(m.a)(s)),s}return Object(l.a)(n,[{key:"handleEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"handlePasswordChange",value:function(e){this.setState({password:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),console.log(this.props),fetch("/api/auth/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.state)}).then((function(e){return e.json()})).then((function(e){console.log(e),t.props.history.push("/home")})).catch((function(e){console.error(e)}))}},{key:"render",value:function(){return Object(A.jsx)("div",{className:"container",children:Object(A.jsxs)("form",{className:"inputForm",onSubmit:this.handleSubmit,children:[Object(A.jsxs)("label",{children:["Email:",Object(A.jsx)("input",{type:"text",value:this.state.value,onChange:this.handleEmailChange})]}),Object(A.jsxs)("label",{children:["Password:",Object(A.jsx)("input",{type:"text",value:this.state.value,onChange:this.handlePasswordChange})]}),Object(A.jsx)("input",{type:"submit",value:"Submit"})]})})}}]),n}(i.a.Component),x=(n(49),n(50),function(e){return Object(A.jsxs)("div",{className:"navbar",children:[Object(A.jsx)(b.b,{className:"link",to:"/home",children:Object(A.jsx)(d.a,{id:"leftbutton",className:"button",variant:"contained",color:"#FFFFFF",children:"Home"})}),Object(A.jsx)(b.b,{className:"link",to:"/createpost",children:Object(A.jsx)("h1",{className:"title",children:e.title})}),Object(A.jsx)(b.b,{className:"link",to:"/viewpost",children:Object(A.jsx)(d.a,{id:"rightbutton",className:"button",variant:"contained",color:"#FFFFFF",children:"Show Love \u2764"})})]})}),f=function(e){Object(r.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(c.a)(this,n),(s=t.call(this,e)).state={title:"",content:""},s.handleTitleChange=s.handleTitleChange.bind(Object(m.a)(s)),s.handleContentChange=s.handleContentChange.bind(Object(m.a)(s)),s.handleSubmit=s.handleSubmit.bind(Object(m.a)(s)),s}return Object(l.a)(n,[{key:"handleTitleChange",value:function(e){this.setState({title:e.target.value})}},{key:"handleContentChange",value:function(e){this.setState({content:e.target.value})}},{key:"handleSubmit",value:function(e){alert("A name was submitted: "+this.state.title+" "+this.state.content),e.preventDefault()}},{key:"render",value:function(){return Object(A.jsxs)("div",{className:"container",children:[Object(A.jsx)(x,{title:"Create Post"}),Object(A.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(A.jsx)("div",{className:"formDivs",children:Object(A.jsxs)("label",{style:C.labelss,children:["Title:",Object(A.jsx)("input",{type:"text",value:this.state.value,onChange:this.handleTitleChange})]})}),Object(A.jsx)("div",{className:"formDivs",children:Object(A.jsxs)("label",{style:C.labelss,children:["Content:",Object(A.jsx)("input",{type:"text",value:this.state.value,onChange:this.handleContentChange})]})}),Object(A.jsx)("div",{children:Object(A.jsx)(d.a,{type:"submit",value:"Submit",children:Object(A.jsx)("img",{src:"data:image/png;base64,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"})})})]})]})}}]),n}(i.a.Component),C={labelss:{color:"black",fontWeight:"600"}},v=f,y=(n(51),function(e){Object(r.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(c.a)(this,n),(s=t.call(this,e)).state={feed:[],feed_index:0,post:null},s}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;console.log("HERE"),fetch("/api/user/feed",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({})}).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({feed:t}),e.getPost(e.state.feed_index)})).catch((function(e){console.error(e)}))}},{key:"getPost",value:function(e){var t=this;fetch("/api/posts/getPost",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.state.feed[this.state.feed_index])}).then((function(e){return e.json()})).then((function(e){console.log(e),t.setState({post:e})})).catch((function(e){console.error(e)}))}},{key:"render",value:function(){var e=this;return Object(A.jsxs)("div",{children:[Object(A.jsx)(x,{title:"Be Kind To Others!"}),this.state.feed.length>0&&Object(A.jsxs)("div",{children:[Object(A.jsx)(d.a,{id:"upArr",onclick:function(){e.state.feed_index>0&&e.setState({feed_index:e.state.feed_index-1}),e.getPost(e.state.feed_index-1)},children:Object(A.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAAAwCAYAAACVMr0DAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAICSURBVHgB7ds9bsIwGMZx27TdEWLoxg24Aq0YOhVxIsKJULYOiNIbtCcoWwdUdS8iKSA9UESCncQfrxP/p3y8Xn6yogwJZ560ng0HNyLtH06S27g9flkxD+LMg9bxMOIsnfy/lrJ02h0tIkY88sBZuMgHZNLA13ARdWSywCq4iDIySeAiuIgqMjngMriIIjIp4Cq4iBoyGWAduIgSsmAEUsXdzezmeCSf45N1/Cids5HzHVwEtzNaTPfH3/FwstulkWwNhZ3sFLgMLvIF2RlwFVzkA7ITYB24iDqydWCduIgyslVgE7iIKrI1YJO4iCKyFWAbuIgasnFgm7iIErJRYBe4iAqyMWCXuIgCshFgCrjINbJ2YEq4yCWyVmCKuMgVsjZgyrjIBbIWYB9wkW3kysA+4SKbyJWAfcRFtpBLA/uMi2wglwKuAy4yjVwYuE64yCRyIeA64iJTyMrAdcZFJpCVgJuAi3QjS4GbhIt0Il8FbiIu0oWcC9xkXKQDORM44J6qinwBHHAvq4J8Bhxw8yuLfAQOuPLKIB+AA656RZH5z+yptxWbT9mCgHtKGTnZPohEbEaywYB7Xmc0n6p8aS9Eqy/9hSDgZqeMnCT8I+9mwL2eDPk32caiO54vs4YCrlp5yHu/+/FydXxN+5oNeneidXgeC568t59f31hIuTy/Pz64kBjJ2or1AAAAAElFTkSuQmCC"})}),Object(A.jsxs)("div",{className:"box",children:[Object(A.jsxs)("div",{className:"topBox",children:[Object(A.jsx)("h2",{className:"mainTittle",style:{color:"white"},children:this.post.name}),Object(A.jsx)("h2",{className:"mainTitle",children:this.post.title})]}),Object(A.jsx)("p",{className:"blog",children:this.post.content}),Object(A.jsx)("label",{id:"labelThing",children:"Comment!:"}),Object(A.jsx)("br",{}),Object(A.jsxs)("div",{id:"comment",children:[Object(A.jsx)("textarea",{id:"textBox",type:"text"}),Object(A.jsx)(d.a,{id:"heartButton",children:Object(A.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAAzCAYAAAAzSpBQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVYSURBVHgB3ZrNUhtHEMd7ZlYCxIdWxi6XDzgyh+CqUEE6JIfkgo85BT8B8AIRegLEE0jkBcBPAMk1B5NDcvBFcpVThVNlRzhJVVw2xUrGQKTdGXcPWixgBfpYydL+TqvV7rb+0709PT1i0ALH+Wy8CpDAQ5Nx/pmScg+PLQ5QHEumC+ADB/msaaANBRAnG7XTFkj51EY7sWS62Oyz2HUXvMtn5xUX34NSS8o+MlWlDCCrgMfAjAgADwELT9BxER+34yhnrZUf4FLOZxcY4ykpq/OqUgKwj7UNDTeAh00AtMN5qKAY2pHO+nV2GorDEYwLJrJKVhac8gtQ7//5aMwLYwT4yB0QE9ModHQbRaabEakHj/ENefI27ljPQVVRmLQbXs/CUeDj94AP3wQWGs2hSBpMy/Nar5M0ioAGbWvXlO9eXmnMCzE+DdycsYCJtWgynWt0XSm/ngPnKGW/zYP6fx9aAgdTRGdAjN0tOko+8BpI5mEwgwZXq2+eAFAItgsaD93+FpVGUGAqU/+Vfq8Yf2wfvko4B89aHrx6aCDFjVlPgefEkceUc7JVff2bjvmO8RDoCqtauwlZ+hP8gI9NgTGZvCSQuwf0jmEoZrXH/BBG4HP0QGEklPLZlVODPGOXX/gmjJCHf4NTeo45gm/Unz8Th8ljFRNHvKNQ9MIVqJxsufDjBr1jzsEf4Dc6GZ3sz7uDSOiwPM2M/K/Kv7/457ULUHYzbn8DPbBhYXjeowyqPScA5p3DV10zSmCqB8qK3baB3jMNzhfpsxaHk+cixW23ke+7bwPfPaw3YIGOGWUvDMmDyt7PEAiwYgpPfadDk1MdR+4MDFQaVkpYq0GcY4Fq0okgQfVviPM5jpX3nPI7/X9iFHmPPAdBpBaJwRRXg8RZtF4KFJgxgRbRuJouMR6GIMFxzacYFLkDUGDDkxAoMBIdR+5RPFoQJHTbI2rFEqkCp/UP9j8C895RSOJkoJtVbrYsUP8jCPDRKayV2bY+1meUfESr2SBA+cOW8ic61uIwqWzjWsjSrboBhtZzYEQKbqtBi6OFHWOQE7EvYJA5DUk467adVSjoynUWuVNkQ4M5LVDUsbGp4sRc6pF77kwceU8quWzcTMIgZk5qYaDXMvXnztWWKHCHhUZyInofBglhzqDnRjbrvUZcKpwdqdb4xHRxULInCePRGexZqrWL310SVwvPB0Zs1qINjn4GnaCFyQbtdM8lD13oMLFs3Poa+nV6oMgSsdmGwvQ1jW7GG7alGF7WL2qfCaSdHjGZtK4SRly5WMUbN1Fgup8EkjBqvF4nTF8LTYDtvyWB7XBsi5ufst9SEwaSiWSsiZ3cpsQRKDAhaNtpP2/2ooF7EYocHUGhyNLFlN/wHmgB2lPAdtljx9qN+7lLcx2ux5gINS1M3wct0muBOit+TB4t/amgZXFErwS6E3QzycOLtsQRtMdAAiVt/e778i+Nc3QqjGhbnAvuoW9CtbSoNxg72NuuR0wmMBzvFmrC2u7xdNyUxb3uJRiKZmjvu9O5kGFzh56D79lmp8L088AnSk/XV6F6lLFf/371/1Ua/RBK9be+AhiayEXnVtLgA76106NzqTUIRTLtVDPuHEYR4Jcw/VzwGapmuHOyYb95As1UM3oOI4+FIis4QOvgI76LI1DgPJZrW7gHbsrj/xpeV6vsLW6EF8a//OFX8JmuiCOoXMOpYss5eBaX5ZeXvqe1WG3J8jDm0z/+LtI1cUSjyd6POawZuro/Rz+cBAjzfpFHP9fnxI1ZElbotjCiq55zqXlwCyqlBLYudrDf8bDTOayvoHIN58IU9JAPftSOWHrLMPMAAAAASUVORK5CYII="})})]})]}),Object(A.jsx)(d.a,{id:"doArr",onclick:function(){e.state.feed_index<e.state.feed.length-1&&e.setState({feed_index:e.state.feed_index+1}),e.getPost(e.state.feed_index+1)},children:Object(A.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAAAwCAYAAACVMr0DAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAITSURBVHgB7ds9UsJAGMbx3UXtGYfCjhtwBXQorGQ4EeFETDoLB/EGegLpLBjHXoZEXh4ZUQP52o93yf4rkuzum/k1qZDiu+V00D9TaW97kZzH7dH9QoQKd8hPbh/Gg0iKdLy/IRXppDOcRSKU2zE/+TG97a7V6jVrY0DOLwt3V5qsr1WiVsNDm6WQ42V8E4lQZsdwKaVaPSVyCsjZ5eHuUkkiX/IWBeTfFcX9TNax6owe5hvAKG9xQEZFcTdroqvRfCF3N97jwXjzUYvyNjb5w1cG93I4m+D3XgH5cFVwcf2ngPy/qri4l1FA/qkOLu4fKCDXx8WzIzUZWQcunufURGRduFhToCYh68TFuoI1AVk3LtaW6JSRTeBifclOEdkULvZU6JSQTeJiX8VOAdk0LvbWyGdkG7jYXzMfkW3h4gwN+YRsExfnaMoHZNu4OEtjnJFd4OI8zXFEdoWLMw3ECdklLs41FAdk17g422AukTng4nzDuUDmgosZFrKJzAkXcyxlA5kbLmZZzCQyR1zMs5wJZK64mOkgnciccTHXUTqQueNitsPqIPuAi/mOq4LsCy7egUFlkIVQwhdcvAeTiiIXiQsuxQaY0oHMCZdiBUzVQeaGS7EDpqogc8SlWAJTZZC54lJsgakiyJxxKdbA1DFk7rgUe2AqC9kHXMoLYOpt2u9eqNb2f9VKJs/tu8cn4UFfS3KaR9Ti9oIAAAAASUVORK5CYII="})})]}),Object(A.jsx)("h1",{children:"No Posts Currently..."})]})}}]),n}(i.a.Component)),I=function(e){Object(r.a)(n,e);var t=Object(h.a)(n);function n(e){return Object(c.a)(this,n),t.call(this,e)}return Object(l.a)(n,[{key:"render",value:function(){return Object(A.jsxs)("div",{id:"LandingPageContainer",style:{height:"100%"},children:[Object(A.jsx)("div",{children:Object(A.jsx)("h1",{children:"Venti"})}),Object(A.jsx)("div",{children:Object(A.jsx)("h1",{children:"Welcome! \ud83d\ude0a"})}),Object(A.jsxs)("div",{id:"LandingPageFooter",style:k.LandingPageFooter,children:[Object(A.jsx)(b.b,{style:k.RegisterButtonLink,to:"/register",children:Object(A.jsx)("button",{style:k.RegisterButton,children:"Register"})}),Object(A.jsx)(b.b,{style:k.LoginButtonLink,to:"/login",children:Object(A.jsx)("button",{style:k.LoginButton,children:"Login"})})]})]})}}]),n}(i.a.Component),k={LandingPageFooter:{position:"absolute",bottom:0,height:100,width:"100%"},LandingPageAuthButton:{position:"absolute",display:"inline-block"},RegisterButtonLink:{position:"absolute",left:20},LoginButtonLink:{position:"absolute",right:20},RegisterButton:{top:0,width:100,height:100},LoginButton:{top:0,width:100,height:100}},B=I,w=n(3);var S=function(){return Object(A.jsxs)("div",{className:"App",children:[Object(A.jsx)(w.a,{exact:!0,path:"/",component:B}),Object(A.jsx)(w.a,{exact:!0,path:"/home",component:g}),Object(A.jsx)(w.a,{expact:!0,path:"/login",component:O}),Object(A.jsx)(w.a,{expact:!0,path:"/register",component:p}),Object(A.jsx)(w.a,{expact:!0,path:"/createpost",component:v}),Object(A.jsx)(w.a,{expact:!0,path:"/viewpost",component:y})]})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,67)).then((function(t){var n=t.getCLS,s=t.getFID,i=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),s(e),i(e),a(e),o(e)}))};o.a.render(Object(A.jsx)(b.a,{children:Object(A.jsx)(S,{})}),document.getElementById("root")),F()}},[[52,1,2]]]);
//# sourceMappingURL=main.72f9439e.chunk.js.map