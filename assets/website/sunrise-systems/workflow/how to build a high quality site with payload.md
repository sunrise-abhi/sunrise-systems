hey youtube my name is james i am a co-founder of payload cms and i also  
operate a design studio called trouble we're seven people we specialize in ux design anything that  
our clients need from a visual perspective all the way through to full stack development and we specialize in react when it comes to  
writing code and what i want to do today is i want to start a new series new video series  
and i want to walk you through how to build a custom website from the lens of a design agency  
and i there's a couple things that can be learned from this process number one like what actually happens behind the  
scenes for a larger scale website or a larger budget website for example  
how do professional designers go about building websites to give the proper amount of control to the  
content editors that will use it on the back end inside of a cms and how do you still make a good  
salary in the web design space through just straightforward content  
marketing websites right i see in the web dev channel a lot the  
web dev subreddit that you know there's designers and developers that pour their hearts and souls into projects for you know little  
small businesses blah blah they say hey is two thousand dollars a good budget for this website and  
for me when i see that there's a lot of like there's a lot of potential for small budget websites like that but  
they probably shouldn't be custom code unless you're very very efficient because i think development is a very rare skill  
set and it's a skill set that should be valued quite highly and it can be valued  
highly in the certain in the right segments of the marketplace  
so for small websites that um you know they anything is going to be sufficient  
maybe three pages four pages whatever and the design doesn't really matter you could use a theme just use squarespace  
use a wordpress site it doesn't matter it'll be fine your job is not in jeopardy as a developer  
because there is a lot more potential outside of that for larger budgets larger scale projects and  
clients that not only appreciate uh and what am i trying to say a deliberate  
design but they also need it there's business reasons behind why they need to pay you for your time and  
your skill to build them something custom and so what i'm going to do is i'm just  
going to walk you through how that's done this is real world work we've already gotten a contract to build this website  
it's not a giant website but there are principles involved that can be applied to websites  
that are a hundred thousand dollars two hundred thousand dollars i've seen it i've sold them it's it's  
totally possible with this kind of approach to design and scale  
large websites for clients that demand exactly a very very specific and  
deliberate design so i hope everybody learns something i i think this is going to be a long  
series i'm going to try to bust through everything as fast as i can but this is going to be the first episode we'll cover getting started  
we'll cover the cms and then we'll move on from there into the front end so  
Project plan & series overview  
all right so let's make it happen like i said this is going to be a real world custom website that is actually going to go to  
production um from trouble and i took out all the real copy i took out everybody's names  
the company's name is now made up i put in the payload logo in the top corner but this is a real project designed by the designers at treble it's  
gone through site mapping wireframing everything like that a couple ui stages we've kind of figured out how to extend evolve  
and apply the existing brand for a company to a new set of ui and now we're there  
so it's time to build it everything that trouble does nowadays is going to be from a layout builder perspective so  
what i mean by that are it's not like um like elementor or anything like wordpress where you get like a  
crazy wysiwyg that's too powerful for its own good no we design very very deliberate  
layout blocks and those layout blocks we then make available to the cms so authors can you know move blocks  
around they can publish pages with whatever they need and by the end of the design phase they're going to have a collection of  
you know 8 to 10 layout building blocks that can be used for a wide variety of content  
and then they can craft the narrative of their site and they can continue to extend it as they need to in the future  
by themselves they don't need to come to the developers and we're not building templates we're just building a system  
it's a design system so that's going to be a big feature of this everything is going to hinge on that layout builder perspective  
and then another thing we're going to be doing is just a simple contact form implementation with payload this is going to be pretty  
straightforward but what we'll do is we'll build a react form handler all the components necessary for a react  
form and we're going to submit form submissions directly to the cms and then we're probably going to write a  
hook to actually fire off an email when a contact form submission comes in  
that we can then send down to the client so there will be a little bit of dynamic um back-end stuff there but  
all in node type script would be pretty cool so then the site also this one in the background  
of my mind the reason that we've taken this tech stack approach is because in the future this website is going to  
support kind of an auth enabled client portal where their clients can log in and consult plans um  
you know do whatever they need to do it'll be kind of like a like a repository for their assets so it  
the ui contains a bunch of really highly polished visual effects and deliberate tactics that we've already  
kind of chosen and we're going to pretty much do the whole thing from scratch so yeah we'll use some off the shelf  
components like maybe a parallax component or you know maybe a collapsible component  
for an accordion style thing but pretty much everything is going to be from scratch in typescript and xjs so you're going to  
see a lot of context you're going to see a custom form be built from scratch you're going to see how  
i would want to build a website in a almost minimal but very sustainable and  
very intentional manner so the tech stack like i said payload's  
going to run everything from the back end and we're going to use this rest api because i know a lot of you probably like graphql a lot and i also like graphql  
but graphql has specific use cases where it shines and in my opinion with kind of like a  
marketing site you already know the content shape that you need on the front end and you kind of design  
the shape of the content right alongside the front end so it's very very very infrequent where you need to kind of  
pick and choose fields that you want to retrieve from the api it's just give me the pages data give me  
the post data and i already know that i need that data because i'm the one that set it up right so this just for simplicity's sake  
more than anything we're going to stick with the payload rest api and we're probably going to use the local api as well because this is  
going to be a next js site but i'll get back to that so react everything's going to be react i'm a big  
fan of next js i prefer that over gatsby personally we're going to try to statically export the entire front end  
of next and it's all going to be in typescript so a lot of you might not have too much  
experience with typescript yet i'm a big fan i think that it um adds a huge layer of basically protection it's like a  
it's like a comfort blanket for me when i write code and um it's really helped our workflow at  
trouble and at with payload payload the whole thing is built in typescript so you get some really nice type hinting as you  
fill out your configs and everything also we're going to be using jss for the css implementation on the front end and i'm  
going to cover a couple quick reasons why we're going to choose jss specifically i like css modules i also have been  
using sas for you know whatever eight years now something's crazy but there's a single problem with css  
modules and with sas that is not easily solvable and you're going to see this you can't  
easily duplicate variables or like share variables that are common from javascript and css in one  
place so i really like the idea of jss because then your your variables your colors your  
breakpoints your you know whatever they're just javascript variables and you can use them in react  
and you can use them in your style sheets exactly the same and i'm not a big fan of the syntax of styled  
components and all the other libraries out there that allow you to do that as of right now my team prefers jss so  
that's what we're going to use next one we're going to go through the project plan really quickly the first  
thing we're going to do is just set up the baseline repo payload has a really nice next.js server  
boilerplate out there that we're going to use to scaffold everything now that one comes with a couple things that we're going to  
strip out like css modules and but it does have a lot of the bare bones stuff that we're going to need  
so i'm probably going to start there then from there we're going to scaffold out the cms we're going to set up our  
content models we're going to set up some simple access control and we're just going to kind of go through the baseline requirements  
we're going to look at the ui we're going to see if we can pull out any you know global data necessary so like a  
mega menu or a footer stuff like that set all that up in the second step and then the third step  
no tailwind here sorry i'm not a fan also no bootstrap or material design  
blah blah get all that stuff far away from me the reason is because as a design agency every single  
site that you build is going to look completely different than the last one by design that's what we're doing we're  
not kind of schlepping out one website after another we are very deliberately designing our  
websites for exactly the client's needs so i'm going to fight against material design  
tailwind i'm going to end up styling it more often than the the help that it's going to provide me and bootstrap i just don't personally  
need it because i like to understand css i like to understand the intricacies of flex and  
css grid everything like that we're going to write it from scratch i hope you can see that it's not as daunting  
just going from scratch and it'll actually probably speed us up and keep our site pretty efficient as well so  
then after we set up the css framework just colors type media queries blah blah we're going to go into the next app and we're going to  
set up all of our top level react providers any type of data fetching dependencies blah blah that we  
need so a lot of that's going to be given to us from the boilerplate that we're going to start with but  
we're still going to have to do some stuff i can tell you that like a trouble we um we maintain a collection  
of ui components it's called faceless ui right now but we're probably going to rename it  
pretty soon and put some time and effort into communicating it nobody knows about it right now it's super helpful for us in there we have  
things like parallax component we have a modal package we have a css grid that is super fancy i really  
really like the css grid that stuff's all going to come from faceless ui  
and that's all going to be set up as providers in the next js app so that's going to happen once we have that we're gonna go on to  
building the header the footer and the page and post structure so just basically the bare bones like let's get a working website  
um one thing that i'm a big fan of when we go through and build custom websites is when you tackle something when you  
when you address one specific part of the project maybe it's the header maybe it's the mega menu maybe  
it's the footer i like to have that part completely  
done tested responsive bulletproof before moving on and the  
reason is because if you leave these little to do's all over your code and you are moving too fast for your own good and  
maybe you just start the header and you move on and then you forget about that one thing that you never fixed  
your your site or your app is going to have a thousand little holes in it that you need to remember to patch  
eventually and if you can say confidently that yes that footer is built it's shiny it works it's perfect  
it's responsive moving on that gives you kind of a mental clarity that you done  
that you don't otherwise have so by the time number five the step number five is done i want the  
header the footer and basic structure to be in place so that we don't have to revisit it  
and that i should have written the mega menu as well for step five so then in step six we're  
going to go through the design and we're going to try to pull out layout building components and we're going to try to identify  
any shared react components that we need to probably build first and then we're  
going to architect the data on the cms side for that as well and then we're going to just stamp through every single layout building  
component one by one with that same mentality that we talked about for the header and the footer you know when you start something  
finish it completely we're gonna do that with every layout building component that we  
identify so a couple baseline background  
strategies that i like to think um oh you know what i talked about number three already so  
we're skipping ahead but number one we're gonna look at the shared components you're gonna see when we pull  
up the ui shortly here that some of these shared components are going to be used in multiple layout building blocks  
and they're going to need to be centralized and they're going to need to be reusable and that's what react is great  
for right but you still have to be intentional about your project setup and you still have to  
have logical separation of concerns so if you have like a graphic element here um and it there's a similar use of a  
similar graphic element over there can you build one component and adjust it with props to do the same so we're going to just take a sweep  
through the whole ui and try to identify any of those components that we can build separately and then we're going to  
do that so all shared components should be easily reusable  
even if that's kind of coupled to the cms as like a layout block it should be reusable and it should be  
usable inside other layout building blocks blah blah yeah so cool that's it  
so i really don't know how many episodes this is going to be i have no clue we do have about 120  
hours total dev time budgeted for this site it's a kind of a medium budget for us i would say on the  
smaller side it's not a complex website really there's just a couple pages they are going to be dynamic  
for the sake of brevity we have removed a lot of the harder components to build from the actual website that's going to  
launch just trying to get down like i'm going to show you what you need to know but we're not going to drag you through the weeds so  
i'm going to try to do maybe a two or three hour episode for each one uh probably going to be hard to do that  
i'm going to have to fly so i'm definitely not going to end up with 40 episodes i can tell you that  
ideally it's going to be about five but i'm really i'm honestly going to try to show as much as possible  
going to try to cut as little as possible and let's make it happen  
Design review  
all right let's take a look at the ui real quick this is um the the real company is kind of a  
construction architecture firm that is a little bit younger a little bit more dynamic  
but i'm um we've completely kind of anonymized everything so as you can see this  
this is not the real content that's the payload logo up there blah blah the background of the site is kind of  
like an antique white it's not stark white which we think could be pretty cool and a little bit different um  
but the the color palette here is red gray kind of that antique scrolling through  
here this is the home page we use figma for everything on the treble side  
and figma is a really great tool especially with covid being remote we can all jump in the same file and screw  
around i'll just take a quick zoom out and show you kind of the different page layouts here  
going through this is this is our this is our battle plan these are our marching orders um this is the desktop view we also have  
mobile views on a different page generally what we'll do is we'll scaffold out um everything a working prototype and just  
kind of keep them nicely and organized on separate pages so like if i click on home hit play  
you can see clicking out here figma gives you nice prototyping tools so i can click open up the mega menu i can  
see what things are all clickable when we actually build this i want this kind of like little circle  
deal here to be permanently spinning kind of around the let's talk call to action there but um quickly  
scrolling down here maybe a secondary headline just maybe some way for the cms to add  
emphasis to certain words to maybe animate the color as it scrolls into the viewport draw the line below  
blah blah the client kind of communicated that they were looking for a color blocked approach  
which i mean typically on the web you see these these websites off the shelf wordpress websites that have like  
you know you've got the hero the full screen image and then you've got you know a stripe of color and then you scroll down you got another stripe of color and you  
got another one blah blah we wanted to take cues from that but we wanted to modernize it so you can see we  
kept this gutter throughout the whole website and it's we do have the color blocks approach that the client is looking for  
but it's in a nice modern way and as i scroll through here you know this first block could be red  
the the brand red maybe there's a question here just a very bold dynamic very clear  
message there's a question and then there's the answer and keeps growing maybe we have we  
toggle to a different brand color and this one's kind of like a light blue it's kind of like a sky blue  
the red it creates a little vibration but it does draw your eye there so maybe that's like a strong message there  
and then here we have maybe some statistics that say that reinforce the process of this company so  
a little bit of narrative like we're talking but now we're going to connect it back to the proof and so you can see the maybe 17  
project cost reduction it takes seven weeks time saved blah blah blah material these are all fake but it could be pretty cool  
and we might take a break with some full screen photography maybe we're going to have a cool little effect there  
get back into another brand color which i really actually like how this looks some of you are  
probably going to hate it but i don't care i think it's cool so the black with that kind of orange  
the nice looking color there and then the images this is about the team so these might be  
parallaxing a little bit click that button takes you to the team page blah blah everybody knows  
so the sliders are a little bit um more abstract than what might well there's an image missing there i'll  
fix that maybe as you hover over you get a nice big circle kind of connecting back to the stat circles above  
you can drag i really one of the slight all of the sliders in this site are going to be free scrolling  
completely so if the user is on a track pad they can have full control just scrolling just like you do  
vertically but left and right as well i think that's a pretty nice ux feature to have but you could also click and drag if you wanted  
and then that's it for the home page you get down to the bottom and the footer kind of it's it keeps that gutter on the right  
hand side nice back to the top button there and then we repeat the start of project consult with us let's just chat blah  
blah blah big nice cta in the footer there that's omnipresent so going over to the menu i'll just fly through a couple  
of these pages now i did note that a couple very complex components were omitted  
from this design for the sake of speed and simplicity we had some svg animations going on and  
we removed all that just because we want to focus in this video so this page is actually going to be a lot longer  
with the real clients website but here we're going to have a sticky this will be position sticky and so as you  
scroll you can see the principle description that's going to scroll vertically away but the next one is going to scroll in  
and then you can barely see but these are a little translucent in the background those are going to be um kind of fading  
in and out it'll be kind of like a rolodex there and so as you scroll the principles will scroll in and be highlighted there  
what are the results big huge headline reuse those stat circles that we've seen elsewhere and  
have some parallax images these probably would be about projects in the end these are all just  
stock photos on splash blah blah but um these are going to be actual images from completed projects by this  
company so then we've got a call to action nice bold dynamic clear unobtrusive keep going  
another hero style here so you can see a little bit of hero variety a couple floated uh oh floated that ages  
me display flex or css grid columns  
then we reuse the jump list component this time for team values rather than company principles  
and then we have a block for the team so you can see everybody's picture their names they're a relatively small company  
i think they have maybe six to ten employees so this this layout will suit that allow for a little bit of  
room to grow uh the cards might parallax a little bit and then we have maybe a full screen  
image to show the team out you know at lunch or something just kind of give a little color there and then we have a  
slider component reused you can see this is the same one as the home page so ideally there will be a low common  
denominator react component that is able to be used and reused as necessary and then  
this would just be kind of like a little gallery of the team then we have maybe some open positions that link out to other pages  
and footer now the last thing i'm going pretty quick i know the last thing is the studies here  
this is uh case studies it could be you know portfolio it could be projects blah blah  
the thing about this company though is that they want to highlight very specific differences in their approach versus  
other companies so this isn't necessarily going to be hey look we built this building  
it could be more hey thanks to our process we actually saved  
a couple construction related problems from actually happening because  
we were looking at it from both sides of the table right so these might be a little bit more involved we're going to call them  
studies they're each going to have like this first study here it's going to be a nice organic layout a thick  
hr through the the middle of the um first project and the second project we keep going  
the layout here is different so the image collage is you can see that it's intentionally  
different for every single one this one has a photo above the headline keep it visually interesting  
keep going they all might parallax a little bit and then a nice big navigation down there and then moving in  
each study will be specifically written and crafted from layout building components so we might have some  
some metadata here a quick image about the the project itself and then we scroll down this is kind of longer  
format writing here but maybe we have just a small image maybe we have another slider that was  
shared from the about who we are paige maybe i don't  
even remember um anyway keep going stat circles the perfect application would be kind of  
the proof is in the pudding style thing here uh image gallery next case study treated  
nicely down at the bottom and then we can go to the contact page contact page is pretty straightforward  
we have like a little letter over here that someone could actually just click into and start editing it so you might want to replace  
your name and the company and blah blah call it a day hit send send them a contact  
and i believe that's it for the design so that's kind of what we're going to be building the next step is to pull it up  
in figma and start evaluating which layout building components we're  
going to want to use and just kind of put together a baseline strategy like i mentioned the slider down here  
let me see this slider has a lot of common denominators with a couple of the other sliders so  
that's a good example of something that we're going to need to build in a reusable way thank you react and then apply it within  
different contexts so this one's just an image you know we might even allow for the different widths of the image because  
you can see here this one's almost like a three by four and then ratio and then this one is more of a  
portrait orientation so we're going to need to plan for those there's actual text here these are going to be linkable to the  
projects or to the studies but over here these aren't going to be linkable they're not they're not going  
to go anywhere if you click them so a couple pieces like that we'll be  
able to pull out but yeah so that's the design let's uh see what we got next  
Payload introduction  
all right so for those of you that have never heard of payload before this is the cms that i've  
mentioned a few times already that we're going to be using to power the back end of the new website  
we're building it is self-hosted it's headless it's fully javascript it uses a mongodb  
on the back end and it's built on top of express so you actually get to provide it with  
your express server you don't you don't have to do things the payload way one of the big reasons why we built  
payload is because we wanted to make sure that we're not introducing any abstractions of our own  
we want it to be as closely coupled to javascript as possible so that means you don't  
learn how to write payload really you're just learning javascript skills that can be applied  
even if you're not using payload in a project you should you as a developer working with node working with react  
you should be learning a few things on your own you should learn express you should know about express you should be able to write request handlers  
be able to open up your own endpoints be able to handle whatever you need on the on the node  
side and you should be able to interface with mongodb on a very baseline level  
so we're not trying to build our own crazy abstractions here this is just as  
simple javascript as possible it's all config based payload is really cool it's turned out really really well the community's  
reception so far has been great right now it's uh march 20th we launched january  
6th or something like that and if you're new to it there's a blog post that talks about kind of why we built it  
i think you should check this out there's a lot of good information in here um self-hosted is a big one for us i'm not  
a big fan of surrendering all of this functionality into a black box cms that  
you don't really have any visibility into like yeah that sounds great i mean if it's seriously just content  
then yeah cool use a third-party cms and have them manage your content for you the problem is as soon as you get that  
one thing that your cms doesn't need boom you got to have an express server you got to have a lambda function you got to do it yourself  
that's a huge racket and so every single time we build websites we  
pretty much hate that we have a cms somewhere and then we need to stand up our own express server somewhere else  
just for a couple little things no that's not how it should be done the cms should be on your express server so  
if you need to open up your own routes if you need to do your own things you already have all that infrastructure set up it's got a customizable react  
admin panel you can add your own field types you can replace views you can swap out input components with your own you can add  
color pickers you know whatever you want markdown editors blah blah  
it's really minimal it's clean it's beautiful everything is there's a block-based field editor in  
payload which is super powerful that's what we're going to use to power our layout building type approach here conditional logic for  
those of you that are familiar with advanced custom fields in the wordpress world one they do a lot of stuff right  
i'm a big fan i've been using it for i mean if you're using wordpress you should be using advanced custom fields  
but there's a problem it's still wordpress have you ever looked at the database shape that advanced custom fields  
pushes on you there's wp posts and there's wp post meta all of your fields are just saved into  
post meta that's crazy that's that's not the way to scaffold out a database that's very clearly putting  
lipstick on a pig even though it works it's not the way to do things but they do things right like for  
example advanced custom fields conditional logic is a beautiful thing imagine like clicking a checkbox that  
says enable button and then boom your button fields pop up they weren't there by default if that checkbox isn't checked but as soon as  
you click that checkbox boom here's some new fields it can give you the ability to make a dynamic admin interface and we're  
definitely going to be relying on that big time it's beautifully simple with payload it's all javascript i think  
you're going to like it everything in payload is javascript a good thing about payload is that it  
comes with reusable authentication so if you're using content folder if you're using prismic or whatever  
any of these third-party apis you can log into the cms you can edit  
the cms but what happens if you need to build out like a sas app or something or  
what happens if you need to have ecommerce where customers have order history blah blah blah they need  
to log in too so what are you going to do if you use contentful you're going to have to roll that yourself but with payload you can reuse payload's  
built-in authentication and extend it you can have different collections that each function differently so you could  
have like a customer's collection where your customers get to log in they get to reset their password they get to verify  
their accounts and then you can have an admins collection which is actually who gets allowed to edit content  
or you can just have a one user's collection with different roles and access patterns but it is completely open-ended and it  
is a beautiful thing payload gives you all of this and it is very easy to  
build very custom apps with payload it's not just a content management system it actually kind of borders more on an  
application framework another big thing with payload is that it's very secure  
other cms out there i'm not going to name any names but they actually don't even use http  
only cookies for their off that's a huge security concern because cross-site scripting is a very very  
serious vulnerability with any authentication pattern and if you're just saving a cookie that's readable  
via javascript then you're vulnerable to cross-site scripting and so http only cookies are a very very  
solid way to protect against that and payload is built with that written so users can register themselves  
there's typical login and log out refresh token routes there's forgot password there are security measures  
built in like automatically locking accounts on five failed login attempts whatever  
email verification blah blah access control you can have a fine grain control over who can do what with your  
data right in payload it's all function based it's super cool uploads local storage when you upload a  
file to payload it actually gets saved locally on your server rather than going off to cloud an area  
or some third-party place that bam you need another subscription for right no payload  
saves it all on your own server it's all fully code based as a developer i don't really benefit  
from scaffolding my models out with an interface i write them in code i check them into my repo  
so that when i push code my team can pull it and boom they have the exact same  
code that i have they have the exact same content models that i have it's not saved in the database it's saved in code  
like i said earlier you get to maintain your own express server blah blah blah everything is localization friendly so  
you can maintain as many locales as you need it's all on a field basis blah blah blah blah i don't really want  
to push this i love it this tutorial is not really about why you should use payload but  
you can check into that yourself i'm a big believer that you shouldn't need to learn your cms  
wordpress is literally miserable for this when you work with wordpress you have to learn all these stupid  
conventions like get posts and wp query and all this nonsense that does  
not do you any good outside of wordpress as a developer you can spend a year learning  
wordpress and your development career has only benefited within the wordpress realm  
but with payload every minute that you put into writing payload code you should be actually extending your  
career extending your skill set as a developer another thing you don't fight your cms  
oftentimes it feels like with frameworks you get like 70 what you need and then for the last couple months you're just  
fighting it over and over and over you're fighting against the framework and that's a big pattern that payload tries to avoid so check this blog post  
out for more information it's on the website payloadcms.com but we're going to get started we're  
going to actually scaffold out payload and if i go over to github.com  
payload cms you can see that we have a next js custom server repo it's a it's a  
Payload \+ NextJS boilerplate setup  
template which is really cool i actually um just found out about github's templates but they're super  
cool you can actually just click this one button here and it can create a repo for you based  
on this template it's like a boilerplate but it's built right into github so i'm going to click this and  
because i'm going to make this code open source for everyone i'm going to put it right on payload cms's account and i'm going to call it  
let's say custom website custom design website what should we  
call it custom website series  
the code that supports the custom  
cool so i'm literally making this up as i go that's fun um  
bam all right all right all right cool bam done now this boiler plate i want to  
take you through a couple things because there are some important parts of this boiler plate in specific that might not  
be best for your use case now i know in the end the website is for a client  
that is very region specific they're going to be working in the midwest of the united states most of their traffic is going to come  
to a server that it's fine if the server is in new york we're not going to get a lot of chinese people we're not going to get a lot of  
australians we're not going to get a lot of europeans pretty much this site is for the northeast region of the united states so  
i don't like to overbuild things i actually want to deploy simply i don't want to i don't i mean  
you could maintain a separate front end on netlify and run your back end on digitalocean or whatever but this boilerplate is good  
for if you want to do everything in one server so i'm going to deploy eventually to digitalocean  
and that will be the only server that i need i'll deploy there to one droplet and  
that droplet will maintain the cms it will maintain all the media files it will maintain the  
front end of the website itself and you know in the future if we're getting a ton of traffic then we can put a cdn in front of it  
like cloudflare or something to balance that out but in reality i don't even think that's going to be necessary for the traffic levels that this is  
going to get so this site this this pattern is good for some situations but  
if you're going to be serving your website to people all over the world and you expect thousands and thousands maybe hundreds  
of thousands of page hits then you should probably be deploying it statically to something like netlify or  
to an s3 bucket where you're going to maintain that speed no matter who's connecting  
no matter how many people are downloading your website so this is not good for everybody but for us it's good it's a pretty simple  
installation guide we're going to clone it down we're going to set up our env file we're  
going to customize our env file so that it describes our environment we're going to yarn we're going to dev  
and we're going to be able to pull it up on our local computer so then serving in production you just  
build and then serve you can read this a little bit more if you want i'll put the link in the description  
but yeah so that's pretty cool i just created this repo it's all good to go so then i can just  
click this i can copy the the ssh url  
and then i can hop over to my terminal and git clone bam  
cd custom website series and there we go there's our code  
let me zoom in one more time here all right so we've got a copy of all this code here  
i'm just in the terminal for mac os nothing fancy i'm going to be using vs code and i'm  
going to be using just a straight up terminal and i like to use osx spaces so i'm going to go  
back and forth once in a while like this hopefully it doesn't make you puke it's  
fine for me so buckle up anyway so let's go read those instructions again let's say  
the first step would be cloned down we did that we need to copy the env example over to the env file so i'm  
going to go to my terminal and there's the env example right there  
i'm going to say cp.env.example.com and then we're going to say env and then  
we're going to nano.env you can use vim if you want but yeah i'm not that guy so cool  
the first thing we need to do is enter in a payload secret key so i'm going to get rid of this and i'm just going to smash the keyboard because this is only  
for my local machine in production it'll be a different one but this secret key is used to generate it's used in  
cryptography to make sure that your user's passwords are secure their verifications reset passwords are secure  
blah blah so it just needs to be a long and un-guessable string that's good smash your keyboard have fun so the url i've already  
got running on my local computer so you can see this url is pointing to localhost  
i'm probably just gonna say something like uh what did i call this thing  
custom website series custom website series and then the server url we're  
just going to keep that default on 3000\. so the payload license this is one that i want to take note of really quickly  
the payload license there's a free tier there's a teams tier and there's a pro tier we're going  
to keep it on the free tier for this site but i'm going to hop over to payload.com and  
just cms.com and show you some of these pricing models the free is good for if it's just you  
if it's only going to be one person accessing the admin panel it's only the admin panel as many people  
as one as you want can access your data through the api you can have as many different apps pulling the data as you want but when  
you log in you can only log in with one user on the dashboard  
with teams you can do five admin panel users and you get to support staging domains so if you want to  
deploy to like stage.project.com or whatever you get your license will include that  
ability as well and then pro is unlimited admin panel users which could be good if you actually want to send your customers to the payload  
dashboard because the payload dashboard responds to access control dynamically you could you could utilize  
the exact payload admin panel for people managing their own account their you know they could view their order  
history you could do all these things so the pro license will allow you to have all of your customers use the admin  
panel as well there's no security concerns there if you set up your access control properly  
but one important note with payload is that you can just download it and get going on localhost completely without a license you don't  
need an account you don't need anything only when you go to a production domain that is visible on the internet  
is when you need a license so we don't even need to do any of this right now so i'm just going to get rid of that  
cool save it get out and then i believe the next step is yarn let's check  
yep i use yarn you can use npm install if you want okay so i skipped forward a little bit  
uh took a little break and now that yarn is done we can run yarn dev  
and get everything fired up and i also pulled up the vs code on the the project in vs code so i've  
got over here um this is all the files that come just straight out of the gate from the boilerplate i'm not going to talk too much about  
that right now just because um that's not what this series is about but you can read a little bit more into  
that there's a blog post on the payload website that talks about this boilerplate in depth so if you go to the blog click  
on this one this one's going to tell you about kind of the ideas behind it here so  
you can read that if you're interested but for now we're going to get back to actually getting this thing up and running so i  
ran yarndev and everything should be up and running in the browser right now so if i hop over to my chrome and open up a new  
tab and go to localhost 3000 and slash admin is the base the default url to get to  
the admin panel itself so if i go there it's going to ask me to create a first user so i'm just going to go real quick  
i'll say well let's do payload and let's say yeah local password  
strength doesn't really matter and this is the boilerplate again so we've already got pages we've already got media we've already got users  
media is an upload enabled collection we're actually going to use that for this upcoming site  
users we're going to leave that as is as well and pages are going to be the the meat and potatoes of this project  
so if i create a page real quick and i say let's say home and let's add a block so  
here's our layout builder this is something that i mentioned briefly before but the whole site's going to be built on this layout builder  
mentality and that that boilerplate actually gives you what you need to get going on that so i'm  
going to start this page the home page's layout just with some content here let's say hello big bird and give it a name  
intro content neat all right cool and then i'm going to save it boom  
payload hook automatically gave me a slug over here if you saw that but i can go here look at the data shape  
and bam perfect this is the rest api response for this individual page by id and then  
if i go to the front end i can see that next.js will take over and it will render  
my content nice we want to scaffold the cms first before  
CMS scaffolding (form submissions, studies, shared Payload fields, etc.)  
working on the css framework i think that's a pretty good idea so let's continue down the cms rabbit  
hole first before getting to the cmm or the css and for that we're going to need to look  
over here again so here's our ux and we've got we know we  
have pages we know that the pages are going to need title slug layout all that stuff we pretty much already have most of that  
before going into the layout building blocks let's see if we need anything else so we've got studies and we've got  
contact submissions so why don't we create those collections and register them to payload real quick  
we'll start by the contact form so what does this do this is going to create a form submission  
so we might call it form submissions and let's say it's got a message and it's  
got an email it's got a from right so when someone submits this it's going to send the message and it's going to send the  
from so let's go over to our code and let's go our collections folder we're going to create a new collection  
called form submissions dot ts and then we're going to say  
import collection config from payload types  
that's just the type so um it's going to help us with autocomplete and intellisense we say cons form submission  
collection config equals an object we're going to say slug  
that's not good that's the url friendly name for this  
and then we're going to say fields and we're going to have oh this is an array  
we're gonna have let's say type text name  
email or from yeah from  
okay and then the next one is gonna be type message nope type text area name  
message label message cool  
cool and i notice that these are all singular so i'm going to rename this to form submission all right exporting that  
now this is all we need to create a new collection for payload and all we  
need now is to just import it into our top level config and then assign it to our  
collections array on line 10 there so import form submission can i get that to auto import  
no cool and then we add it here  
and now i can go yarn dev and we should have a new collection  
pretty cool because this is where all these submissions are going to be stored as  
people submit requests to the website i mean hey it'd be cool if we could save them right  
so that's what we're going to do  
refresh wait for it to load yep there we go form submissions bam  
from email message we probably also need to say like source some way like in case this  
company needs to have more than one contact form some way to identify that it came from  
x page or blah blah so let's add another field type text name  
source label source and we're going to put this one in the sidebar so admin position  
sidebar back over here and boom we got another  
field called source and this one can probably just be well these all can probably be read only  
right because there's no reason for anybody to change these so i'm going to add that to all of these  
and we're going to say that  
cool so what that's going to do is this doesn't change the api side but the read only flag will prevent  
admins from thinking that they can edit these fields because they really shouldn't be editing them so  
if i test test boom now they're all grayed out and there you go there's no point to editing a form  
submission all right so that's pretty cool now we need to create another collection for  
the studies right and if we go look at what a study entails it's got some meta here  
it's got let's just fill this out client let's say location  
and maybe services that they were provided with so  
from here we've got a title we've got a featured image we've got these three pieces of meta  
we've got the layout itself the content the meat of the post and that's it so all we need to do  
is yeah craft that out just like we just did for the form submissions we can create a new  
file and call it studies whoops wrong window  
cool and this should be study i don't know why i can't get that right  
wow  
name title put that one on required true  
and then we do need a slug so we can probably copy the exact slug generation mechanism as we have on  
our pages this came from the boilerplate this is super cool it uses payload field hooks  
to generate a slug programmatically based from the title and what that does is just removes any  
special characters replaces spaces with dashes lower cases blah blah so we can use this exact same field  
and at this point i kind of want to abstract that into another file because we're going to be sharing it so let's say  
let's make a new folder and let's call it fields whoops how do i make a new folder on the top  
level here seems like a stupid thing to be able to not know how to do  
okay we're doing it in the finder  
so just called it fields and we're going to make a new file called slug.ts  
okay we need to import format slug  
boom i will figure what this is later  
super annoying okay so we've got this field being exported here now in our page we  
can remove everything and just say slug move that  
and import slug from boom  
oop and i think i need to type that properly huh so i need to import  
like that and now nobody's mad  
cool so then over on the studies i can pull in slug  
okay and go to our payload config and pull that in  
now these are in order of like this array here it's in the order that it will appear on  
the dashboard in the sidebar so it's important to keep that um this this order should be very  
intentional for you this should be called study cool  
and we're good to go so now if i go and restart should be able to pull everything up in  
the browser and have our pretty much the shape of the data that we need and then from there oh you know one  
thing we're going to need to do is add i think there's a filter yeah these these filters here so these are like  
almost categories for the studies themselves and maybe there could be some overlap these categories with the services here  
so i think what we'll do is we'll call we'll make a new collection called study  
categories or maybe just categories i think categories is sufficient for this site so one more collection  
and because i'm sick of writing this we can just copy that and paste it here  
still probably should have a slug there cool  
done  
so just like that we've got everything we need  
and i think what we can do now is start to plan for well we should finish the fields for  
the study right so we have a client we have a location these services will be populated there should be a relationship to the  
categories so let's pop over back to that study  
say  
we'll say admin position sidebar this probably doesn't need to be  
required maybe they want to opt in and out of that one so we're going to leave that as not required  
but we do need location as well  
okay and these are going to need that that's the same meta that the pages  
already had i think that came from the boilerplate if we scroll all the way down we've got  
this meta group here that's a perfect candidate to snack out and put into a shared field again so i'm going  
to go like that we're going to say meta  
okay and we do need to type this as a field  
cool god  
that typescript error will go away perfect boom  
go into the study add the meta  
boom so we have meta we have the title we have the slug featured image we need  
that and i think there was an example for that on the page yep image right there boom so there's a  
there's a field type and payload called upload and it's going to give you a really nice ui it's basically a glorified relationship field  
all you're doing is saying hey this page has a relationship to this media but this one that's going to give us a  
better ui to choose the relationship so i'm going to go back over to study and i'm going to say featured image  
up here from the wordpress days nope is image descriptive enough no  
we're gonna call it like that relation to media type upload boom perfect this probably should be  
required just like the title because what would it what good would that case study be if it didn't have a featured image right  
we're going to probably want to show those in sliders blah blah but our page doesn't need this anymore  
so now we need to add the link to the category so that's going  
to be categories and we're going to say label  
relationship relation to typescript is yelling at me it's  
beautiful because if you have a relationship field it needs a type it needs a relation too  
that's a required field  
and we're going to say has many is true now what that's going to do is it's going to allow us to assign multiple  
categories  
okay so go back over here what else do we have is that it we've  
got the client we've got the location i think i blacked out yep perfect  
cool she'll do oh one cool thing about payload is that it has global support so not  
everything is a collection so we should probably scaffold out this footer in this header as well  
well i guess there's not much in the header it would just mostly be the mega menu but this control will have to go  
somewhere as well so we will get back to that shortly  
okay everything compiled hop over here refresh take a look at our  
cms so we have categories form submissions studies  
nice ui already made it's pretty cool the the payload dashboard is it's gonna  
get better and better with time too but already it's quite advanced like we can really nicely  
define ooh page slug that's not good let's just rename that to slug in that shared field  
cool kind of getting our data along i'm  
feeling good probably going to start drinking pretty  
soon celebrate all right i think this is all looking good what i'm trying  
to do is just cover the all the different content models so when we get to the layout building blocks we  
we feel good about all this other stuff already being done oh page meta that's not good  
okay  
looks good to me all right moving right along next up  
The first layout building block \- Content  
we're gonna start the layout blocks and i've just i've had this thought in the back of my head this  
whole time looking at these mock-ups that so if we scroll through i'm trying to  
pull out a low common denominator that could be used in many cases so this is just a pretty much  
straightforward rich text editor right and maybe this is what is this styled as an  
h3 and figma so if this is an h3 we go down is this rich text as well  
maybe just with an alignment and maybe with like some type of flag to pull emphasis off to the right or left  
you know and then is this this is also could be rich text right here  
this could also be rich text what if we could build like a column system with rich text so that all of this was just  
totally basically i mean like think if you have a couple rich text editors and you can  
arrange them in columns that would give us the ability to do all this  
i mean borrowing the background colors because i'll get back to that in a minute i'm just looking at like the very baseline functions that we need this  
could be a specific component as well but this one same thing and then let's  
go on some other pages real quick this is this is definitely a different  
component not rich text this could definitely be rich text centered alignment again  
maybe that might be another component too we'll see  
so we have these two two column layouts here  
i don't know i think i think what we should do is our base content layout building  
component should be like built on a column system so  
let's see if i can write better than talk so let's go over here and what i'm going  
to do is go to our blocks folder we have content right now and you saw that i already  
used that on the home page so if i go back to the browser and i just pull up localhost 3000  
you'll see that this is already a thing right hello big bird i wrote that a couple places  
i'm going to cannibalize this block and i'm going to turn it into something a little bit more  
powerful so what if this was an array of content and  
on each one of those content fields you had a control to set how wide like the column is  
so let's say let's say columns and it's not rich text it's  
array min rows of one  
and then fields here's where you have content  
okay  
okay and  
in addition to this what if we could set the content to set the the width of that column so let's say  
name width  
say  
okay  
okay  
and then full right  
okay so if let's set a default value here  
okay and what if you could control i mean you just select the width and then use you have  
your content here and then on the front end we can just loop over this array and dynamically create columns based on  
what the cms has said so this is like a base base block right but it could be very  
flexible and very powerful if we could set it up like this so what else we're going to need we're gonna need alignment didn't we say  
alignment yeah so most of these are all gonna be left  
we that means we could probably put the alignment field right next to the width so if i said  
should we have a select yeah  
okay default value  
required just like this one  
let's put these two into a row  
okay so we have a row with width and alignment these two can be both set to 50  
wide  
cool let's see what that looks like in the admin panel  
okay so i restarted the server and here we go we've got our full width that's perfect we've got our alignment and we've got  
our content and i'm going to update the labels so this should say column here but that's not bad because then we can  
have like half this one can be right blah blah  
here is a right hand quote here is a left hand  
cool so then in the react side we can map these columns to react columns and set their  
props up as necessary pretty cool shape of the data nice and easy  
here's the layout here's the content block we could give this prop columns right to a react component each  
column can have its own settings and its own content feeling good  
so i think our content is going to get a little bit more descriptive here we probably are going  
to need to provide for padding and margin on the top and bottom so if we go down all the way to the  
bottom and we say let's give ourselves a row  
let's say the first one is padding top  
this is a select  
options  
okay and large let's say  
and then the other field here will be padding bottom  
let's just see how far that gets us because we could probably recreate this  
this would have padding top and bottom of medium this one this if we just imagine this  
being a block right here maybe split the difference there so this  
is our block right here and all it is is padding top is large  
padding bottom let's say small then this one we're going to have a background color as well that's the trick  
so the background color can make it look like things are seamless uh we will need the space  
though here so this is we'll probably need to have some type of spacer we could add a spacer layout  
building component though that would be cool all right so i think we're getting there  
so we need background color  
so underneath the padding maybe we can say background color at the top  
i'm losing it  
okay and then now let's do this as a radio let's spell the options out  
could probably give this a nice custom component in the future and make it look a little bit nicer but we're fine for now oh we need a um none  
option okay and we're going to set this to  
admin layout  
horizontal cool  
all right let's build that spacer component out real quick because otherwise these would  
butt up next to each other  
new folder spacer  
let's say need that  
okay buddy  
sorry my dog is on constant patrol  
all right what kind of fields do we need for the spacer we could probably say size  
and then this would be type radio and then let's go copy the options from  
here so i don't have to type that okay so server is restarted  
we have our new spacer block available to us and at this point i want to just kind of stress test our content model  
and see if we can accurately replicate the data that we think we're going to need to create  
everything from the hero down we're going to get back to the hero maybe we'll do that in the next video  
but for now i want to make sure we can create this and i want to make sure we can create this  
this and we'll get all the way down to maybe these these bubbles here so  
first thing our first back our first piece of content is intro  
let's say sub headline and there's no background color  
this will be full width it will be left aligned we don't need this one anymore and let's just go copy that content  
and this was set at an h3 okay so we've got that one that one  
works don't need the accent line padding top and padding bottom will be medium  
before i forget i'm going to set those as the default values  
okay  
the next block will be another content black but this one's going to be a red  
background and it's going to have the first row will be full width it will be left aligned  
and we have what do we have here  
okay we got a couple pieces of text quick question intro  
let's set that equal to an h5 let's say hit enter and then we have let's say an h2  
let's copy that content  
h3 okay add a row oh this is half width  
question and then outside of this okay this one needs large padding top and  
small padding bottom and then we add another block for  
content this one's also background color red answer and then we can give this one  
half align right  
and we can say  
perfect padding top is small padding bottom is large save it  
and this is enable and this is right and this one is enable and this one's  
left okay so all of that is good  
Globals configuration (mega menu, footer, social media)  
okay so next up we we've got all of our content models defined everything is all good there um but we  
still have to figure out how to give control to the admin panel for the mega menu and for the footer structure  
so in case the company needs to go in and update the menu structures blah blah we need a provision for that so there's  
a built-in function of payload called globals and that is pretty similar to collections  
but it's just for one-off data like you're never going to have many mega menus or in this case we're not  
you're not going to have many footers so it doesn't really make sense to build a  
collection with fields for the footer it doesn't really make sense to build a collection for fields with the mega menu  
because there is only ever going to be one document in each so payload gives you globals and we're  
going to make a global we're going to start with one for the mega menu and then we're going to build the footer  
as well so the boilerplate didn't actually come with any  
any globals but we can easily add them so i'm going to have to open up the finder again and whoops  
create a new folder someone can tell me how to do that from vs code that would be great i'm  
stupid anyway so here we go we got a globals folder and in here we're going to say  
mega menu right we'll just say  
ts and we'll say import global config from payload config now  
types and then we're going to say const mega menu global config  
and you can see this typescript intellisense over here shows you what's possible really all we're going to need is the  
slug it's a required field and then the fields themselves so i will go like this and then say slug is mega  
menu let's say fields  
and what do we need what does the data what does the mockup look like so it's pretty much just this right here  
right it might make sense because the social media is shared in the footer and the mega menu like  
that could be another global in and of itself that's just a quick array of like url and name  
right so um because this is the exact same as what's shown in the footer down here  
so yeah let's plan on having that be um elsewhere so really what we need to build is man i  
should zoom out but i am stubborn all right so these links right here it might seem like  
there are relationships to pages but what happens if they need like a link to send somewhere else like uh like an  
external link so it's not going to be that simple we have to provision probably in the cms a way so that they  
can choose a page to link to or they could set it up so that it opens in a new tab  
and points to an external url right so that's what we're going to try to figure out from the data side  
right now we know it's got to be an array we can probably put um sensible min and max probably just max  
really um lengths on there so let's go over and what we're going to do is we're  
going to give ourselves a field of what is that called main nav name  
nav label navigation and we're going to say  
type is array and fields  
here's where we got to get smart because we're not smart yet  
so like i said this could either be it could point to a page or it could  
point to like you need a url field right so um in any case we know we're probably gonna  
need like a label uh no i guess if it was the page we could pull in the page title that might be stupid and we also might  
want to link potentially to studies in the future as well right so if we want to link to a  
study or down the road you know there could be other things like projects where maybe the project doesn't necessarily  
have a title maybe it just has like the the address so i don't think we can just  
dynamically pull the title for the name so i would say the common fields we're going to need to have some  
like like the label for the navigation button so what we'll say the first is name label  
whoops whoa text required true  
and we need a label for the label  
and now this that's self-explanatory enough so the next thing we will say  
name is type so this is the type of navigation item  
and it can either be a relationship to a page a relationship to a study or  
a custom url so this will be a radio let's say a radio button so type is radio  
and we are going to do options label  
you can say custom url  
value is custom and then the next one is going to be  
page or should we just say relationship  
no we need to know what kind of data it is because the url structure on the front end is going to be different so  
if it's a page great but and you know what we can add this the study links later because i know we  
don't need those right now this this approach will provision for that just fine once we get there in the future so let's  
just say these are our two options right now radio fields have an interesting thing in payload you can do admin  
layout horizontal which is also able to be done in acf but  
it just puts the radio buttons next to each other rather than lists them out and that's pretty nice  
it's a space-saving technique in the actual admin panel and it gives you a nice layout to edit your data so  
now we've got type we've got label and here's where we're going to get into some fancy stuff i'm going to set up a group  
how can i do this because if you give a pager relationship  
if you choose page then you need to show like a relationship field to pages if you choose  
custom then you need to show two fields you need to show url and open a new tab  
probably i would say do we want to do that i guess that's not important right now  
so let's say let's just start keep typing so name is page  
label is page and it will just be more descriptive to link to  
type is relationship  
relation to pages that's the slug of the pages collection  
and they'll be required and then on the other hand we're going to have custom url  
so we will say url  
text that's not relevant anymore okay so now i mentioned this briefly  
early on but there's a thing called conditional logic that payload supports and we're going to write conditional logic to say  
hey this page field should only be shown if page is selected from type and this url field  
should only be shown if custom url is selected from type so that's what we're going to do we're  
going to say admin condition and it's just a javascript function  
this javascript function can take data and sibling data and this what the difference is this is  
the full document this is the full document as it's currently being edited but sibling data is only the immediately  
adjacent fields in the shape of the data so for example because this is a navigation array  
you need to only know the type immediately next to this field so you don't need to know  
like if you have six nav items you don't care about the other five you just want the one that you're next  
to so that's what sibling data is and that's what we're going to use right now we'll say sibling data and you return true or  
false if i return true then the field will show up if i return false then it will hide  
so i say sibling data question mark dot just in case it's not defined type is equal to page  
boom now shock and  
awe the next one is going to be equal to custom boom so one thing about all of this  
is i think this is going to be pretty reusable all of this code because this really all  
it's doing is just giving an easy interface for an admin to be able to pick  
basically just to link something so we could use this for buttons like if we hop back over here yes it  
will be applicable here it will also be applicable for buttons like this um let's see what else could  
it be  
these down here they'll use those anything else more buttons over here  
so maybe it's just that but so buttons footer and mega menu are all going to need to use this same type of mega  
like the same type of like linking structure so i kind of want to like i want to cut this and i want to make it  
into one field that we can reuse again so i could say like link right but  
if i did that these are these are four fields right now i could group them and i could say  
name is link and type is group and then fields  
is boom so now we have a top level container with the group field from payload  
so i am going to cut this field link  
hopefully i did that right i can't believe it and i'll pull that in  
stub it out i know it's broken everybody's mad  
okay this is lowercase right to follow our own conventions yes  
link boom  
perfect out that's a bug with babel yes lynn it's really annoying me  
i looked it up in between i took a little break earlier don't know why it does that okay so import  
we're good this will fix itself if we just simply close the file thank you vs code for being aware all right good now  
wait this is done yeah so we can add a social media.ts for another global  
really but anyway so here we have some new stuff which is pretty sweet so our mega man you click here and you can see  
like if you go to a collection you go to first you go to the list page but if you go to a global it takes you  
straight to the document and i'll show you how this is saved in the database in a minute but let's just fill some of this stuff  
out so for example we have we have our our approach who we are and  
contact pages ooh studies that's going to be a good one because that is a custom url  
that's not a page that's like an archive right um so let's fill these out let's say  
first one is a page and look at that these swap out based on what you select  
which is pretty cool so i'm probably going to set a default url and i think page should probably go  
first but let's say and we need to create some pages so let's go  
our approach add content hello  
okay duplicate let's say who we are not today  
and let's give ourselves the contact page  
cool actually i think because the contact  
page isn't really going to be a layout builder we might delete that page and just hard code it into the next routes  
because this really i mean there's not a whole lot going on there so i'm going to delete this page  
cool now let's go back to our mega menu okay so the first thing when i click  
this you see that i only have a label and i have to choose one of these for that conditional logic to show up  
let's just set a default value on this radio button so we'll go over here go to our mega menu or no that's in the  
link perfect i want page to go first now that i see it in the admin and let's  
say default value is page  
boom now now automatics automatically selected page  
so let's say what did we do our approach click on this  
choose our approach page add a row let's say who we are next to who we are  
then we have custom url and it will say studies and then we'll just send it to studies  
and then we will have another custom url contact send it to contact  
save okay now my width is not working here and i don't know why  
oh because we didn't do that we could we could add a because there's only one one field here  
we could set these so that they're 50 wide as well why don't we do that  
so here so really all three of these need to go inside of  
one row so i'll go like this  
okay  
cool so those are all going to stack nicely next to each other now perfect  
nice now this doesn't have a label on it the  
group field you can see that there's two lines here that kind of bothers me but um  
i don't think i'm going to change that for now so here's our mega menu got all the data we need we can preview  
it by going here one cool thing that we can look at here is that depth was automatically set to  
zero to preview this but if i say depth equals one the rest api will automatically populate  
all the pages with the full page and it'll only do that for one level down so if you had like many  
relationships or the page had a relationship then you could do depth equals two and then it would keep populating but  
for performance reasons you want to keep depth as low as necessary when we do this so  
cool got the mega menu this is pretty much the exact same structure for the footer as well huh so  
i can leave we're going to build this i like that all of those things cascaded all and hit the footer as well  
so the footer is the same i believe so our approach  
link to their approach this one is going to be who we are  
and then this one is going to be custom  
studies  
perfect last thing social media so i will say linked in  
oh where do we want to send it  
yep  
okay so now we've got all this data  
all of our globals are completely done we have a nice page structure there  
what else do we have to do  
um see this hovering on these we can get a little bit better with the naming conventions these are just all called  
rows because that's the default naming but if we go over to social media for example we can say labels  
and we can say singular link plural links  
a little duplicative there but i think it's fine  
now it'll say oh it should did i do it wrong  
i might need to restart the server or something weird i don't know but i think these should change oh i did it down here  
maybe we just need to fix that for these labels because it should be more descriptive now  
all right so yeah we've got the globals we've got our collections  
i think it might be time to jump in and start identifying layout blocks  
so i'm going to take a quick break and then i will see you shortly  
All layout blocks \- fast-forward and review  
okay new day it's sunday now fast forwarded and i went through and scaffolded out  
the rest of the layout building blocks for us i figure you kind of have a handle on it from doing the content block that one  
was probably the most complicated but we do have a whole collection of content blocks and the cms side is  
completely scaffolded out now so if we look i've also built out type um all kinds of types for  
our typescript implementation you're going to see those are going to come in super handy when we get into the react side of things  
but right now i'll just take you through a quick list of all the components that we've identified  
so if i scroll down here's our pages collection you've already seen this we've added a couple fields we've got a  
new hero type that will be able to allow the author to choose from minimal  
content above image that's the home page let me show you that so here's the  
content above image right there the minimal hero is just a little bit more brief there  
and then we have the content left of image which would be used for the who we  
are page right here and so i tried to be as semantic as possible naming those different options then  
we've got the hero content hero image this one has a condition so it only shows if the hero type is one of these two pretty  
cool but here is the meat of the project and i think this is a pretty nice view  
of everything that we're going to need to build this whole website so let's run through it real quick i'm  
going to show you the block definition and how it corresponds to the design and then we're going to round out this  
video episode and next one we're going to go into the css and starting to scaffold out our next  
app with react providers and blah blah so let's start alphabetically we're going to go to the call to action first  
the call to action is a pretty simple field it corresponds down to the bottom of the process page right here you can see  
that it's got a background color it bleeds off the left and it's got two calls to action potentially so what  
that looks like in the data shape we have a background color this is a shared field that we've made we scaffolded it out and it's used in a  
couple different places now so we export the type which includes all the different colors and we export  
just one field that allows the admin panel to choose between what color they want to assign to that block so the  
call to action has a background color block it has content which is just rich text and then it has actions which is an  
array and it takes at least one but not more than two and we set up our link field there which  
you can remember we used elsewhere already so that's pretty cool call to action nice and simple the next  
one content we already did that one the cta grid so this is a different call to action block and i kind of  
i purposefully named it very very open-endedness or with a with a degree of  
open-endedness because this is like a careers block right but you could use it for a lot of different  
things you could say are you interested in a construction project click here are you interested in architecture click here  
are you interested in working with us click here so imagine if you're reading a study for example they could use this  
block they could use a writing context of the rest of the page but not for a position grid right so that like it doesn't have  
to be for careers so i named it cta grid this is just an array of actions each with a headline  
and a link so the headline would be this content here and then the link would be the label and  
the the destination here nice and easy next one in image this one  
is actually left over from the boilerplate it's just a simple upload field and then um what type of image it is so if it's  
normal full screen or wide and what that will correspond to is it's going to give us the ability to do  
full screen images like this one and it's also going to give us the ability to put images in line for a  
little bit of variety like this one nice and easy moving on image collage  
this one is a bit different so a couple places in the mock-up the designers have called out that  
there should only be just a subtle image collage let me see if i can find an appropriate example could be this one right here so  
if we look at this component just these three images here that's an image collage and that's what  
this block is going to be for just an array with upload inside of it  
minimum of three and maximum of six so when we go to build the front-end side we're gonna place these images in a nice  
kind of abstract mosaic style and maybe they'll parallax subtly or something like that but  
the image content collage now this one's different because this one has more fields than that image  
collage in the middle you're going to have a content block so this is on the home page  
image content collage right here so this is the content you have a call to action you have a background color now the  
content will be forced to be aligned center and you're going to have another set of abstract images so that's  
what this all corresponds to the background color content if you want a cta or not it's going to show this  
this is pretty cool we're reusing our link field definition but we're adding on a condition  
to only show this field if enable cta is checked beautiful just javascript gotta love it now here's the images  
array i put minimum three maximum six with an upload field  
next one image grid here's another one that i semantically named on purpose because the mockup calls for a team grid  
but really we can make this pretty open-ended to be reused what if this was just content what if these were just images  
you know they didn't even have to be that aspect ratio really you don't want but what if we just  
popped them out into a grid and called it a day right this does not have to be in our team block it could be anything and that's  
the goal here you want to you want to be as open-ended as possible with your blocks so that they can be used and reused as  
necessary into the future so now we're getting there we're having we've got quite a bit of flexibility in  
terms of the front end and it's all very intentionally branded so this block right here we've got a content we've got background color and  
we've got an array of images with descriptions over top of each one so background color content images  
min 3 max let's say 12 might increase that if they need it and then we have uploading content one  
thing i want to note is that for each block we are identifying the type for the data the typescript types  
and exporting those as well alongside of the payload content definition so you those are  
going to be amazingly handy when we get to react so the next one we have image we talked  
about image grid image stat collage this one i'm going to pick up the paste it's getting obvious right here image stack  
collage you kind of have to have both data shapes and these are so intertwined that you can't really break it down any  
further than that so we've got an image stack collage we've got a typical slider which is  
just images with uploads and this one shocker it's just going to  
be a slider like that boom done let's see what else spacer we talked  
about or earlier we've got statistics this is just a statistic block and this one's kind of interesting  
because i'm going to try to do something cool you can see right here here we go here's  
statistics right what if we have like some type of overlap prop that pulled the can the surrounding  
blocks up and pulled them down to intentionally overlap these statistics with content  
around so what i did there was i kind of did the padding top and padding bottom trick but instead i'm doing top overlap  
and bottom overlap which means we're going to just set that up as negative margins in the react side  
all right what else do we have sticky content this one's kind of cool  
but it will be pretty simple to implement the sticky content is that block on the our approach page  
that it's not mocked up very well but the intent is clear at least with my design team when you scroll these things are going  
to be kind of going across and this is a position sticky so you get it you got a headline and then you get the  
description so we just need let's go this way we just need an array of sections  
each has a label which will be on the left hand side and each has a description which will be on the right hand side  
so it can be used for principles it could be used for values it could be used for i mean it really could be like proof  
points almost like more statistics if we wanted to but okay now the last one that i've  
identified is the study slider and that's on the home page this one's going to take different data than the regular slider because  
we're going to connect it dynamically through relationships to actual case studies so we're going to say hey i want these  
three case studies to be featured on the home page are these six whatever you want but this  
layout block will use the same slider in the background the react slider but it is going to be  
a relationship field has many true relation to studies boom  
so with that i believe our cms is completely scaffolded and it is super cool at this point we go  
back to pages i'll run you through this real quick and then i will do a little wrap up for what we've done  
but you can see we've got the hero type this is the home page so we did content above image we've got hero content this should be an  
h1 there we go okay and then we have a hero image which i just quickly cropped out  
from that mock-up we have the page content here's the here's the content block that we've  
talked about i'm going to close these while we go another content same in the red block the question the answer  
a spacer we've got proof points this is the blue section now  
we've got proof points two column got connecting the narrative so if we look at the mock-up we are  
currently right here  
then we've got the stat bubbles and here's the statistic and then the  
description statistic description pretty cool and that's where i left off for right now we can go back and craft  
the rest of that i just was lazy and didn't want to crop those images right now so i believe with that oh we did  
studies too i think have we looked at that yet pretty straightforward here's a collection of all the blocks  
that we have at this point in payload something cool is you can just start typing  
and it will reduce down automatically another thing payload's capable of is you can swap in your own preview images  
for these blocks super easily i haven't done it here um i'll probably do it later on in the project or maybe  
afterwards but you can customize this to show a visual representation of the block  
in this in this tile here super cool but yeah so i believe the cms  
Recap  
scaffolding is all completely done  
okay cool so at this point i think is a good time to wrap up this first  
episode i hope everybody didn't fall asleep on me there was a lot that we went over and honestly i cut out a good amount of  
the process but um i was i was cruising when i started getting into defining the data shape for those blocks  
that's why i like to get things done in chunks because when you get into that mindset you just kind of keep plowing right through and  
sure you know we're probably going to change things we're probably going to massage the data shape as we use it if we need to but ideally  
we've got a huge head start on the the data side of our entire app and um  
i'm gonna check in all this code i'm gonna push it as is i'll create a branch for episode one  
so that you can see that and kind of follow along at your own pace if you'd like with what we've done so far but again um  
at this point we've reviewed the mock-up we've got gone over our intent and what you're going to expect from this series  
we've scaffolded the entire cms so we've done pages we've done studies we've done all the globals that  
we need social media mega menu footer blah blah and the next episode  
we're going to get right into the css scaffolding so with react jss we're going to  
build out a couple reusable utilities define colors and then we're going to scaffold out the react app we'll see how far we can get  
that should go pretty quick and we might move into the header the mega menu and the footer  
actually starting to write code at this point for the front end so i'm really excited like i said this  
was my first youtube video i locked my dog out at his daycare so he's not barking anymore  
that's good i don't know if you're gonna get sick of that listening to me but um i love him i miss him so i'm done  
this weekend but the next one will be coming out soon and hope that you follow along  
accordingly let me know what you think hope you learned something talk to you soon  
