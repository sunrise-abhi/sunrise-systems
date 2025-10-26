hello everyone welcome back this is episode four in a series that shows you how to build a completely custom website  
professionally designed in nexjs payload cms is the headless content management system and typescript  
and we're pretty far into it at this point i think i've recorded about like five hours so far of the um the initial  
project setup payload cms scaffolding so all the collections all the content types all the data modeling and we've  
gone through and we've designed and built the entire header footer and mega menu at this point but we still have a  
good amount to go but i am very happy to announce that this episode we're going to actually complete everything and we  
do have a lot to cover in this episode we're going to be going through the layout building blocks completely and building the front end equivalent to the  
back end architectures that we've already designed and developed into payload cms  
if you haven't met me or you don't know me before my name is james i am the founder of a digital design studio  
called trouble and we did all the design work for this project and it's a real world project that we've actually  
already released and i'm also a founder of payload cms and payload is something that i am very  
very excited about payload is a very very modern headless content management system that's built in react and nodejs  
and it's meant to be completely developer friendly it's meant to give you the keys to build whatever you need  
and then step back and let you do whatever you want to do and i think you're getting a little glimpse of my  
dog over there maybe let's see where do i go yeah that's blaster over there he's a  
maniac he's a puppy he's about one hopefully he doesn't bark or do anything  
crazy in this video fingers crossed you'll probably see more of him but um  
yeah this video is going to be a pretty exciting one we're going to show you how to do some serious front end work we're going to get into parallax we're going  
to get into form submissions we're going to wire up a custom form on the front end to be able to submit responses to  
our payload cms and we're going to finish this thing and all the code is going to be available for you on github  
and the figma project i will also link in the description of this video but before we get into the code i want to  
take you through a couple things that are very exciting to me about payload it's been a very very busy couple months  
for us we've released our public roadmap we've updated payload with a ton of new  
features and functionalities it's a really good time if you haven't tested it out yet to get your hands on it but  
i'm going to share my screen and we will go through some pretty cool stuff  
Payload Roadmap  
all right like i mentioned the first big thing that i'd like to highlight from payload really quickly is that we just  
released our public roadmap and what that means is that we are publicly announcing all the features  
that we're planning on building into payload over the next two plus years and we've got a lot of really cool stuff  
planned we're taking feedback from the community on how we prioritize items and how we  
shape our roadmap in general so if you don't see something on this roadmap that you'd like to see built into payload let  
us know but it's on our website if i tab over here's our payload website  
all of these items here are organized by the quarter that we plan to release the feature or the function and you can see  
that the public has the ability to upvote these features if you're logged into our website you can come and you can upload these features and then we  
will take those votes into account when we prioritize the workload but we've got a lot of cool stuff we're going to be  
building in complete revision history we're going to be building an autosave we're going to be building some new  
field types to make it so that you can completely customize the front end of  
your payload admin dashboard we're going to extend authentication we're going to be building  
internationalization into the admin panel we're going to be extending the rich type editor or the  
rich rich text editor more extensively and we are going to be  
potentially supporting more databases all kinds of stuff so if you'd like to influence this roadmap or if you want to  
have your opinion heard you can visit our website login and upload these features and we can  
go back and forth on what you'd like to see implemented but outside of that another cool thing that we've been working on is that we built in a feature  
Dynamically generated admin descriptions  
to dynamically generate field and collection descriptions right in your admin panel and this if you look on the  
right hand side bar here this little area you know how like yoast seo like wordpress plugins etc they have like a  
field and then like for example a meta title it's going to validate the user's input  
as they type so if they're not if they have too short of a title and  
maybe they're missing out on some keyword optimization for search engines yoast will actually show you hey this is  
too short you should add some more stuff into there or if you go over the google recommended limit it's going to tell you  
hey your field or your your page title is too long and you need to cut that down and with this  
new feature of payload we can build that exact thing into payload so here's just a couple examples like perfect length  
title this is too short of a description you need 29 more characters these don't have to be dynamic they can just be  
little helper descriptions but we've got a full blog post written up about the potential here really cool feature check  
Plugins infrastructure  
it out and then the next thing i want to highlight really quickly is that payload now has a complete plugins  
infrastructure which is arguably the most exciting thing that we've done to payload up till this point and if you  
know how to write javascript you can build a payload plugin one of the reasons why we built payload  
the way we did is because i personally am extremely tired of using other people's headless cmss that are just  
insanely convoluted and really difficult to learn and they teach you their way of  
doing things and it takes you a day just to get up to speed to write a plug-in let alone use the headless cms but  
writing a plug-in forget about it you have to learn their hooks you have to learn their architecture their controllers their  
their data patterns and everything and with payload it's so so simple and the proof is in the pudding because we  
released that feature and immediately one of our community members came out with a very very cool plugin that i'd  
like to highlight this is to offload your media uploads  
to any third-party permanent storage could be cdn supported could be anything but this plug-in a member of our  
community richard van bergen he wrote this and launched it and it's beautiful it can offload all of your  
uploads to amazon s3 but you can also build your own adapter into this plug-in  
and send your media to cloudani you can send it to a digital ocean space you can  
do whatever you want but the plug-in itself is beautiful you can take a look at this for an example but it's also  
installable via yarn or npm just by adding payload plug-in cloud storage pretty cool  
Remaining work to be done  
but we have some work to be done on the custom website i'm just going to quickly  
go through what we're going to be doing in this video this video is a little bit different than the format that we've  
done in the past because as you can see it doesn't look like there's much here with this little short you know five item bullet list but  
the heroes have to be built on the front end the layout blocks have to be built i think we have like 10 of them  
and so we have a lot of react components to build we're going to be extending the payload rich text editor with some  
custom extensions to do some pretty fancy stuff that i'll highlight we have  
a form submission infrastructure to build so that the front end of the website can accept form  
submissions from the public users and then store them permanently inside of payload and then we're going to be doing  
some really stylish stuff like adding a little bit of a background noise texture to the website adding parallax doing  
some animation stuff page transitions stuff like that so we have three different heroes we're  
going to build we have a minimal hero we have a content above media and then we have content left of media  
we have layout blocks oh there's more than that how many do we have i don't care call to action content we go all  
the way through we're going to build all of those in this episode i'm going to go pretty fast but all of this code is going to be available on  
github for you so i would highly recommend pulling this down and working with it yourself because that's going to  
teach you more than anything you can watch a youtube video but you really need to get your hands in code and you can try to you know code along  
with me but i would spend some time with the repo and i would look at our code conventions and give us feedback  
whatever you see if you have any questions on this tutorial you should open up a github discussion  
on either the custom website series repo itself or write on payload wherever you want we'll  
respond to it and we'll take our time to tell you why we did things the way we did or help you through some of the  
decisions that we've made we are one of the cool things that we're going to be doing that i haven't talked  
about much yet is that we're going to be extending the built-in payload rich text editor with some  
custom extensions the first one is going to be a red headline and i'm going to show you  
that really quickly if i pop over the figma file this is like a custom headline  
and you're wondering you might be wondering like how do you give admins the control over what they want to write and where it goes so we're going to  
build that right into the rich text editor and we also have this little underline component this little red underline and maybe we can do some  
animation for that you're going to see that all through these mock-ups if this is the first time you're seeing these mock-ups if you're  
joining us now you can find these the figma link in the description like i mentioned and you can also go back to  
that first video because i break this mock up apart in 30 different ways in that first video but  
this is going to be a control right into the rich text editor as well should be pretty cool  
and then finally um oh nope we're going to do form submissions mentioned that a couple times we're going to build the contact page we're going to make sure  
that our submissions are received properly on the back end and we're going to store them  
and then we're just going to be adding some stylish tweaks some animations some parallax some page transitions and this  
subtle background noise texture which i think is going to be pretty cool so let's get to work  
Picking up where we left off  
okay so what i'm going to try to do is a little recap we're going to start from the ground up on the pages collection  
that we've already built you can see here i've already got my local development environment up and running just by yarn dev and then payload will  
boot up and next js will also boot up right in the same node instance which is super cool  
but if i pop over and i log into the cms real quick i'm on local host 3000 admin  
login login let's go to pages and in the first video  
we actually already architected all of this out but now you can see that we have some real content we have a page  
here and the content of this page is going to reflect this mock-up right here  
and how we build things at trouble when we build a website we try to put all the control in the editor's hands so we're  
not building templates even though we have different pages here like if you look at this this is a page here's a  
page here's a page or here's studies archive and then here's a contact page these are not  
templates these are not one-off pre-baked layouts these are all just layout building blocks you can mix and  
match them you can reorder them you can reorganize them add them remove them whatever you want as an editor and the  
content of this page reflects that so the first thing we have and the first thing we're going to be talking about  
Building the Heroes  
here are the hero types as you can see by this radio field here we have three different  
hero types minimal content above media and content left of media and then we have the hero content and we  
have the hero media hero content here you can see this is the first glimpse at our red headline i  
don't have to use that red headline i can type in here i can say hello and then i can set this to an h1 or whatever  
we want but you can see that that is not styled red or uppercase so how did we do  
that the way that we did that was with a custom payload rich text editor extension  
so i'm going to show you those things first you can see red headline and red underline here they show up as extra  
items we could create icons for that um maybe we will at some point in the future but for now we just rendered  
custom react just labels there but how that works if we pop over to our  
code here's our page collection well all this is is a bunch of imports you're going to have to hang with me  
there's a lot going on in this file we have a typescript a set of typescript types that correspond to the data that  
will be saved in this collection and here's the payload config itself this should be pretty familiar to you because  
we built this in the first episode but i'm going to scroll down to this hero content here's my rich text editor field  
Extending Payload's Rich Text Editor  
now this corresponds to this rich text editor field right here  
and red headline and red underline are injected as custom leaves now if you're  
not familiar with payload's rich text editor it's built on top of slate js  
which is a really powerful editor built in react and payload allows you to  
customize that by injecting your own custom leaves and elements now leaves and elements are a slight js concept one  
of the things about payload is that we don't want you to learn payload we want you to learn other things that are going to help you in your development career  
so when you work with payload you're learning javascript you're learning popular open source packages and you're building what you  
need how you need to build it but here you can see i've injected two of these  
leaf components if i command click on that the shape of a custom leaf in payload  
you have to name it you have to give it a button that shows up in the rich text editor and then you have to give it a leaf that will  
actually be rendered inside of the editor itself these two things are react components and this is just obviously a  
string but the button is what shows up here  
and then the leaf is what shows up here and how you want it to be rendered for your users on the front end  
so i'm going to take you quickly through those two things they're pretty simple if i click into button  
all this is we're using the leaf button from payload component's rich text to take care of a lot of that stuff for us  
and we render that we give it the name our format and then we just give it whatever we want so i could say something different in here i could  
render a custom svg or whatever but that's going to show up in the admin panel and then i can go over to the leaf  
itself if i go back to this file and i click on leave now this leaf  
all it does is just inject some inline styles directly on a span and  
then renders the children inside of it so this is slight js again you have to spread the attributes on every slight js  
leaf that's a that's a rule and you have to then render the children inside of whatever element that you're rendering  
other than that it's up to you you can you can build whatever you want you can have a button that's clickable that opens up a modal you can you can do  
whatever in this case these are pretty simple and they're powerful because they allow you to  
take that data on the front end and then translate it into your own react components you map these leaves one to  
one with react components on the front end or wherever i mean it could be a mobile app it doesn't matter  
if i show you the shape of this data if i click on the api url down here zoom in a couple thousand times here  
close up the layout okay here's our hero content and you can see  
it's got children it's got text and then this is red headline true so then on the front end we're gonna know to render to  
render this child as a red headline as an h1 pretty cool react will allow us to do  
that and you'll see that in a minute oh i just zoomed in further let's go  
back and then we have hero media  
one thing that might be different from the first couple episodes is that i went through and renamed all instances of the  
word image into media because every place that you see an image  
throughout this entire site we're actually going to allow a an auto playing looping  
muted mp4 style video right into our front end of our website so this is an image in  
this mock-up but if our client wanted to render a just a video for some texture about  
their team or their projects they could just upload an mp4 and boom it'll work on the front end super cool so i did  
rename a couple things in this episode but hang with me here and i'll show you some  
of that too now what's also cool is that we have a  
Field Conditional Logic  
condition on this field so if you see this line here maybe i can  
clean this up a little bit just so you can read it okay so we have a condition which allows  
this media field only to be shown only to be rendered in the admin panel if the hero type is equal to content  
above media or the hero type is equal to content left of media now there's two arguments  
the first argument is the full document so you can access any other fields data in the whole document and then sibling  
data only shows you the fields that are right next to your field in your architecture and that's helpful because  
if you have like a super long array um or maybe blocks in your config and you  
have 10 blocks but your condition is only dependent on one of those blocks then you can use  
sibling data super cool but what that does on the admin panel if i go over here you can  
see hero media is enabled right now and if i click on minimal it goes away because the minimal hero type  
if i show you that the minimal hero type does not have any media so we don't need that field  
so this one this is the minimal hero now compare that to the content above media  
this hero those two things are different and they have different admin panel needs but with conditions you can render that  
information dynamically and it's super powerful a lot of content management systems are missing this even  
the big ones like contentful you can't do that and it drives me crazy you want to build a really really nice  
editor for your admins so they don't get confused by all the functionality and without that simple feature  
admittedly it's very very difficult to build as a cms developer myself it was it's a very complicated feature but it's  
very powerful as well so with this type of condition you can do some pretty powerful stuff  
and then here's our layout so i'm going to jump down to our actual next js page  
that's responsible for rendering these pages this is in the slash pages folder  
and you can see what we do here we've got a template which renders out the the  
things that are going to be needed in all pages and then we have a page hero component and then we have the  
render blocks component that's going to be responsible for outputting the layout but the page hero is where we're going  
to focus on because i want to take you through how we've built these these three heroes first  
so this page hero component we pass it a couple things we pass up the title we pass it the hero  
type we pass it the content and the media because this the hero could take  
one of these we might not need the media just yet but we know it's going to need content right  
so if i command click into this page hero you can see here's our props here's our react prop uh no typescript we don't use  
prop types anymore i was just throwing it back to like 2017 or so but now we  
use typescript here's our typescript types we have a title we have the type  
which is a reusable type coming from our page collection content is unknown because it could be  
any number of json configurations and then we have media which is the media type collection  
and here's what the component actually does the component the react component takes those props  
first of all it evaluates the type so if it's content above media then we're going to render the content  
above media type if it's content left of media we're going to render that hero component or if it's minimal we're  
going to render the minimal and lastly if for some reason our data is corrupt or something we don't have a  
hero type then we're just going to render the rich text with with the content  
we also have this nice little component here show after first render which is going to  
simply hide the component until react mounts on the front end and then  
it will enable and because react use effect will only run if  
you're in the browser use effect does not run in a server side rendered environment like how  
next js obviously it's going to hydrate all of your content it's going to send the html to your browser and then it's going to  
mount everything but this is a component that's usable to hide and then show  
certain items after they mount in the browser so let's close that file let's go back  
over here and let's look at the simple one first let's go to the minimal template so here we only need to pass it  
content and title and again this hero whoops  
this hero looks like this so here's the page title and then here's  
the content pretty simple so how did we translate that in react  
okay if you're hanging with us from the last episode you'll know that we're using react jss  
which i'm never going to do again to be honest we preferred it for a while but there are a lot of bugs with server-side  
renderings specifically things with like media queries and there's just some some funny business  
there and we're going back to css modules at trouble but this project is going to continue as we are going now  
with react jss first thing we're doing we have a hook for use styles we have classes we're  
going to render a grid container we're going to render the paragraph with the title and then we're going to render  
a rich text component with the content we're passing that through  
Converting SlateJS Rich Text into JSX  
now before i go on i'm going to go into this rich text and we're going to cover some things there i don't know that we've spent too much  
time on this rich text component just yet but it is a handy react component  
that we've written that translates the content from our api response right here  
this is the slate js json output of this rich text editor  
it's going to this react component is going to take this content and it's going to serialize it into react  
components that will output html it's a lot of words basically it converts json into html  
and all we do here is we have the class for rich text wrap it in a div  
we go through and we give ourselves some styles that we know we're always going to need inside of our rich text editor  
so we style the hr we style the anchor links we set a hover state on our anchor  
and that's it but we know that these anchor links inside of this rich text editor will now always be styled in this  
way but the real magic of this component happens in the serialize function  
so what we do is we just pass the serialize function our content and inside of that serialize function  
this is actually going to be pretty standard across all slate js to react  
conversions a lot of this was pulled straight from their documentation but the way that it works is you first  
evaluate if your node is a text node and we bring that right in from slate so  
text is text node okay then we're just going to render that text if it's bold we're going to wrap it with  
a strong tag if it's a red headline remember these are our two custom elements or custom  
leaves if it's a red headline then we're going to render the red headline wrapping the text  
red underline same thing if it's code same thing italic same thing you get the point  
so these are the leaves i'm going to come back to these two custom leaves in a second but we have more than that we have h1  
through h6 we have paragraph we have list we have all kinds of other things so  
if it's not a text node and if there's still no node  
then we switch on the node.type so if i scroll back over here and i show you this node.type is an h1 so we're going  
to programmatically match up with a switch case what the type is and we're going to render the html element that we'd like  
now this is where you can get fancy and react because as you can see we're just rendering an h1h2 blah blah and then  
we're rendering the children inside of it with a recursive call to serialize  
but we could also render our own react components here so let's say you had a fancy h1 component that did all kinds of  
stuff like maybe some animation tactic or maybe an animation to type in the characters as  
the user scrolls or something i don't know you could do that really easily and that's why the payload rich text editor  
is powerful because it's not just html if it was just html then you'd have to  
parse that string and you'd have to do a lot of fancy stuff and react but to be a true headless cms we don't even know if  
you're going to use html or not so we don't want to save that in html we want to save it in json and let you do what  
you need once you have this written one time i don't care you can copy and paste it from this repo it's going to unlock  
your productivity as a developer and it's going to make you understand what's happening behind the scenes  
which is pretty cool but now let's do some fun stuff so let's go up to our red underline  
Creating custom Rich Text Editor components on the frontend  
first uh red headline first and this is our custom rich text editor leaf if i command click  
into here you can see that all it does is it just wraps with a span save that gives some semicolons there we  
go and we have a class and if i go and i look at that class  
it sets it to red and it uppercases it and that's it pretty powerful  
very simple but pretty powerful now let's do a more complicated one  
i'm going to close some of my files  
all right red underline this one is a little bit more fancy and before i go through the code here i'm  
going to show you why it's fancy by giving you a little preview of the actual live website  
so this is the custom website here and you can see here's our  
our red headline whoop i just refreshed you can see a couple animations there  
but if we scroll down you can see that certain text elements like that  
right there that's the red underline and you can see that it animated in when it came on the screen and it drew that  
first it converted the color to red and then it drew in the underlines dynamically which is pretty cool and  
that puts more emphasis on the copy and that's an intentional design tactic that we used to really capture the user's  
attention obviously this is fake text but well you know what if you're lucky at  
the end of the video i'll pull up the real website and then you can see what we did with the copywriting and the imagery  
but we need to do a lot of things to make this effect happen  
so whereas this red headline component was pretty simple all we did was just add inline styles  
this red underline component has to know where it's at on the page has to know when it enters the viewport  
when the user scrolls and then it has to animate in the underline and the color  
so how did we do that  
so the red underlined component itself is kind of complex but  
not really if you have a good understanding of the underlying principles but the way that we're actually monitoring  
if the red underline is in the viewport is pretty cool and it's a relatively new  
feature of browsers but it is called intersection observer and intersection  
observer has pretty good browser support nowadays i think um can i use let's see  
yeah so it's not ie 11 but edge supports it firefox chrome safari everybody else does and that means that it's good  
enough for me we don't support ie 11 anymore neither should you which means intersection observer is  
like our new best friend and what that does is it allows you to monitor in a very performant way  
when an item comes into the viewport how much it like percentage-wise it is in the viewport and many many other things  
so obviously we want it to happen when it comes in the viewport and that's what we're doing here so i'm  
going to skip these kind of boilerplates real quick i'm going to go right to the component and i'm going to talk about it  
here's the red underline component first off we have our styles that we pull in from react.jss  
we have a hook called use intersect which is great it's a way to extract out  
a nice react api for the intersection observer and that hook is going to be checked  
into this repo it's really nice you can use this if you'd like but it takes care of all the hard parts about converting  
the intersection observer api into something that actually sends you back props or sends you back values out of a hook that  
you can use to re-render your component as necessary so this does all that for you and you  
pass it in your object your options for the intersection observer and then it's gonna send you back two things it's  
gonna send you back a way to set the node and it's going to send you back the entry coming back from the intersection  
observer itself so pretty cool that's a topic for a different day but all you can see here is we send it  
our intersection options so we want it to be here's our root margin top right bottom is negative 25 so it's  
going to pull it inward from the bottom of the screen and then zero or negative which pushes  
it out actually so it's going to start before it hits the screen and then here's our threshold so it needs to be  
this ratio inside of the viewport before it is intersection intersecting so that  
hook actually takes care of all that for us and again that's to monitor when the uh when the element comes in and out of the screen  
then we have the animation state itself which we have a reducer for the reducer is here it's pretty simple this could be  
state but we set it up as a reducer instead and then we have the initial value which is both  
animated word in and out are both false but the actual magic happens in this  
effect here so we have an animation timeout we set this to equal to false in both  
case in um in any case and then if it is intersecting if we get our entry back  
from our intersection hook if it is intersecting the screen then we animate  
it in then we set a state has animated true and then we clear the timeout up here  
but if it if it has animated and it's not intersecting then we dispatch and we tell it animate out  
if one of these is not true then it just says hey you know what these are both false reset its state  
and then when we do a little cleanup of that effect we just clear the timeout  
the markup is really simple all it is is it's got a ref which comes back from our intersection ref from our hook  
we have to apply that to the element that we want to be monitored for intersection and then we have our class  
names now the css here is going to be a little bit complicated it's nothing to be  
afraid of we have our base styles we set it equal to whatever the current color was so if it was white it's going  
to be equal to white if it was black it's going to be equal to black we have a background image which is used to  
create that stroke now the underline in the element itself actually turns out that's  
really hard to do in css we basically followed a tutorial for that i think the way that we would go at  
trouble is like hey we have this effect we know we want to make it work how do we do that we're going to do a little bit of googling we're going to go  
to codepen we're going to evaluate the different ways we can do that and then finally we're going to try them out and  
see which one works now in this case we are using a linear gradient to fake a  
background or to fake an underline it's going to be 6 pixels and it's going to be 100  
now when we animate it in we're going to move that background position and it's going to animate so it's going to slide in  
we're going to set a transition and when we animate out we're going to do the same thing but we're going to change that position to 0 100\. so you can see  
that it's basically animating the background position here it starts the background linear gradient position is  
100 100 which is not visible when it animates in we're going to move it halfway visible and when it moves out  
we're going to move it out and then we have some specific styles to reduce down the size  
of the underline so it's five pixels here it's four pixels there three pixels and then four pixels and three pixels  
again we're just basically saying like if you put this underline on an h1 it needs to have a larger  
stroke if you put it on an h2 it needs to be smaller h3 same thing and these are all  
going for medium break points  
you can take a look at this code more on your own pace but overall it's pretty simple we just have  
the state that keeps track of where the the component is in its animation we have the intersect hook which allows us  
to monitor where it is on the screen in a nice performant way and then we have the css  
and all of that together creates a nice reusable component which you can see here it'll be a few places in this once we  
get down there but other than that that's the rich text  
editor and we're going to go back up to the minimal hero type again  
and that's really it so to see this in action i'm going to bring you back we have the paragraph we have the rich text  
and it's all inside of a grid container so what that correlates to  
if i go to a page that has that right there you can see here's our paragraph and  
then here is our rich text i could add more into that rich text editor if i wanted but we are um just rendering out  
i believe this is an h2 at this point  
so now let's go back to the content above media hero this one  
again inside of our page hero component if the type is content above media we're  
going to render the content above media component and this component does a few more things  
first thing you're going to notice it has our grid which is a very powerful way to  
position things in a nice and consistent way i think we talked about that a little bit in a prior episode  
but the content above media hero type first sees that we  
render a grid container we have the grid and then we have the cell that positions it because the funny thing about this  
layout is that it's actually not full width if we go back over to our mock-up and we show you what it looks  
like with the grids on you can see that it steps in one column and it does not extend all the way to the  
well these are fake it should be right there it does not extend all the way to the 12th column  
now they're real there you go so we're rendering that cell to restrict  
the width and then we're just rendering a rich text and then after that we're rendering the  
media itself and now this gutter component is going to be responsible for restricting the gutter space available  
to us so right now we know that we need these this set of what is it seven base yeah  
seven baseline we need that on the left and the right of this component and a lot of our components need that so we  
have that gutter component that's gonna restrict the width available to us we just pass it left and right which  
enables the gutter on the left and right and then we render our media component so quickly i'm going to visit this  
gutter component why is this yelling  
that's not good there we go so the gutter all it does is it says hey  
if they passed left as a prop then render class is that left if they pass right as a prop then render class is not  
right but the magic is in the css of this component all it does is it uses some css variables that we've set  
to apply padding in a nice concise way on both sides  
and we've already gone over this component a little bit but it's very nice very handy and you're going to see  
that used in a lot of places so now we have media the media component itself is pretty cool because it does a  
Media component  
lot of stuff for us it's going to take the media type  
from our original payload scaffolding so if i go back and i show you that if i go to collections and i go to media  
we already have our nice typescript types for all of our collections  
Payload's "depth" function  
and the way that we've built this data model if i go back over to the page and i show you the  
hero media this is an upload field that is related to the media collection  
so if i go over to our cms and i show you the shape of the data hero media  
is a relationship to another collection and we know it always has this data shape  
so the cool thing about the payload rest api is that it automatically populated that relationship for us if i say  
question mark depth equals zero and i close this up you can see that  
hero media is just an id that's all it is that's all that the data gets saved in the database as with that  
relationship field but if i say depth equals one then all of a sudden that media document  
gets populated fully for us one level deep you can say depth equals two and then if  
there were any relationships on the media then it would populate further this is all documented in our let's see  
if i hit slash and i type in depth let's see if you want to learn more about the depth  
parameter you can go to our documentation and scroll to the depth section right here  
underneath concepts really cool though and basically the gist of it is that your your depth will automatically be populated in the rest  
api and the local api with that depth parameter the default value is 2 but if you didn't want that you could set it to  
zero and turn it off but the thing that i was getting at is that  
we know that the typescript types need to be equal to that hero media the media type so if i go back over to  
our media type we have a file name we have alt we have the mime type and then we have the sizes which are each equal  
to the size details and then from there inside of typescript  
we know very safely what types we're going to be passing to this media and we're  
spreading the media type which comes through beautifully now inside of this media component  
we have our types which come from we have our props excuse me which come from the type  
and we're extending it with these two extra props class name to give it an optional  
class name and then a preferred size to try to render that size image and if it's not there then we'll fall back and  
we'll render the default but if it's a video i mentioned this briefly but everywhere in this site  
wherever we have media like right here this could be a video or it could be an  
image and eventually maybe our client might want to add some you know maybe some b-roll footage from their office or  
maybe some field footage on the site on a construction site or anything like that they might want to add that in to  
their website and all they have to do is go into the cms remove this out and then choose  
a video instead we don't have any right now so i'm going to close that and refresh  
but if they did and they will in the future then they could just add it here and our media component is going to take  
care of rendering the video for us which is super cool if the mime type includes video if it doesn't we're just going to  
render an image and we're going to dynamically choose the size of the preferred size or we're  
just going to send it the file name itself but really the positioning and the magic  
all happens here with the gutter and with a quick class name  
right here and we have a couple animations in the  
css as well if i go back and i show you in the browser if i refresh the page scroll to the top  
do that again you see those fade in nicely and they fade up and the way that's done is just all css  
nice and simple with a couple different delays  
if you have any questions on this stuff in specific or if you want to know why we wrote the code this way like i mentioned earlier ask us in github  
discussions it would be great to have some in-depth conversations about this  
but the last page hero is the content left of media so i'm going to pop over to that one  
it's going to be pretty similar to the content above media except for the positioning is going to be a little bit different  
and you can see we have a grid container for the content but we also have just another div that's  
completely outside of this grid container for the media itself and we're going to position this one absolute so  
if i go back to the mock-up or better yet i'll just go to a page with it the who we are page this is the content left of image it  
should be allowed to overlap and when you have an overlap in css that typically means you have some pretty  
fancy positioning to do and it's it's always going to be a struggle to get it to be done right but  
in this case what we did was we absolutely positioned the media on the right hand side and just set it to 50  
percent of the screen width and then we just used our column system for this content here  
here's our column system we only let it extend 10 columns to make sure that  
this content shouldn't overlap too much it should only overlap just a little bit but then  
we restrict that on mobile to 8 columns and then we render the media so the css  
for this one we're going to have some animations again we have the fade in up keyframes we have the title which takes the fade  
in up we have the rich text which takes the fade in up animation and then we have the media and like i  
mentioned we have position absolute for the media it's going to be positioned behind and it's going to be 50 wide  
and there you go there's a nice kind of broken grid style layout and that's how we render the heroes so  
if i go back and i show you some other pages we go to the who we are page this one is content left of media notice that  
we still have the hero media and the hero content if i go to our approach we have the  
minimal hero which only has hero content and that's the heroes  
Beginning the layout blocks  
okay so we've gone through the heroes and that as you might know is just kind  
of referring to the first block on the page just the one that does the most work it has a big job to do has to make  
an impression has to engage the user but from there on we have our content blocks  
themselves the layout of the page and for this we are using to throw back to the first episode we are using the  
payload blocks field type which is getting more and more powerful as the  
days go on but if i show you what that looks like in the cms side we have a layout now these are all  
collapsed one of the features that we just released for payload is a user preferences api which remembers your  
your admin users as they interact with the admin panel itself so like i collapsed these  
manually i closed them up because i wanted to see them all at a at a glimpse and i want payload to remember that now  
in the background payload will remember things like that about your admins and you can actually use this api yourself  
with custom components if you want we have a blog post written up about that check it out if it's interesting to you  
but the moral is payload is getting better and better which i'm really pumped about but if i refresh this page  
you can see that these are still collapsed but let's open some of them up and take  
a look the content component is going to be a pretty heavy hitting layout block  
it's got background color it's got columns we've already scaffolded all this out we've got a couple content  
right in a row we've got a spacer we've got more content we've got a statistics block we've got a spacer i've named all  
these personally so like i could say here is the intro to page and then this is just a  
basically a helpful name to let your admins know what they're looking at but you can name these whatever you want  
they're not going to affect the front end at all but keep scrolling we've got statistics  
we've got a spacer we've got a media block we've got a media content collage more content and then finally we have a  
study slider so what that looks like on the front end if i scroll down this page we have a hero  
then we have a content block then we have more content left aligned with a little accent line  
right aligned with an accent line more content this time it's on a blue background and we've got a  
text red underline then we have the stat bubbles which animate in nicely and they have a little  
parallax to them as well we have a full screen media block which also has a little bit of parallax  
then we have this media content collage block that centers the content and allows you to upload  
media that surrounds it in a nice abstract way then we have another content block  
and we have a study slider and when i hover over this you can see that a nice little cursor pops up and allows me to  
drag through the different slide or the different projects whoop accidentally clicked it  
my bad scroll back down to it that was the last block on the page i believe  
yep and then the footer so we're going to go through these blocks we're going to do it in  
alphabetical order the first one is the content no the call to action block  
so we've got one of those on the who we are page i believe get a sneak peek here real quick  
sticky slider our team content grid full screen image  
an image slider cta grid and then boom here's the call  
The Call to Action block  
to action headline block it's pretty simple all it is is it intentionally bleeds off the left side  
of the screen it lets the text wrap to however it needs it goes to full screen  
let's just shrink this down to like there it goes to full screen on tablets  
but it keeps that gutter on larger screens so this is a pretty simple one it's going to be a good one to start with  
if i pop over to the code you can see that i have a call to action block being imported here  
we've already scaffolded this out so i'm just going to click in here quickly and refresh us on what's actually happening  
here we're importing the background color field we're importing the link field  
we're giving ourselves a couple types that are reusable in typescript and then we're defining the payload  
config for this block the slug the labels the fields  
first is background color then we have content then we have actions which is an array and what that looks like on the cms side  
if i go over to the who we are page scroll down  
find the call to action here's what that looks like first we  
have the background color this one's set to orange we have the content  
and then we have the actions which is an array of buttons basically it doesn't  
have to be a button it's going to be rendered however we want on the front end but this has one button in it i could add  
another button if i wanted by clicking add action and then i could say page or custom url  
but we don't want that we only want one so with this data if i was to click on  
the api url i think i've gone through this a little bit in a prior video but our layout is an array  
of blocks and just like we did with the rich text editor we basically loop through every block and then depending  
on what type it is we render a specific react component and how that's handled just as a quick refresher in the page  
the front end component in the pages folder we have a render blocks component that  
takes that layout array and for each one it's going to map over  
it it's going to choose the block from our components by the block type so it's going to we have the block type it's one  
of these strings that you can see and it's going to dynamically select the appropriate block component and render  
that with all of its appropriate types otherwise it's going to return null now this is a really elegant way to do this  
because you just wire it up one time you import your components and then you just loop over them and then render them on  
the page and react does that really beautifully for us now that index for the blocks already  
got this all set up here we export accounts components and it's just an object  
where the keys are equal to the block type and the values are equal to the react component that corresponds  
so if i click into call to action you can see here are our three props  
and all we do for the markup here we have a wrapping div for the styles  
we render the gutter and we know that this gutter is only supposed to have the right padding this  
is the background for the for the block right here so if we look at the the mock-up  
go over to the who we are page scroll all the way down  
oh no our approach i don't know what i'm doing here we are  
okay so this is the component this is the mock-up and it should have the right  
gutter but it should not have the left gutter now this is a really tricky thing to do in css because you still want this  
stuff to line up to the grid right so if you have a container you might think like let's just put background  
color on the container but if you had the container and then you rendered this inside of that then you're going to be off because it's  
not it's to center it you can see that there's less space over here than there is over here so it's actually going to be like over here and it's not going to  
line up to your grid properly so what we need to do is we need to do something in css to  
make sure that our content still lines up to our grid but maybe we can like fake this background somehow  
by rendering it separately so that's what this component is going to do notice that we have a gutter and we use  
that gutter to position the background color but then the grid container itself is completely outside of that background  
that's because we don't want this background to influence the position of its contents  
so example if we go to the css this gutter you might have seen this already with our hero  
the content left of media we're going to position absolute  
so the where did my let's clean shall we  
no  
here we go sorry i'm losing it um the gutter itself is going to have background gutter and there's going to  
be a background class and what we're going to do with that the whole block will be positioned relative  
but the background gutter itself that wrapper will be positioned absolute that will be z index one and the background  
will just be 100 of whatever's inside of it and then the grid container itself will be positioned relative z and x2 so it's  
just going to sit right on top of it that's going to make it so that our background color does not influence the  
layout of the grid itself this is a really common design tactic that we do at trouble to try to break certain  
elements from the grid and allow others to stay aligned to the grid and that's how we do it so the gutter  
we've already talked about that the background color is a new component that we have not looked at yet and it's  
a powerful one and it's an elegant one because if you looked at the mock-ups by now you see that we have some pretty commonly  
used background color components that are pretty much ubiquitous to the design of the site and they all need to  
be typed safely they all need to be responsible for rendering the color it's basically like a mainstay of the  
design and so this background color component is going to take care of that for us if i command click in here markup  
wise it's really simple all it does is it takes the color from the prop and then it says hey let's go take the  
color from the classes dynamically and all the magic really happens in the css  
so if it's a blue then we have a background color of blue we don't have any global styles for blue  
if it's red we take the background color from the css variables and then we say for everything inside of  
it let's color that as an antique color so that's a global react jss selector  
for everything and we're saying hey if you're inside of a red background color then you should be  
antique yourself do all of that for the same the same way  
and so it's a really simple component but it's powerful because we know that we have to write it one time and then we  
can use it everywhere we want in this case we're just going to be position absolute and given ourselves that  
background color now the catch is sometimes we need to  
fake it because this is the actual aesthetically appearing color but we want our rich text to be reliant on  
those background colors as well to color themselves because the admin could go and they could change the color  
of that call to action block to a blue or let's say to a red  
which would then make it so that the content inside of it needs to be colored as antique like we saw  
so we're actually using in the background we're using two different colors or background color components we  
have the one that spans this whole width and it sits in the background just like right there but then we have another one  
that just sits directly on top of it and lines up perfectly to the grid and because they're the same color you can never know the difference  
so if i go into this inspector and i inspect this real quick  
my computer is dying right now  
we have we can zoom for you  
all right there we go we've got an orange container right here  
that background is actually orange but you just would never know it because it's sitting on top of an orange  
component but we also have the full background color back here which is also  
orange so little things like that as web developers we can get away with that make our lives a lot easier even though  
that's not the cleanest markup because there's an extra div there the amount of time that that saves you as a developer  
is just totally totally worth it so i have no hard feelings about that at all  
but then we reuse our rich text and we just pass it the component or the content and then for the actions we have a list  
of actions you can have one or you can have two and what that looks like is an array it's a payload array field type  
and then for each action you have a link and that link itself has the type the  
url and the label now this is the first time that we're actually seeing this link component oh no i think we've seen that in a video  
past i'm getting all mixed up but the link component is also nice because we can just render out the props  
this all comes right through from our initial typing and then we render the button inside of  
it because we know inside of this call to action we want it to be a button other places we want this link to just  
render the linked data like if it's a page link or if it's an external link remember we have set this content up so  
that if you want to link to a page you get a nice drop down with page links that way if you ever update the url for  
one of these pages you don't have to go back through your whole cms and change that or if it's a custom url then we  
just type that in the data again looks like this  
so that component is going to handle the actual linking but the visuals will be rendered as with a  
button by ourselves and that link component remember it's also used in the menu it's used in the  
footer these are all that same link component all that's responsible for is linking where you're trying to go but  
then the buttons themselves are rendered with a button component so i'm going to show you both of those  
first we're going to go to the let's go to the link itself  
here it's the cms link it takes a class name and then the link type from the field which is either a  
page or custom type a label and then an optional page optional url  
first thing we're going to do we're going to determine if that's a relative url if it's a relative url  
meaning we're linking straight to ourselves our own website or if it's a type of page we know that  
we can use the next js link so we've imported that from next link  
otherwise we just return an anchor link and we let it link to wherever it was going to so this has nothing to do with styles at  
all there's not even a style sheet for this it just renders out whatever you tell it to and in this case we're  
rendering a button and the button takes a color it takes a class name it takes a label and then you  
can override css by passing in some css from the styles come from react.jss  
and all that does is renders a semantically correct button html component element  
and that's it that's the call to action  
The Content block  
okay so the next block we're going to be looking at is the content block and remember this is a pretty heavy hitting block it's used all over the place if we  
take a quick scroll through the homepage bam there's a content block here's a content block with a red accent with an  
accent line and a red background here's another content block with an accent line right aligned with a red background  
then we have a spacer and then we have more content blocks with the red underline they're just used everywhere so this  
block is going to be crucial that we build right in a nice powerful way but also unbreakable and  
highly flexible so it's a tall order but remember from our first video that we've already  
defined the content model for this block and it's going to have a background color it's going to have an array of  
columns each column you're going to be able to set its width one third half two-thirds full width  
it's alignment so if it's left center or right aligned you're going to be able to write the content for the block itself and with  
More Rich Text Editor customization  
slight js we are passing it in our red underlined leaf once again but we're  
restricting the elements that are allowed to be used inside of this content block and the reason that we're  
doing that is because notice that we do not have the h1 here the h1 should be in the hero of the page  
and for seo reasons you should never have more than an h1 on any given page  
so we are omitting the h1 from this rich text field and we're also injecting a  
custom element so the first time around we showed the red underline that and the red headline those are two  
custom slate js leaves but right here this is a custom element  
and the difference between an element and a leaf inside of slight js you can check out their documentation for  
something more accurate than what i'm going to say but i believe elements are  
used when you can potentially have more than one element inside of another  
element alternatively a leaf could be thought of as like the  
lowest common denominator that just contains a document's text it just renders text  
and so things like bold strike through maybe like italicized those are leaves but elements  
would be more like a black level html element and so an hr would be an element not a leaf  
if we click into this it's going to be very very similar to the um leaves that we've already looked at but  
this one does have a plug-in and how it's going to be rendered on the dashboard if i show you that real quick  
let's see if i can find one would it be in  
the home page maybe it would be in the proof points  
nope next one  
there we go there's an hr and it's rendered like a like an m dash inside of the  
toolbar itself now this is not editable you can see that i can click i try to click on it  
but it puts my cursor above and below it and for that we need to have a plugin  
so the button is the same thing if we click into there and we show you what the button looks like well let's just fix some of these errors  
real quick the reason that those are errors is because payload is in the same npm  
project as our um as our admin panel here and we want to rely on the slate dependencies from  
payload and that's a restriction from slate so i just i just ignored that eslint rule really quickly  
but we have a way to insert the button which is a function so what we're doing here  
is we're saying well this hr doesn't have any text so we'll just put in a space and here is the shape of the data  
for an hr and all it is is just type hr then we have the nodes itself so we are  
going to be inserting the button and then we're going to be inserting a space after the button the nodes are what's  
actually going to be injected into slate js so when i click on this insert button or when i call this function it's going  
to insert not only one node for the for the button itself but it's going to insert two  
you know what this should be called hr  
yeah this is outdated actually not for long  
okay there we go hang with me for a minute while i get my brain straight okay so here's the notes  
that are going to be injected blur selection is a handy um basically a nice to have so that when  
someone clicks on that hr button and injects an hr into the into the slate editor like if i click down here and  
then i say that we don't lose our focus you see that my cursor has reappeared  
where it was in the first place now that is because we remembered the blur selection location now i'm going to be  
honest slate.js does have a learning curve of its own but that comes straight from their documentation that's not  
really a payload thing so what we do is we store the blur selection and then we can replace the blur selection after we  
insert the hr by just offsetting plus one so if you  
ever need to look at that i would suggest just looking at this repo it's a really nice thing for your editors if you're adding something that's like not  
clickable but what we have here is we have an element button which comes from payload  
and we are rendering just in m-here and we're giving it the format and then  
when it gets clicked we're going to be calling this function  
and that's all there is to the element or to the to the button now the element is much simpler as you can expect it's  
just going to be an hr you do have to render children no matter what with slate it's a background thing  
so you can see that all slate elements take children as a prop and you do need  
to spread the attributes and you need to pass the children through but then you just render whatever you want so i just  
rendered an hr there now the one thing that we haven't looked at already for slate js extensions is  
the plugins now plugins are slight js concepts that you can extend slight functionality  
so it's pretty simple you take an editor and you return an editor let's just turn  
this off as well you take an editor in you extend the  
editor and then you return the editor and in this case we are modifying the is void  
function we're taking in an element and if it's an hr then we say this is an l this is  
an h this is a void element which means that you're not able to click into it you're not able to type into it all it does is  
just add something into your editor whereas like in h1 if you add an h1  
element then that element you can type inside of it but in hr you cannot type inside of it you just want it to add  
itself so if if it's an hr you return true otherwise you return the is void  
element itself which comes from the editor so that's basically a simple plugin  
and we are using that we're injecting that into our hr custom element here  
so moving on we just covered a little bit of crazy stuff with this slight js editor here but we're moving on we have  
another check box for accent line that will be either enabled or disabled and that accent line will correspond to the  
well let me refresh this before i break anything the accent line will correspond to this little guy that bleeds off the left and  
the right of the page just a straight up checkbox  
but then we have the alignment we need to know if that alignment for that accent line is going to come off  
the left or the right side of the page and we have a condition that only shows  
this field when accent line is checked so we've talked about that a little bit in a prior part of this video but if i  
pop over and i look at what that looks like you can look at this answer accent line is enabled so we have  
alignment if i turn that off that field goes away  
and then finally the last two fields we have are padding and we've already scaffolded out the data for this but we will talk about the  
react component shortly padding is going to be a reusable concept and you can choose between none  
small medium and large for bottom and top what that's going to do is it's going to  
allow the admin to make very fine-grained decisions about how much spacing they want between each of their  
blocks the reason that it's padding and not margin is because we're going to do some pretty fancy stuff with background  
colors like technically if i was to pull up my inspector this little faked big red block here is  
actually multiple content blocks it's just faked because there's no space between them so if i  
show you this here's content block number one and here's content block number two and this content block has small spacing  
above or padding but large below and this one has large above but small below  
and there is no margin which allows us to fake this whole layout if you look at this you can see it all looks like one  
block but those are definitely separate things we have the question and then we have the answer then we have a spacer  
then we have another content block here two column content here  
and then we have another content block here with zero space between and so what that looks like if i scroll  
up here remember that question and answer here's our question block set to the background color of red and here's  
our answer block also set to the background color of red but it looks like they're the same because there's no space between them it's a pretty nice  
way that we did this and it's going to be really stable for the admin to use as well as highly flexible  
so that's the markup or that's the config and now here's the react component  
so as we saw we have columns and the columns are going to correspond  
and use our css grid columns so we have some styles  
and these are going to be usable we're going to be able to automatically access these properties and then render  
the settings for the columns dynamically and then here's our component itself  
just called content we have padding top and bottom we have the accent line and its alignment we have the columns and  
then we have the background color everything will always be in a gutter  
and the gutter will be turned on left and right so what that means is if there's a background great then that background  
will be nicely positioned with that color similarly to how we did it for the content or the call to action block  
but if there is no background color great it's still going to be there there's still going to be a gutter in the background but you're just not going  
to see it or need it  
so we have the gutter we have the background color which we're passing through  
we have the padding which is a new component so if i click into this you can see i'm just threading those two props through but if i click into this  
padding component it's nice and easy all it does is just renders two classes and it uses the padding size so if i hover  
over this you can see small none medium large and just automatically chooses classes  
adjusts those classes automatically for media queries and does it all in one place  
so that we can reuse this component in a thousand places but all it is right there just render it and you're done  
now the beautiful part about this gutter in this background color that's different than the call to action block  
is that this one is equally placed in the center of the screen so the left and the right gutter  
we can just plop our grid immediately in the middle of it whereas if we go back to the call to action over here remember  
we had to absolutely position this one because otherwise it would throw off the centering of our component because we  
only have the right gutter in this file we have left and right which means that we can place our content right inside of  
it and everybody will be happy so we've got a grid container  
we've got our accent line which dynamically selects number one if accent line is true it will render if  
it's false it won't render but it's going to dynamically choose its alignment  
and then we have the grid itself so all we do here is we map over the columns  
we choose the column styles based on the width of the column  
and then we say you know what on mobile everybody's going to be columns eight and then we render our content  
so at this point you can see a lot of different react components coming together and making our job easier we  
did a lot of boilerplate up till this point but this is a very complex component but you can see that we have  
all of our concerns nicely isolated and compartmentalized so we're  
bringing them all into this one file and now it's like a concert with everybody playing together but it took us a minute to get here but from  
the rest of these components it's going to be a very very similar process  
if we look over at the css there's probably not too much going on here first thing we need to overflow hidden on the content  
then we set up our alignment and mostly it's just center and right  
pretty str pretty straightforward there the grid container is position relative  
then we style our accent line and position them accordingly those accent lines are absolutely positioned and  
they're going to be falling off the right or the left side of the page now these accent lines are why we had to  
say overflow hidden on this block because we're actually faking it you can see that the width 100 view width here  
that is actually going to make it so that in reality our overflows  
are way off the side of the screen they're like way over here because they're 100 of the view width and that  
would create a horizontal scroll so what we did was we just said overflow hidden on the content block itself which will  
prevent that overflow hidden and allow us to have these bleed off the side of the screen appropriately  
but that is the content block it's pretty powerful it's like a concert like i said with all of the uh  
like all the different components we've built thus far padding grid container  
gutter it's using everything in a really nice way  
okay so the next component in alphabetical order is the cta grid and that's what you're seeing on the  
screen here it's basically just a vertical grid of all the different calls to action that a page might need it's  
not necessarily for job positions like we have here it could be for anything but that's why we named it cta grid and  
we didn't call it like jobs grid or anything like that we wanted it to be open-ended and we already went through  
the data side of this component and i'm not actually going to cover the way that this one was built just because it  
basically has everything that we've just done in the content block itself but it has been built and checked into  
the repo so if you did want to see how it was built or look at the code for it you can scroll through the the who we  
are page get down to the bottom of this guy pass the slider past all this other stuff and take a look at it it's pretty  
straightforward i think you'll find it easy enough to wrap your head around if you just hung in there through the  
content block but instead we're going to go to the next component  
which is the media component now the media component just takes  
The Media block  
you guessed it media and then it styles it in either a normal full screen wide  
position and this is a pretty straightforward component the only thing that we're doing here is  
we are rendering some parallax which is going to be the first time that you're seeing some parallax in this walkthrough thus  
far now this is the front end component if we have media and it's an object  
and if it's full screen then we're going to render it inside of a parallax component  
so you can see right here this parallax component is new to this series and all we do inside of it is we just  
render the media component but the full screen type is the only one  
that supports parallax you can see that it's missing from these other two and the reason is because we have made  
this nice little effect where it kind of comes into the screen like it's actually like the container is not  
moving but inside of the container we have overflow hidden and the photo kind of just parallaxes inside of its own  
little box there and the parallax component itself i'm  
Parallax component  
going to click into that and we're going to talk about this it takes a prop of y distance which is the distance that  
something should parallax and this component has been a mainstay it's  
gone through a couple evolutions at trouble we use it once in a while if the project requires parallax but it relies  
on a couple of our faceless ui dependencies to actually calculate how much parallax should be  
applied and when so use window info we can get the window height from there in a nice concise way  
you might be wondering why don't we just get that from window dot inner height  
that's because this way it's a react prop in this way it will force a re-render of our  
component whereas if you're just reading it off of window.inner window.innerheight then  
your component's not going to re-render and we also have use scroll info  
so we have scroll info dot y that's going to say how far the user has scrolled through the document and with  
the window height and with the scroll y position we can do some fun stuff  
so basically this is the magic of the component right here  
and it's all based on a node ref that we've rendered on our  
actual html element here so html element comes from a  
it's just basically a prop that allows you to specify if you want a div or a paragraph or an li or anything like that  
and we're going to add that ref directly to this html element and we're just going to give ourselves  
some class names and then we're going to render some inline styles that are created dynamically above  
now that style comes from the translate y which gets stored in state here  
initially it's going to be zero but if we have a node so this is only going to render after our component has  
mounted and our ref has registered itself we're going to get the bounding client rectangle we're going to that's going to  
give us information about where that div is on the screen left position top position  
everything like that got a couple different variables set up to determine if the  
node is in above or below the viewport because we only want to do this if the node is visible that's a performance  
optimization you don't care about where things are parallaxing if they're off the screen  
only if they're on the screen is when you want to actually calculate and  
re-render that new parallax value so we're doing that inside of an if block and all we're doing is we're saying hey  
where's that node y position from the um from the bounding client rectangle divide that by the window height  
and then set it and set it as a translate y so percent of window traveled that is a  
decimal but multiplied by the y distance that's how far you translate  
and then down here all we do is just translate 3d and we translate it  
like i said if you have any feedback on this component or if you're interested with any other questions let us know in  
the github discussions but this is being used in a nice and simple way  
in the full screen media component  
this one is obviously going to be full screen then we have wide which is going to set itself inside of a gutter  
with left and right and then we have the grid which obviously the wide is going to be quite  
a bit wider than the grid if we go back to our mock-ups i can show you the difference between the two  
let's see here is a media component nested within the grid  
and then i believe somewhere else let's see we might not have one displayed but we  
also have a way to set it equal to the  
gutter which would be basically the width of this red block here  
just to give the admins a little bit of flexibility when they're actually crafting their case studies or their pages if they want to create a nice  
compelling visual heavy layout they can do that all by themselves  
and that's the media block  
okay just went over media the next few components are very similar and they  
don't really have anything new besides this media stat collage which we want to do this the statistics block first  
before we talk about this component so i'm actually going to skip that one for a minute these these three  
basically just rely on things that we've just learned so parallax and media if i click into one of these you'll see what i mean  
there's you can have an array of media and all it does is renders it out in a nice collage  
that you can see in action down here  
like that that's just a nice collage component and then we have the  
media grid media content collage which is on the home page  
here just kind of creates a nice collage effect with the centered content in the  
middle with the background gutter the background color and then just has an array of media resource  
references no real new principles there  
then we have the media grid same thing  
used to create the team layout right here  
same thing just a little bit of parallax and media and background color and uh gutter  
and then finally we have the media stat collage whoops wrong way  
the media stat collage the reason i don't want to go over that one yet is because it's got these stat bubbles and i want to talk about those first  
Slider block  
so to keep in alphabetical order we're going to do slider next and the slider is actually a pretty  
different component from what we've reviewed thus far the vanilla slider  
this is the payload collection config or the payload block config it's got a background color and then it's got  
slides you need to have at least three slides in the max nine and inside of there it's  
just a media reference so this is going to be you could call it a media slider if  
you'd like but what that's going to correspond to is this guy right here  
where you're going to get that nice little drag handle and you're going to get a little slider progress bar and then you're just going to have media  
that slides in and off of the page with the background color so if we go over to the component for  
this well let's actually go look at it in the browser first i think we have one on us  
on the who we are page let's see oh right here  
yep there we go so we got the drag me slider and then you can just simply drag  
through the cool part about this component is that like everything else it fully supports  
video in any one of these spots so you could create like a really interesting like this one could be moving and that  
would really provoke the user to scroll through these and so when we get to the live project here i i really i'm looking  
forward to adding a lot of video but the component itself we pop over to  
the code we have a couple new concepts first the grid container width  
now this is something that we have not talked about yet but it's kind of cool and i want to walk you through that  
first so the grid container as we remember is just responsible for  
setting up the left and right alignment margin left auto margin right auto putting padding for mobile purposes and  
then a max width so that our grid can always have the same width no matter  
where it's rendered on the page now one complex part of that  
if i go over to the mock-ups there are times where this width is exactly equal to what you  
told it to be because you have a max width but if your screen is smaller than that then it's going to be max width to  
the screen and it's going to have any number of sizes and you're never going to know how wide that grid actually is  
it's not going to be your max width it could be less than that so we need to have some way some type of  
utility that gives us the actual width of the grid in pixels  
at whatever screen size that the user is currently looking at so for example what we've done is we've  
extended this grid container with a provider a context provider and what we're doing there is we're importing use  
window info to make it so that our component refreshes every time the window changes  
sizes we're going to store that new width of this grid  
right here inside of local state so we're just rendering a dummy grid container and i  
believe this is at the bottom of our app.js so if i scroll down there and i show you  
we find it grid container with provider so this provider wraps everything and  
it's really cool because that way that that provider itself is going to render  
a dummy component and then it's going to measure that component  
and then it's going to send that width down through the component tree so that anyone can use grid container width at  
any point and get that actual width that it needs and that's going to allow us to do things like this where this is  
bleeding off the right side of the page but it's not bleeding off the left so how do we do that  
well we need to know the difference between the grid's width and the overall screen width  
if we have the overall screen width and we have the grid's width then we can get this value right here  
and that's the whole thing so we could say overall width minus grid width  
divided by 2 gives you this and then we can position this slider accordingly so that's a lot of front-end  
magic but the the concepts are fairly simple but this provider is going to be what allows us to do that because this  
is keeping track of its own width and it's providing it down the tree with this hook  
so if i go back into our slider block  
you can see the first thing we're doing here is we're getting the grid container width  
and in this case the only place that that's used is we're only allowing the images within the slider to be  
the maximum width of the grid and that's going to allow us to keep that alignment  
right there but then we have this slider on  
background component and the reason that this slider on background component isn't just written directly into this  
file is because the slider is actually used in two different places it's used here and it's also used in the study  
slider which you can see on the home page that's the same component we want to abstract that out into a reusable  
component because a lot of the functionality is exactly the same you can see we have this progress bar and  
then we have the the slides bleeding off the right hand side of the screen and we have all the functionality inside of it  
like being able to free scroll i'm not clicking and dragging i'm on my trackpad to the left  
but basically i'm just swiping left and right like you would do on a phone and it's just freely scrolling just like i'm  
scrolling up and down it's a nice little tactic that we built into this component you can also click and drag if you want  
but you don't need to so going back over here as you can see the magic really happens  
in the slider on background component so if i go in here the slider itself is fairly complex  
i'm not going to go too far into detail here because we have a lot to cover yet but what we have to do is keep a couple  
different refs we have to get the width of the window we have to have the slider padding on  
the left which is basically what we're going to be what i talked about earlier  
we're going to be setting up the slider left padding when the width changes of the window  
we're going to be disabling the track if the slides are less than 2 because if the slides are less than 2 then you  
don't really need that track we render out the background color position absolute just like we've done  
before so it's completely outside of everything else we have a slider provider  
then we render the slider inside of that with each slide and the slides  
themselves come from the props if we want to show the track then we have a grid container  
and then we render the track itself which is basically just a percent scrolled times 100 percent  
and so that's going to move as the user scrolls through the slider  
now the slider provider itself is got a different job to fill we just looked at the  
where am i right now i lost myself  
components ah yep okay  
so the slider provider has a lot of things to pass through its context  
and that's why we set it up like that so that if there was some component inside of it that needed to have like a next or  
a previous arrow to click and advance the slides by one slide then we can have this context and any component inside  
can utilize the slider context and trigger these types of actions on the slider itself  
and again i don't want to go through this too much just because there's a lot to cover here but if you do have any  
questions about this take a look and we will help you there  
Study Slider block  
while we're on the slider let's just compare and contrast the two different places that it's used so we  
have the media slider which renders the slider on the background and it puts out an image for  
each slide but we also have the study slider which also uses that slider  
but instead of putting an image out it's going to output a div with a link  
with an image inside of it so that this image is actually going to be the preview of the study itself now we  
haven't talked about the studies yet too much but it's going to choose the featured media from the study and it's  
going to render the featured media as the image and then output the title below it so this is basically a nice component if  
i go to the home page i scroll down and look down here we've seen this a couple times but the beauty  
of it is that all of this gets populated dynamically by the cms  
so if i go here i refresh go to the home page  
scroll all the way down to the study slider we're dynamically referencing studies  
that exist elsewhere so we're not manually building that up we're not saying hey use this image in this title  
of this image in this title we're just referencing existing studies so if i go over to studies that's actually a  
relationship field that points to these studies and automatically populates all that information so if i go to the home  
page for example real quick this is who we are  
our approach we look at the last block  
right here studies is an array of dynamically populated studies  
and that's really cool because that allows our admins to have an easier job when they craft this and if they  
change the title of a study then it would change here as well but let's just do one more thing for the sake of  
demonstration remember that we have that depth parameter that i went  
over earlier in this video the depth parameter is actually what's helping us with these studies because the studies  
are getting dynamically rendered as well so if i close everything up here what am  
i doing right here here's the studies you can see they're dynamically populated  
but if i do depth equals zero then i scroll down to that last block  
again they're just going to be ids  
so payload takes care of that for us which is really nice  
but you can see how by isolating our concerns and reusing components wherever possible  
it's going to be a lot easier for us in the long run because if this slider has a bug in it then if we fix it in the  
slider on background component then it will fix itself in both cases where we've used it  
so having that component based mentality really helps out a lot  
Spacer block  
okay now for a quick one we just went through some pretty heavy hitting components but this is uh the spacer component and the  
spacer is a beautifully simple component all it's meant to do is provide extra space where  
you need it in the front end so for example we might have a spacer between these two blocks right  
there just to create that empty space and allow these statistics bubbles to still overlap the spacer is used here  
and there it's also used here between two content blocks but it's very very simple and  
kind of nice and tidy so we're going to quickly cover that one the only field that it comes with is the size  
but the component itself just renders a div dynamically chooses the class based on  
the size and then sets a height using these sizes  
by the way these sizes are also used in the padding component  
which is pretty cool so the spacer component is nice and simple  
Statistics block  
but they can't all be that simple so let's go back to another complex one statistics i've been kind of looking  
forward to this one a little bit in a weird way but it has some complicated parts to it it's  
not i mean the slider is 13 times more complex but the statistics  
have some nice reusability and some weird css tactics  
so first off the actual like payload block config  
isn't really that complex you have background color which is a reusable field you have overlap which is  
a new field that we haven't discussed yet but the overlap is a reusable field that if i navigate down into my fields  
and i show it to you it's basically just going to say  
small medium or large that's it and we have it abstracted so that we can  
rename it easily so get overlap is going to output the top overlap but get overlap down here is  
going to output a field with bottom overlap as the name and the label so overlap is actually a row with two  
fields inside of it they're the same but they're abstracted so here's the actual fields  
and on the front end of the admin panel what that actually looks like  
if i scroll let me close these up again  
here are the statistics we have the top overlap and the bottom overlap so because our configs are just  
javascript we can do some nice stuff like that and it's really nice and tidy i actually don't  
need these labels at all i can just delete those  
we don't need it payload will automatically generate  
human-friendly labels based on the name of the field so for example  
top overlap will be turned into top overlap payload understands camelcase and it  
will automatically put spaces and automatically capitalize  
accordingly so just to make our jobs a little easier we don't have to write those out every time  
now overlap is used in that stats block  
config and the reason that that's used is because in our mock-ups  
the stat blocks actually significantly overlap the things that they're around like in  
reality if that if we didn't have that overlap field these would start here well down here actually  
right because it wouldn't be overlapping this content block and then this would start down here  
probably like right there actually but because we have that overlap field that's going to allow us to use negative  
margins to place these stat blocks over surrounding content  
and then finally we have an array of the statistics themselves and you'll see that the fields are  
actually going to be abstracted as well into a reusable field declaration because we have these stats here and we  
have it in the media stat collage so these are used in multiple places and it's  
just stat and description set inside of a row  
so if we go look at what that looks like on the front end we have a stat and a description stat  
description stat description you can move these around you can remove  
them you can add more you can follow your heart but this is the way the admin panel looks  
and then in the browser we have some parallax well let me refresh because we have a couple more  
things the first thing is that they fade in when they come into view like that  
and the second thing is that they're slightly parallaxing and so with the negative margins and the  
appearance on the introduction to the screen and the um  
yeah whatever else i said can't remember it's a pretty dynamic block  
now let's go over to the component  
okay here's our props top bottom stats background color  
we're dynamically fetching these classes which are  
kind of beautifully simple right here  
overlap small over that medium we reduce them we we reduce them from mobile  
we render the gutter and the gutter is because we do have a background color for these stats  
so we kind of faked it again by saying like right here is actually where the  
content block stops and right here is where the statistics block starts so all this blue in the  
background actually comes from the stat blocks but it looks like it's part of the block in front of it so just like we joined up  
these existing blocks like these ones to make it seem like they're all in the same section with background color we  
did a little web developer trick and we did the same thing with these stat blocks so it looks like it's seamlessly  
joined up with this narrative here but in reality it's a whole separate layout building block  
so you can get kind of creative like as you go as you gain experience as a designer working on these projects and  
thinking in like a layout building mentality you you start to have a better and better grasp of what's going to be  
possible and what's going to give developers a huge headache and in this case we kind of had that and we knew  
like you know what this is a kind of a crazy layout but you know what if we just gave an overlap property and then  
what if we just gave the background color we could probably do it and we did  
so stats render out the background we have that top overlap here again  
you can see that here it's top overlap but here it's background overlap  
and that is because the background color needs to actually pay attention to the overlap settings otherwise you're going  
to get blue over top of the components right because we have a background here but the background technically would  
cover this right so we need some padding let me show you that in the inspector real quick  
let's go look in the background color here  
see that it's got that bottom in that top to keep it away from the container above it and  
this is going to be equal to the margin top the negative margin top  
so the component will pull itself up but then the background will push itself down the equal amount  
and then we just loop through the statistics themselves we render out a parallax component  
we set the distance 50 plus each iteration so the first one  
will be 50\. the second one will be 100 and the third one will be 150\. that way we get a nice  
little effect that the the bottom one is actually traveling the fastest those are not all parallaxing at the same speed  
and my computer is dying because of this recording but it's buttery smooth if you pull it up on your computer the bottom  
one is actually moving the fastest  
and then because this statistic is reused between this component and the media stat block we have our own  
statistic component and inside of here this is a little bit more simple but it does take track of where it renders  
and how it how it renders in on the first load and its sizing and everything like that  
so what we do there is we have that um use intersect hook once again and we say when the threshold is point two we're  
going to use the intersection observer to render or not render and only render if it's above the  
viewport and intersecting so if you're above the viewport if you  
scroll past like if i go up and then down it's going to remember that you were  
above the viewport and it's going to stay there  
and then we will use some simple let's see where am i simple css to size  
and then animate the opacity of the block  
as a scroll as of the statistic as it scrolls down to the screen so you can see we're setting xxl and  
then we're setting xl and then we're setting medium  
pretty cool and then that stat component is going to be used elsewhere like i mentioned  
react really really really really helps us out nowadays like i i think back to the jquery days and  
i don't know how we ever did anything i don't i don't understand it we would have some pretty cool stuff too  
but like just the the lack of reusability and the lack of a component  
based mentality just scares me if i was still having to be a developer with  
jquery okay so the next block we're going to look at is the sticky content block and  
Sticky Content block  
this one's pretty cool you might have seen a concept like this elsewhere online before we didn't necessarily invent it but we've used it to a pretty  
cool extent on this project and what it is is it's going to use position sticky  
from css that's why it's called the sticky slider or the sticky content and when i scroll down this page you can see  
that the principal description on the right is free to scroll away and when the when the new one comes into the  
screen it will turn white and then the principle on the left will cycle and highlight the new principal  
name so it's not scroll jacking it's completely connected to the user's scrolling intent but it's really nice  
and it's a it's a nice little effect there and we're going to build that next  
so as a little refresher the content model for this sticky content block is pretty simple all it is is just an array  
field called sections and there's a label and a description label description  
that's it we've decided that it should always be red because it's so closely connected to the  
color to the to the meaning of the company so there is no background color for this component you could add one if  
you wanted to but right now we're just gonna map over the sections and output the right markup and the right css and we  
should get to where we need to go so if i go to the component  
the first thing we have to do again is import our use intersect this hook as you can see now is becoming  
very useful for us and it's paying dividends in the background in terms of performance because if we didn't have  
intersection observer we would have much less of a performant website good thing  
we do anyway so we have a couple things here we're using the scroll info package that we've talked about before we're  
using intersect as the hook we're setting the active index of which  
item in our array is currently active and then we're setting the position  
of the actual sticky component itself then we're creating a quick viewport  
variable that's based off of the intersection observer so there's not a whole lot of logic in  
this component it's simple in that way we've offloaded most of that to the  
actual use intersect hook but what we're saying here is if we're in  
the viewport and we have the a ref to the wrapper  
then get the bounding client rectangle and store the position of the actual  
sticky bar whatever we want to call that so again if we're in the viewport only  
render it when we need to or only perform this logic when we need to this second if is basically just making  
sure that react has given us a ref to the div below so don't worry about that one too much  
mostly it's just this one as a performance optimization but we're saying yep every time we  
render let's set the position the top and the bottom from the bounding client rectangle and this is built into  
browsers it's not very performing i wish there was a better way to do this but what it what it is is just tells you  
where the div or the element is on the screen and in this case we're using top and bottom which tells you how far away  
from the top and how far away from the bottom we are and we're going to use those in a minute so  
then we go we go out we output our intersection ref to tell us when this is in the viewport or not and  
then we have our sticky ref itself the sticky ref does a different thing the sticky ref is just you'll see that in a  
second so then we have the gutter just like we've done elsewhere we're basically faking the background color by position  
absolute so we're just placing this in the background that's all but the the real magic happens here in  
this well here's the first grid cell this one is going to be responsible for the items  
on the left hand side of the page that are supposed to cycle in and out and then we have another cell below that  
that is responsible for rendering out the descriptions but if we stick with this first cell right here real quick  
this grid is responsible for mapping over the sections and outputting the label  
and this entire cell is going to be translated up  
the label height so for example you can see  
calculate label height times the active index  
times \-1 so it's actually flipped to the negative and what that's going to do is if we go  
over to our mock-up and i zoom out and i go to one of these  
so you can see we have three of these guys right here it's going to basically move it up or down depending on which  
index is active so if it's the first one it's not going to move at all if it's the second one it's going to move up  
like that it's the third one it's going to move up like that so we're just using a transform in a clever way  
and the label height actually comes from let's see  
it comes from here it's defined in the css because what we want to do is we want to make sure that that is  
consistent they all need to have the same height for this to work otherwise our math  
wouldn't work it's kind of like a cheat we could have like read the label heights themselves  
and kept an array of how tall each label is and then rendered that out but in this case it's much easier just to  
constrict the height and make sure that you always know how high the label is  
so we're just calculating that and offsetting it with that label height  
then we render through the sections if the current index is equal to the active index we give it an active label  
class and that's going to let us do the opacity like .01 or one or whatever we  
need to do based on if it's active or inactive and then we skip outside this grid container  
and we have another grid container and the reason is well first we have a gradient to cover up the actual labels  
it's a very subtle look but you can see in this mock up here that there should be a gradient  
above and below the sticky slider to make sure that you're really placing emphasis on the middle one and to give  
it that kind of rolodex kind of feel and look but then we have a completely separate  
grid container and the reason that this is separate is because this whole thing needs to be sticky  
but this one doesn't need to be sticky at all this one's just scrolling content right on the page so we basically have three  
different position layers in this component we have the background which is the first z index  
then we have the principal name which is the second and then we have this which scrolls in  
front of all of the other components as the third and the background color and the principles  
on the left are positioned sticky through the same top level component whereas these ones just scroll naturally  
so it's basically a bunch of things working in concert to fake that that look that we're going for  
now the last tricky part about this is actually toggling the description that should switch from  
light to dark color when it actually enters and exits the appropriate area of the screen  
and remember that we have a lot of different things already stored in state we have the  
position of the actual sticky component the top and the bottom  
and we have the y position the scroll y position  
and we have which element is active and we have is in viewport so with all  
of these different props we can make some pretty good decisions inside of a separate component  
so we call this the description component this one here is going to have a ref to itself  
if it is in the viewport and we have the ref then get the bounding client rectangle  
and we're going to basically use the center of this description to determine if it is inside or outside of  
the red background so we say get the top plus the height divided by 2 and that's  
going to give you the center point vertically inside of each description component  
and then we can say hey if the center position is greater than the root top and the center position is less than the  
root bottom then we know that this one is active and then all we do is just render out  
different styles based on if it's active or not but each one of these descriptions has  
to have a ref to itself and we have to calculate on the center  
because it's possible that multiple could be in the same box at once and we don't want that we only want one to be  
colored white at a time so we're using that center point to do that  
all right i think that's going to do it for the layout blocks that we're actually going  
to go through and build in this series on youtube the rest of them that we skipped over  
like the cta grid media collage content collage media grid stat collage those are basically more of  
the same that you've already seen so if you're interested in any of those and you want us to talk through anything in  
specific then let us know in the github discussions and we will do our best to cover them  
but other than that all of these blocks are also used one  
for one to create the content for the study templates as well  
so they're very reusable in that way you could turn some of these off if you wanted you could add other ones specifically for studies if you wanted  
there's a lot of potential there but i think  
we've done justice to these layout blocks and by now we have a fully functional  
website that you can scroll through and you can see how all those different layout blocks  
work in unison with each other and you can see how it puts a significant amount  
of control into the admins hands because this website is very much not static it  
could be changed updated new new things could be added very very  
far into the future so we have a couple more things to go through yet i'd like to cover the form  
submissions and then we're going to briefly touch on some nice to haves like the background noise and a couple other  
