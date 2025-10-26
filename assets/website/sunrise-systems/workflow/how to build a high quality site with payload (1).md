hello everyone welcome back to episode two of how to build a professionally designed website  
with nexjs payload cms and typescript if you haven't seen episode one i would  
probably suggest going back and getting yourself up to speed with what we covered in that episode it came in about an hour and 50 minutes  
and we covered a lot of ground in that episode we went over the just general project plan we went over the  
real world work that we're going to be building in this series and we did a design review so we went  
through the comps and figma we identified different layout building blocks and identified how to best  
reuse things on the front end side and we completely scaffolded out the payload cms back end so that now we get to work  
on the front end and focus and that's how i like to work i like to do things in chunks like that the last episode was pretty successful  
got a lot done um if you're more interested in the front end you don't necessarily need to go back and watch that first episode but  
i think it would benefit you if you are looking to see from kind of start to finish  
how a professional design firm would go about building a website so that said with this second  
episode we're going to be actually moving over the front end we're going to be scaffolding out the  
next js website and we're going to be bringing in all of our dependencies for react on  
the react side got some low level utilities for like css grid for i think we're going to have some  
parallax utilities maybe a slider something things like that but otherwise most of this is going to be written from  
scratch so ideally you're going to come away from this episode learning a lot about  
how we at treble set up css frameworks how we organize our components how we  
split up an interface into multiple different reusable components and it's going to be pretty cool i love  
the front end i love this stuff pretty nerdy that's cool i hope you do too  
and let me know what you think about how this video goes but let's jump in  
React JSS \+ NextJS setup  
all right so i think the first thing we're going to do is take a look at react jss  
and that's the css kind of i don't really know what to call it it's a framework not really it's not a library  
it's an authoring tool look at that okay so that is what trouble has been using most  
recently for our css we've done a lot of different approaches for um  
how to author css with react projects we've gone from just straightforward css and sas and  
just using something like style loader and webpack to just plop them all in the head of the document  
we have done css modules we've tried out styled components we've  
i looked at tailwind i'm not into that and the one that we are landing on mostly is jss  
at least for now now things aren't perfect in my opinion this is a very very touchy subject  
because css in general people don't really like to write it  
right and i'm not gonna lie i don't really it's a necessary evil and if you do it  
right then you can take a lot of that pain away but it's not as fulfilling as writing  
some script or some component that is super dynamic and really responsibly renders and blah blah  
there are just more fun parts of web development than css in my opinion and i don't think we found  
a specific authoring tool quote that fits all needs perfectly so that said  
jss is the closest we've found we like it it's already installed i went through and i wired up everything necessary to  
install it you can look at the next js examples there is a react jss example you just have to do a couple  
things you have to have a custom app you have to have an effect that removes the styles on  
mount and then you have to have a custom document that sets up some registry stuff for  
your jss because it's server side rendered so all those styles need to be calculated on the server as well as in  
the browser and that's where this document comes in so you have a style tag with an id and you are going to  
i believe inject it somewhere something yeah registry to string right  
there so you're going to have all those styles right from the server now we have a completely bare bones project  
Writing our first global styles  
right now there are there's no css i already went through and i removed the css modules from the next js payload  
boilerplate so if i do yarn dev and i hop over to the front end you're gonna see that it is totally  
unstyled right now it's times new roman good old faithful there  
and um we're gonna just scaffold out some baseline css requirements  
the first thing that i generally do is i'm going to create a just a css folder at the top oh i  
figured out how to make a new folder you click out here and then you click here so that was a trick from the last video  
really threw me for a loop but so with this project because it's all flat because it's  
got an xjs right next to payload we're gonna have our collections we're gonna have our components css all in a nice  
top level directory that's pretty nice organization i think so the first thing we're going to need is some type of app style some type of  
global styles so i'm going to write app.ts and  
jss all of your files are actually just javascript you write css right inside of javascript so um you're going to import  
a i believe it's a helper function from react.jss so it's import  
create use styles  
from react.jss okay and then you can export const app styles equals create  
use styles and then pass it in object and then in here that's pretty much how  
this is going to work and and here is where we're going to define all of our global styles so there is one  
plug-in that i've also installed it's called let's see jss global  
it allows you to do a fancy jss technique like this at global  
and then you can style global elements right inside of jss because jss otherwise is very component  
based it all operates off of react hooks but what if you need to just just style  
your html style your baseline html h1 so this global plugin allows you to  
do that so for example i'm going to put let's say font family let's say  
system it's got to be a string and that's good for now well helvetica  
new helvetica  
okay cool so i in the mock-up the actual real world work we're using a  
super nice typeface called lausanne lausanne a french word french town  
i don't know how to say it but it's a super nice typeface  
and i am not going to check this in to the repo because then you would have  
it for free and you have to pay for this typeface so it's super nice we already purchased a license for it but  
i'm just gonna use default browser system ui for all of the typography pretty much in this entire app or in this entire  
website it's all lasan i think it's a really really nice typeface it's it's a little bit unique but it's  
not crazy still very readable nice at smaller styles nice uppercase really well-rounded typeface  
so that's what we're using but for now we're just going system ui can't check that ttf into a repo because  
then that's piracy i think so let's say  
margin zero wait we need to turn that on the body as  
well so we can say html body margin 0  
pesky reset right some of this is going to be like just resetting css that comes with the browser like i think most of  
you should already know that by now but so for example if i go over here  
the body has that that eight pixels around the outside of it and we need to get rid of that because  
that's not gonna be good for anybody so this global css will do that  
now we need to import this css and we need to actually use it yet because right now as you can see  
the body still had that set of styles so we need to do is we  
need to go into our custom app.js we're going to import that file we're going to say  
import let's say classes what do we call it app styles  
i'm probably going to rename this i don't like that name because now we have to say const classes equals app styles  
and that's a hook so that should be called use app styles or use styles really  
and that will be consistent throughout the rest of this app so i'm just going to convert that to default export call it use styles it's  
going to yell at me for a minute i don't care go over here and export default  
oops cool because all jss it's going to  
export a hook every time and then you can use it in your component just like that and then apply it here oh it's telling  
me typescript is already yelling at me for stuff i need to add an actual app definition  
and we're going to say height 100 just because i gave it this div i don't want that div to screw with  
any height so that's cool so now um let's check and see we've boom we got our jss working and it  
canceled out the base margin on the body and so  
we're kind of starting to roll a little bit we're not done not yet um we have a couple more things  
that we need to do i'm going to show you some cool stuff i'll probably next up let's do the baseline grid  
The baseline grid \- in CSS rems  
so for trouble everything we do is going to be using some type of baseline pixel value  
if it's you know 25 pixels or whatever um 1910 let's see we are 19  
10\. yeah this place they have a really nice write-up on typography and i'm going to show it to  
you you can read it on your own time but let's see something yeah here  
they talk about the baseline grid in a really nice way i think they actually have a couple articles but  
at trouble we use a multiple for our baseline grid for everything so all of our type styles are going to be aligned  
to some multiple of a baseline value and i'll let you take a look at this  
article on your own time 1910 they're not around anymore they um they did the battlefield 3 work i believe maybe battlefield 4\.  
they do some cool stuff or did um i don't know what they're up to now but i always looked up to them  
anyway so back to our mock-up we have a baseline grid already set up in this file  
um figma control g that's on a mac i don't know what it is on windows you guys are on your own  
um on mac ctrl g shows the grid and we can go check it out and see what  
it's set to let's open this up looks like we've got some nice um sizing going on some consistency  
you can see how that baseline grid really helps out because you've got two of the baselines you've got two and then the logo itself is  
three and then the header has that bottom padding of two as well looks like the grid is 20 pixels and we  
have a 12 column 40 pixel gutter or a 40 pixel column so that's look at that it's beautiful all this  
stuff lines up perfectly to that grid even the horizontal distribution of the columns lines up to that multiple  
now some people as to what you can set your baseline to that is a hot topic and people will beat  
me up if i say the wrong answer so i'm just gonna say what i think it doesn't matter  
i've seen people use five pixels which is just asinine to me because that's way too  
small and it doesn't even matter at that point people might think that it matters but really does it i don't think so anyway  
um things are larger than five pixels nowadays mostly so i mean knock yourself out  
follow your heart but um sometimes we do like a 12 pixel sometimes we do 15 pixels sometimes we do 20\. depends on  
the sizing of things and how how it works out with the aesthetic of the website and it's not a perfect science honestly it's not  
but you can see here grids 20 pixels we go over to our desktop font size is 30 so that's a splitting it  
already but that is definitely okay because line height for body font size is definitely an important thing  
to get right for rhythm the the base size of the body is 18 go to h1 that is going to have 100 pixel  
line height h2 is going to have 100 pixel line height blah blah blah so we're going to get back to that um  
let's go over to our code and let's set up the baseline functionality or the baseline grid  
okay so baseline grid we're going to create a new file let's create it in this the right folder  
we're going to call base.ts and we're going to use rems throughout this whole project  
so we're going to set the font size on the on the html and then every single other thing is  
going to use rems to size and that way for smaller screen sizes all we have to  
do is set a smaller font size on the html in one place and every single element  
that uses rem will automatically scale down accordingly as the screen size  
shrinks that's a pretty cool trick we do it in pretty much every single project that we have but the first step to doing so  
successfully is declaring a couple variables so export const body font  
size equals let's say what was it 18 and then export const baseline pixels  
equals 30 right around 20\. okay so then over here we're going to  
import those import body font size and baseline pixels  
from base and we're going to apply that to the html so font size is body font size  
that should be html font size what am i doing here getting crazy  
line height is baseline pixels cool so now what would be cool is if we so  
this is 18 that's pretty big for mobile but if we if we shrink it down to like 15 or whatever our mockup calls for on mobile  
then everything will automatically get smaller so when you say one rem you're actually  
saying 18 pixels there's a problem with that though because that's not exactly what we want  
to do we want to say 20 pixels right because  
that's going to be much more common of an um of a measurement if it would be great if we could say like base 2  
base 3 base 2 and then set everything as a multiple of our baseline grid  
so we have a function for that that we usually write and i'm going to write it right now count space equals multiplier  
we're going to set it equal to one it's going to return a string and we're gonna go  
i'm reading off of my other monitor i do not have this memorized baseline pixels divided by  
html font size times multiplier  
and then pass it ram at the end so what this is going to do  
this function right here you can say in your css you can say base 2 or you can just say base that's going to  
give you 18 divided by 20\.  
and so rather than having to remember 0.9 because you could write 0.9 and that's going to give you 20 right  
but rather than having to remember those crazy um oh 20 divided by 18 actually so you're  
going to have to remember 1.111 and then if you wanted to do base 2 you would have to remember 2.222 and  
blah blah blah so it's cleaner to do it this way that way you can use this function you're going to get the exact rem  
equivalent to your 20 pixels and everybody's going to be happy so i'm going to  
use this a lot you're going to start to see that it'll become second nature but that's just an interesting topic that we  
do a little bit differently once you set it up you don't have to have to do anything else from there  
Reusable values (breakpoints, colors)  
so the next thing we're going to do we're going to define our breakpoints and we're going to use these in js and  
in css so you'll see that as well but we're going to give ourselves  
a couple sizes so extra small let's say 480 let's say small is 600 let's say medium  
is 8.50 large 1120 xl 1680 i don't know what these are  
going to be we'll figure it out we're going to base them on the grid itself so some of these for trouble  
some of these never change like extra extra large and extra large these are pretty pretty good sizes so that like you can  
kind of control the screen sizes 1680 is a popular one 1920 is obviously popular so anything  
bigger than that is an extra extra large screen but anything smaller yeah you get it so we're going to get  
back to these might change these values a little bit but it's just good to have them scaffold it out another thing we're going to do is going  
to define our colors and we can look at figma for that so we  
have antique that is going to be here  
we have white obviously ideally we aren't going to be using  
white too much but if we need it there it is i think everything should pretty much be antique  
then we have gray and that is going to be what 1 8  
okay then we have red  
and then i think we have blue i'm just going to write these real quick  
right oh we call it light blue okay i'm just gonna call it blue that'll be less cognitive dissonance for  
people as they write code for this in the  
future okay and orange  
forgot yellow  
i don't even know if we're using yellow anymore in the design okay so here's colors you  
can see this folder starting to take shape with some reusables there nice stuff good stuff we need a type  
Typography  
definition yet so type dot ts and what we generally do here is we're going to define out every single  
like reusable type style so that let's say you semantically you want to  
use an um an h2 in your markup but it really it should probably look like an h1  
that's fine visually you can do that the markup needs to be proper for screen readers and for search search engines and for anything  
else but you can't have more than one h1 on the page but what happens if you want to have a giant one not best practice but you're gonna have  
that at some point so what we're gonna do is export const h1  
and let's say the h1 is going to say font size oh let's bring in the base  
import base from base and then we're going to use it so base what was it 100 i believe let's go  
check yeah 100 so that's base five  
boom done line height base five and there we go now we've got  
a nice h1 setup and font the font weight is actually not bold for  
any heading so i'm going to set myself up with a const heading equals font weight  
and all of this is css and js again so you're going to see we're we're writing javascript but  
really we're making use of well we're writing css but we're making use of javascript  
so whatever else might go up here say we want to determine a font like letter spacing or typeface whatever we  
could put it up there and then share it so export counts h2 equals  
i'll just fast forward and get all this stuff done no need in watching  
okay just like that it's magic we have all of our h ones we have everything  
defined and you can see that this base function is really coming in handy now because like for example this let's  
do the mental math on that that's 2 times 20 plus 0.25 times 20 so it's 45  
right and that's a much easier number to remember versus if you had to remember  
0.11111 times whatever right so all of these are lined up perfectly  
to our grid i also gave myself a body here which is font size just off the html font size  
but then the line height is 30 pixels so another thing i did just now without having to put you through is  
went through and updated our app.ts and just styled a bunch more globals so this is like the the css reset for  
trouble this is how we do it it's not a lot of css it's not a daunting thing to write your own reset  
really you're just cleaning up a couple styles and you're calling it a day but so i've got this global tag this is jss  
global the plugin and we are using um all the tags that we  
defined in the type file and we're just pulling them in here and we're just setting some uh  
some more cleanliness here so if i hop over the browser you can see that everything is being taken into account nicely and we  
are making magic so the next thing in the css folder we're going to do is we're going to add a queries.ts  
CSS media queries  
and with jss media queries are a fairly cool thing they're um  
a little unconventional but i'm going to show you how they work right now so with our media queries we're going to need to  
rely on our break points so i'm gonna import breakpoints from and i think that's like this  
okay and then let's export equals  
what is it at media max width and then we have breakpoints dot xs  
and we got to give ourselves pixels and good so here we're going to have one for every  
single size maybe that's enough who can say  
we need small we need  
medium right we need large  
\[Music\] extra large and extra extra large  
don't need this one okay so what are these going to do for us  
i will show you over here we're going to actually employ  
that tactic that we used that we set up so remember we're declaring the font size as html font  
size if we go over to the browser and we look at how this guy is sized well you don't want to have to write  
that do you so all we did was we wrote base 5 and then boom we get this crazy  
disgusting rem value but it lines up perfectly to um a multiple of 20\. so if i use this  
what font tool and i show you perfect 100 pixels right on the dot so that's why we use that base but the cool  
part is if so this rem this rem is relying on the html  
font size but what if we go over here and we say let's say queries oh you know what  
i'm gonna do us a favor and export default and then we're gonna say  
access like that then over here  
i'm going to import them  
and then i can use them so let's say dot m let's say for medium screen sizes  
we want to shrink the font size to html font size times 0.8 or 0.75 for a  
cleaner number i don't know what this is going to look like but let's check it out  
bam perfect all the sizes all shrink down automatically and we don't have to do anything about  
it because the rems are taking care of everything so that's going to be a recurring theme we do everything like that it's pretty  
cool okay so now the last thing we need for  
our css foundation is z indexes and i just went and added the file it's  
not anything too dramatic but what we do is we maintain a central  
place to configure all of the top level z index needs of the entire site or app or  
whatever and in this case the site is pretty simple it only has a fixed header  
it has the page content so you see as i scroll through here the header stays above all the content  
but when i open up the mega menu the mega menu sits behind the header and i think  
that is all that we need right now so i've just quickly thrown this together page 10 modal 20 header 30 keeps it all  
in one nice spot and we're good to go that could change as we build the app  
out but having them in one nice spot is a good pattern to follow so  
next up with our css declared i think that's pretty much all we need as you can see it's really not that hard  
to roll your own i mean obviously we're gonna come into some circumstances coming up that we're gonna need to get  
pretty advanced with css but as far as like a foundation or a framework  
don't need it it's not that much css to write yourself so  
with that said i think we should move into the base app configuration and we're going  
Installing dependencies (CSS grid, Modal, Window Info)  
to install some dependencies and we're going to see what we need to from like a  
third-party package perspective from um maybe just pulling in some of those  
reusable ui libraries that we've talked about um faceless ui i believe i mentioned it  
before but in case you are joining us for the first time in the second episode  
we maintain our own set of pretty cool react components for common  
use cases and right now it's called faceless ui  
that's going to change i think but the first one we're going to do is we're going to install the css grid  
this is a small package it really it's just it helps you set up a consistently  
applicable css grid throughout your um interface and if we hop back over to the ux you'll  
see we've got a 12 column system here that has a max width and then it will break down on mobile to  
be a four column so we're gonna use this package i'm gonna  
install that we're also going to use the faceless ui modal package this one is super nice it  
um modals might seem like a simple thing at face value but in reality there's a lot  
of things that happen behind the scenes that you really don't want to roll it yourself  
for example modals need to be accessible there is a high degree of um specific intent that you need to  
keep in mind when you are building modal windows because as a modal pops up you need to trap the user's focus  
so that if a screen reader is reading the page it's not just reading all that content on the page generally modals are all the  
way tucked at the bottom of the page too but it comes into view it focuses the user and then the screen reader can properly  
read that information instead so this modal packages we use it quite  
often we've used it for just about every website we've built in recent history so  
custer this mega menu here that is being used the the faceless ui package is being  
used there it's i think it's being used on the trbl site  
actually as well yeah if we scroll down we get this menu button here that's  
the modal package it gives you those transition times too so it gives you a lot of nice stuff we're gonna install that one  
let's just start with those two right now  
you don't have to use these if you don't want to but they're helpful for our workflow building websites over and over  
in an agency setting you kind of come to use your own  
components and it will optimize your your process so let's fire it back up yarn dev  
hop over here and we're going to import those components and we're going to set them up because  
both the css grid and the modal package have a pro a provider infrastructure so  
if i show you let's do the modal first i can show you this is an example of how  
it's used let me zoom in a couple times here you have to render the modal provider at the top of the app  
and then your modals themselves are just rendered with a separate component now we're not going to follow this all the way through all  
we need to know right now is that we need to add the modal provider top level component so  
let's import it  
and let's import grid provider  
as well cool and then we're going to wrap the whole app  
cool i thought that would format nope  
okay so the modal provider takes a couple props let's see  
it follows bem conventions for css prefixes so you can give it a prefix if you want  
control the trans transition time you can set the z index now that is going to be handy because we  
have jss our variables are actually just javascript so this is the reason we like jss we can  
just pull that z index in from our style sheet and pass it directly to this provider  
and it's going to use our z index and that's pretty cool so  
let's see import and then modal boom just like that so not only is that going  
to be helpful in css but it's also going to be helpful in javascript  
now the last faceless ui package that we're going to install for right now is faceless ui window info and what that  
does is it gives you helpful information about what's going on inside of your um like  
with the size of the window what the breakpoint is that you're at currently with react  
normally like with media queries and css you know that's great for breakpoints but you're going to need  
that information in javascript as well so if your components need to render separate things at separate screen sizes  
you can do that and window info the package helps you get there so and it also responsively responsibly  
measures screen size and so i have already installed it i'm just  
going to import it here boom and it needs breakpoints  
to work properly and the cool thing is we can just import our breakpoints from our css copy that  
go down here paste and boom so with this i believe we have all the  
building blocks to actually start working on our no we need to define the grid provider we need to  
tell it what kind of columns to use so the grid provider itself you're going to configure well  
yeah i wouldn't worry about it for now too much but i'll configure it and the things that it needs is row gap  
and this is going to be a separate sizes because small screens you can set a row gap you can set medium sizes you can set  
large so let's just say for now what did we have  
i think it was 2 2 base so i could pull in my base  
function and i could just say base 2\.  
and i think it's going to be like that for all so medium is base two let's just keep cruising then we have  
large base two well why am i why am i doing that  
okay and then another prop it takes is column gap so css grid i'm not really going to go  
too far into the weeds right now about how it works but it's super cool um we're not going to  
support ie 11 so might as well take full advantage of the new css grid so  
oh this is a yup okay and then finally we have cows  
and the columns are how many columns wide we're going to be using for different screen sizes just like  
everything else small let's say it's actually eight medium is eight let's say large is 12 and extra large is  
also 12\. cool  
First component \- GridContainer  
okay now that we have everything we need i think we're gonna go back to the mock-up and we're gonna try to make some structural decisions  
about what types of like containing elements containing components we're gonna need to build to support  
this ui so as i'm looking at this right now obviously the grid is constrained in a  
margin left auto margin right auto type of thing but some elements are pulling outside of the  
grid what is this one two three four five six baseline  
units to the left and the right so this right here all of these color blocks are pulling  
outside of that grid um some things are full width  
some things are organic so really i can see two things right off the bat  
the first one is we need to have a grid container like a max width for the grid  
and maybe we want to what do we want to call that grid max width max width grid i'd say grid max width makes sense and  
then we also need um something for the constraint for this as well now  
i have no idea what we're going to call that um but let's write the first one let's write the grid max width and let's put  
together something on the homepage at least to get us cruising because right now it's still looking beautiful oh also let's set that  
background color right now just get that out of the way so we're gonna go app css we got  
html we're gonna say background color colors  
enter dot antique boom type script thank you there we go big difference i know i'm  
dramatic cool but now  
our first component what do we want to call it so this boilerplate doesn't really  
enforce the folder structure but we're going to start that so generally i like to have like a layout folder and the layout folder is going to  
contain everything that is meant for like more than one page so for example studies and pages are  
both going to have the header they're both going to have the footer they're both going to have max width for grids they're both going to have whatever that component is that  
allows it to break out of the grid a little bit so let's let's start with the layout  
folder and let's create grid max width or maybe just grid  
container yeah i think that's a decent name for it  
so let's create a new file index.tsx so far i've been creating a lot of ts files but definitely need  
tsx if you're going to have jsx in your typescript file so import react from react  
cons grid container oh look at that i love it  
just kidding i hate it react.fc for functional component i'm  
going to set myself up because well does this need props probably not it's probably just a presentational  
component so i can probably just return a div but it will need a class name right so  
import i'm just going to stub this out real quick use styles from css  
and normally what i do is i'm going to create a css.ts file here and i am going to export  
that hook from jss so the convention will be css.ts and so if you look at this file it's  
going to be the same thing as the app.ts we're going to have import create use styles and then we're going to export default create use  
styles and that will be our convention for every component throughout this whole app  
and you're going to get into a rhythm of this after a while so it'll kind of flow but right now we have grid containers so  
we need to have some type of base class so i'm going to say grid container and then we are going to say  
it's an object and then we need a max width and what is that max width in our  
mock-up let's see 920 it's intentionally skinny for this  
design which is pretty cool now we do not have that as a break point but it might  
be nice to double up on that and maybe reuse this breakpoint  
no i think we're going to create a new file and we're going to say  
where should that go it's a variable we know we're going to need that in our css and our javascript  
the max with that 920 there but where does it go  
i kind of want to have it maybe we'll just put it in app for now and as we  
move forward throughout this there might be no that doesn't make any sense i'm going to just call it max  
widths instead or structure let's say for now  
export const we're going to say grid container width equals  
920\. and then just for the fun of it because we know we're going to be bumping outward that six  
base to go to the left and the right one two three four five six yeah we're gonna export that from this  
file as well so export const grid overflow  
equals base six done cool  
so now back over into our actual layout grid container i'm going to import that import  
let's say what did i call it it was like one second ago i have memory problems grid container  
width up a couple folders  
cool and we need margin left auto and margin  
right auto okay now over in our ts file we can import  
usu styles and then we can say const classes equals use styles  
okay ah we do have children as a prop  
so react will give us that in their  
functional component type anything that you pass in here will be joined it will be  
an intersection type with the base  
props of a functional component so children is automatically there  
so here we go i believe this thing that's all we needed for it we're probably going to change  
this um we're probably going to update the max width at certain screen sizes but we can get back to that  
we probably i guess we should name that maybe no i guess because it's a max width it will shrink down on its own  
so for mobile when the screen is less wide than 920 we  
can probably just have it flow 100 we can adjust that if we need to but for now  
got this component why don't we try to use it and why don't we try to use our grid in general just  
Testing our grid, discussing NextJS page folder  
stubbing it out and seeing how it works in the pages slug so this is one thing that i  
haven't really talked about yet the next js structure i'm not going to  
go too far into it because it's covered in the boilerplate itself but you can see this dot dot  
slug that means that there can be any number of slug parameters like if you had if you wanted to nest  
pages in your url structure you might want to say like slash about slash team or slash about  
slash history you know whatever you might want to do this naming convention for next.js pages  
allows you to match any pattern now the problem is this template is exactly the same  
as the homepage template at index.js so you can see index.js simply imports  
these dependencies from the slug template and reuses the exact same things  
so they're just centralized here you'll see they're exported but um so why don't we just hijack this for a  
minute why don't we just say row can we get it nope no  
grid i was hoping for intellisense from that package but not  
today so what are we going to do here we're going to import  
grid from faceless ui css grid and we're going to render one and  
they're going to render cell still nothing great  
and then we're gonna say in here let's give ourselves two cells  
we're gonna say span equals six  
or is it calls i can't remember off the top of my head  
let's say here is some content  
cool  
okay boom so our columns are working if we inspect that this is using css grid  
and it is automatically giving all the inline styles that we need to support our specific configuration pretty cool  
but it's flowing to the max width of the page so that's not good i'm going to zoom out a little bit i was zoomed in like a  
psychopath because i have a larger monitor but let's go add that component that we made  
let's say grid container pop that here now this should center the  
grid for us bam perfect and how wide is it let's double check our work  
920 beautiful looks like our gutters are properly  
sized as well to base two and in this case that's going to be 40 pixels  
so we are moving right along now i was doing some thinking about the i i mentioned having another component  
for the overflow but i don't know that it's going to be that simple because i think scrolling through this every  
single component is going to need to be different in terms of what actually overflows  
and what does not for example i mean we can probably still have some base components but some of them only  
overflow on one side so this component here the the red background overflows all the way to the  
side of the screen on the left but it does not do that on the right so that's gonna be a tough css problem to fix and i'm probably  
gonna fix that with like a before or like an after like a pseudo element and i'm just going to position absolute and let it  
flow off the page in one direction x distance so that it always looks that way kind of  
fooling it and then have an overflow hidden container so this probably makes no sense i understand that we'll get back to it but  
the moral is let's figure out a couple specific pieces here that we want to  
maybe what can we mock up that we just now maybe we'll get back to that because  
i think this is going to be the first layout building component that we do so when we get back to this one that's where i think we're going to be able to  
stretch our creativity a little bit in terms of how to accomplish that  
but this is good i like the i like the grid i like how it's already working properly um let's see  
we don't need to keep that there that's a proof of concept it's all we need well why don't we try to shrink it down see what happens  
okay so you'll notice that both of these so the grid has adapted it's only eight columns now because we're on a mobile  
screen size and you'll see that these have automatically stacked  
because they have more width than is available to them in the grid so we don't even have to  
write any more code it's just automatically responsive bam perfect  
for the last couple things in this episode i think what we should do is we should stub out the header and the footer and just  
Stubbing out the Template, Header and Footer components  
get those things in the right spots and then we'll call this episode a day and then we'll start to style these  
components in the next episode we'll just jump right into building out the header and we'll start building out some of  
these layout components so if i'm looking at this structure here we have we know we have  
the the page template but we're also going to have a studies template and those two things are both going to need  
the header to be rendered and the footer so we can either render those individually in each template or we can  
make some type of shared layout component um that takes care of rendering the header and the footer  
for us but there's a trick so we're probably going to do some page transitions just something subtle  
and when the page transitions you don't want the header to fade in and out with the  
page you want the header to stay between the page transitions but the footer we don't really care  
about that the footer can disappear because it's going to be in a different vertical spot  
every time depending on how long the page is so generally what we do is we're going to we're going to render the header  
itself in the in our base app outside of any layout or like template component  
that we're going to make shortly we're just going to render that right here but the footer is going to go into that template component so there's two  
components we're going to make the first one i'm going to make header well there's three i'm going to make  
footer and we're going to make template and these are logically grouped anything  
that has to do with the layout itself anything shared between pages and let's just index dot index.tsx  
index.tsx and okay so first thing header  
okay let's just wire up our styles as  
well  
okay and then we'll say what do we need the header has padding  
right outside padding  
it doesn't adhere to any max width or anything it's just going to flow so  
i believe what we're going to do is just have that header component the container  
and then right now we're just going to render a couple pieces of fun stuff so well let's make up divs  
logo and menu and the class name classes  
the header okay cool this code is all pretty much  
exactly the same for the footer so i'm just gonna i mean it's just a react component right so i'll just paste that there there  
cool rename  
make some css.ts  
rename the template i don't think the template's going to have any styles i don't know what they would be so we're  
going to remove that for now  
we can probably also render a fragment so that we don't have to put extra markup on the page  
if we do need styles here we can go back and add them but i don't think we're going to so what we  
do need to do is children and footer  
really oh  
okay now the template is going to be responsible for rendering the footer and whatever else we decide the header  
is all set as is we don't have this file yet do we no we have to  
we're gonna say header now this needs padding base  
two all the way around right yep perfect bonus points top right bottom  
left trbl padding top right bottom left love it surprise all right so yep  
that's enough css no we need display flex  
and we need justify content space between and that will make it so  
that the first element is going to be all the way to the left the second element is all the way to the right  
cool now let's render our header in our app and i'm going to usually i  
keep the css together so i might hit enter here what does that really matter nothing  
okay  
cool and let's render it right here  
okay there's our logo there's our menu here's our template our footer doesn't have any content in  
it yet why don't oh no we didn't use our template what does our footer have  
oh i'm stupid let's say footer cool and then template we need to actually render that so i'm  
going to close the thousand files i have cool oh this is going to break things  
let's just stub that out too real quick  
what do we want to do let's just do some minimal css for the footer just so we know that it's there  
nope just going to write the word footer that looks complicated  
looks good to me perfect so  
let's go into our slug let's render our instead of main we can  
render template how's that  
and that's it for now that's the only page now we have custom 404 we'll come back to that yeah so that should be it go over here  
check the browser footer so now we're really cooking  
see how the fonts get smaller automatically because of our font size change and how we're using rems  
they go smaller here that's probably too small we'll adjust that but  
still pretty cool  
Outro  
okay so that episode was pretty straightforward nice and easy laid the css foundation for what we're  
going to be doing in the future and also started a couple react components made some decisions about  
our layout where we're going to put the header the footer etc nothing groundbreaking yet but the  
pieces are in place to rapidly advance into actually having  
something that looks like the mock-up so all these pieces are here we haven't really used them together  
but that's going to be coming together quite quickly in the next episode which will be coming out soon  
but thank you for hanging in there for this episode and as always now this is my second youtube  
video so maybe i'm getting a little bit more smooth at it but um please bring on the feedback because  
i want this to be entertaining but not really more like  
educational i guess you could say to an extent but i also want to know what you think about  
the approaches that we take in these videos so um we can learn something from each other and i'm looking forward to keeping  
it going and i hope you are too we'll talk to you soon  
