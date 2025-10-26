all right youtube welcome back episode three in a series that's going to take you through  
how to completely build from scratch a website from a design agency's perspective this has been  
professionally designed it's all in figma we've got mockups and we're going to translate it into  
next.js typescript react and then the back end is going to be powered by payload cms  
it's uh going to show you as a new developer or as maybe a fairly experienced developer even how a  
professional design agency would take a high quality set of comps for ui  
and translate them into a structurally sound well-engineered react interface and  
there's going to be a lot to go over there's a lot to learn if you've missed the first two episodes i think you should go back and check  
them out but the code for those first two is also available on github on the um there will be a link in the description  
that it's got branches for every single episode so if you're really mostly interested in the react side just go  
ahead and go to github and just check out episode 3 and you can start here but otherwise if you want to see what we did for the episode 1 we covered  
how to scaffold the cms so if you've never used the headless cms before or if you're interested in how to  
efficiently and effectively scaffold your data models so that editors of the website have full  
control you can build things with a layout builder perspective you have all your different types of content it out that's what we did in the  
first episode and in the second episode we went into the actual like scaffolding of the react  
front-end side not really from a visual perspective but we went through and we installed all of our dependencies  
we got the page templates that we need we went and fetched the data from the cms and we took a quick pass at styling the  
base features of the website like the baseline grid and typography things like that  
so a lot of good stuff has already happened in the first two episodes but i'm really excited about this episode  
because we're going to start making things look nice we're going to go through the header we're going to go through the mega menu itself  
and we're going to go through the footer and this is going to kind of frame everything for the site and we're going to build a lot of  
components that we're also going to use elsewhere so like for example in the modal the mega menu itself  
there are going to be some cms links that either need to link to like an internal page with the next  
link component or they're going to link out to external urls like social media etc so there's going to be a lot of good  
stuff we're going to start to really make some progress on the front end and if you ever wonder kind of like how to  
best architect your react app as a developer some other frameworks like like angular pretty much impose everything on you but  
the tricky part about react and if you ask me the beautiful part about react is that  
it doesn't impose those constraints on you so as a developer you're like well how do i organize my project if react  
doesn't care this this is going to show you a lot about that it's going to show you a nice well-structured way to organize your  
components and how they're all going to work back and forth and how to promote a high degree of ui  
reusability and this is the stuff that i nerd out about if you did skip those first two my  
name is james i've been a designer and full stack developer for about 12 years something like that i  
don't know but i started like when i was stupid so i've learned a lot i have a  
lot to walk you through but i'm also interested in hearing your opinions about how we scaffold our projects at trouble  
which is my design firm um yeah let's jump right in let's start with the header  
The logo \- an SVG React component  
okay so here's my terminal i've got two of them opened up next to each other just in case but i've got my  
code here and i've got the website here so first thing we're going to do is we're in the folder here we're going to  
yarn dev to fire up our next js server and also get payload up and  
running so we do we did use a boilerplate for how to combine  
payload and next js into one server which is super cool it's basically like  
i mean you run one command and you get your headless cms completely up and running and you also get an xjs completely up and running on the same  
express server that is uh something that i don't think many other headless cms can do  
but it's super cool so as you can see we payload booted up and then we got an xjs going  
so if we go over to our browser this is where we left off it is beautiful it's revolutionary i hope  
that um i mean we're almost done right we just have to make like put maybe a smiley face on here and call it a day  
nope actually the website is going to look like this so we have a good amount to do yet but  
um we're gonna start to pick up the pace significantly at this point so like i mentioned in the intro we've  
got the header that we're going to look at full fidelity we've got the footer full fidelity and we've also got the  
mega menu itself and we're going to make sure that we can link back and forth between pages we're going to introduce some nice  
effects here that figma might not be able to show that well but when we get into code we can make it happen like this thing right here this  
little graphic these little words are going to spin around and just kind of nicely animate there and that same component is going to be  
used down in the footer as well actually so there's going to be some nice like cohesion there with the design  
so we're going to build all of that today let's start with the header so where we left off in the code if i go  
back over and i open up our components folder and go to layout header we scaffolded it out  
but as you can see there is not a whole lot going on just yet so it's time to start making  
that happen now the first thing that we want to do is probably pull in some little graphics so  
we've got the payload logo here um we need to pull that in because we're going to want to use that and wherever you can as a web developer  
you should be using svgs or you should be using the smallest file size icons and  
everything like that that you can icon fonts nowadays if you're kind of you lived through 2015-ish  
icon fonts i don't think were ever a good idea so what we're going to do is we're just going to build all of our like icons and  
graphics in just a folder and we're going to make react components out of them so let's say graphics and let's say icon  
and make a new typescript file  
and it's just going to be a regular react component so react from react  
counts icon type it as react.fc equals and then we're going to return  
let's make it an h1 for now hello that is not an svg  
but it will be shortly so i'm going to just pop over to my other screen here i'm going to copy the payload icon out  
of the payload source code actually and this has already been set up i don't think we  
need to really go through this but here's an svg here's kind of what it looks like normally in code and you've got just a couple  
properties on svgs that you really need in react and that's usually going to want to set the width and the height and then you're going to want to set your  
view box to match those widths and heights and then you need this xlm ns xmlns  
and then you just have the actual meat of the svg and in this case it's just two paths so that's going to correspond  
to the small little triangle there and then the big triangle polygon thing so this is the  
payload logo if i just save it real quick and we try to go over to our header and import it i'm going to use  
intellisense you can just start typing a component's name and then with typescript and vs code  
here let me do that again there's a little secret so i'm going to open up i'm going to say  
icon and then intellisense is going to start telling me everything that i can import and if i don't finish typing it and i  
hit enter it will automatically import it for me so that's a huge time saver that's something that we should  
definitely all be doing you don't need to write out these imports from scratch every time just  
automatically have your your ide do it for you so boom there's the logo we got to change that to white though don't we  
all right fff ffff6 yeah one two three four five six  
all right now it's white and what we wanna do is probably just because now you're not gonna be able to see it in the browser if we hop back  
over here where did it go it's white let's add a red background to it and let's also  
let's also make this instead of a div let's actually link it because clicking on the logo as everyone  
knows since the dawn of time has taken you back to the home page so what we're going to do is we're going to create a link so let's say  
link and we should be able to get it from next js no nice don't know why but import link  
from next link and next js gives you that link right away and all we need to do is say  
href equals slash just to go back to the home page and then we can say let's say a  
href equals and whoops and then let's say class name  
equals we'll do that in a second and then let's put our icon inside of that  
so now clicking on that icon will take you back to the homepage  
but in order to style this we need to give it a class name which means we also need to get  
our styles going with a let's say classes.logo  
so save that and we go over here typescript is complaining because it doesn't have that yet but it will  
icon nope logo we're gonna say background will be  
colors give me intellisense boom that red and then we need some padding around it so let's say  
base should be able to auto import that as well yep nope  
let's say 0.875 how does that look  
boom all right now i want this to remain a multiple of our base so we might want to resize this  
svg itself so right now this is 25 pixels and if you remember from the earlier series  
i believe our baseline is let's see 20 pixels so 25 is not one of those  
multiples so if we go and add another class name to this class name equals classes dot icon  
and then we say icon width base height base  
that's going to be setting it equal to 20 pixels on a rem value but in order for that to work we  
need to wire up icon with a class name so let's go over here and let's say class name is a string nope  
let's do type props equals class name is optional and we say string and then we  
can say props here so then react will know that classname is an optional property and  
what we can do is say class name equals classname and that will either be undefined or it will be  
a string so going back over here going back to our browser website it's looking pretty small maybe  
we can do base 1.5 there for the height or for the size  
let's try it and then we need to shrink down that logo itself yeah so that's looking a  
little bit more proper how big is this 65 k  
set that to block okay so now we should have yep 65 and 65 so what do we do  
0.75 nice 60 60\. that looks good is that how  
tall it should be in the mock up 20 40 60\. nailed it okay so we have a logo and it's clickable it'll take us to  
the home page  
Animating the hamburger button  
okay so now let's replace this button here let's say that we in the mock-up i think it calls for a  
three-line hamburger button yep so it would be nice if we could animate  
these little lines and maybe turn them into an x like everyone has seen before it's like the i mean it's not too hard to do but it does  
include some some css to do that and i don't really think that belongs right in the header component so we're probably  
going to abstract that out into its own little graphic that can handle its own active and  
default states that way this header file doesn't get too complexified but what we can do because it's going to  
be a clickable element for accessibility reasons you should be using semantic html so i'm going to say button type  
equals button and then we're going to say let's give it a class name of classes.menu  
button and then we're going to close it and inside of here let's just stub out a new component called hamburger  
like that now we need a class for menu button otherwise this is going to yell at us  
nothing in it for now and then we also want to stub out that hamburger button itself so where should that go maybe we should  
just put that directly in the header folder because it's not really going to be reused so i could put it in the graphics  
folder but i'm going to put it in the header folder just because it's going to be specific to the header so i'm going to say  
hamburger i'm going to make a new file index.tss  
tsx okay counts hamburger react fc equals  
like that and then say const active equals false because it's going to need to be either active or inactive and then we're going  
to return just like hello i always go for the h1 i don't  
know why i do that  
then over here auto import just by deleting a letter and then hitting enter  
it's kind of a little shortcut so i think that the header should really  
be responsible for setting and closing the hamburger button itself and the menu  
so we should probably keep the state of if the hamburger is kind of like animated as default or as  
open we should probably maintain that in the header because we also have to build that entire modal out so for example if we hop over here  
you can see that that icon there kind of turns into an x and then the modal is open so we have  
to scaffold out this modal but we also have to maintain the state of that button somewhere and i think we're going to do  
all of that right in the header because the header is really what's responsible for all of that at the top level so i'm just going to  
say let's say const well what we're probably going to want to do is just scaffold out the modal  
itself actually so let's do that and let's let that modal status be the state of the menu so like i  
set up in the first episode we have faceless ui modal and all i have to do is say const  
modal equals use modal and my intellisense is not working right  
today boom okay and then with this modal  
package you have a couple different things that are available to you just from this one hook you can say current modal and that's going to give  
you the the name of the current modal that's active and then you can get some helper functions like close and like  
toggle and open and so we're going to grab toggle and now we can say hey let's just write  
a comment for what we're trying to do we're going to say hey if the current modal  
is equal to menu then the menu  
is active and the hamburger should render as an  
x otherwise just render the regular  
hamburger icon so let's say what's our modal slug let's let's say  
const menu slug equals menu yeah and then let's say  
const menu active equals current modal equals  
menu slug so this is going to start to make a little bit more sense in a second but now menu active will tell us if this  
hamburger should be active or inactive and remember that hamburger is going to be responsible for animating itself  
we're going to kind of consolidate all that responsibility right into that component so let's just say let's give it a prop called active  
equals menu active okay  
save it and let's go into our hamburger file and let's give it some props so type props equals  
i like to write props out above the component because that allows any developer coming in to just see  
at a glance what the um props are for that component and it promotes like a high readability and a  
high reusability so i'm just going to say boolean and then we're going to destructure that prop active  
and then there we go now we don't need to have that in here but we are gonna need  
some styles so let's scaffold that out real quick  
all right i'm not gonna lie that took me a minute to scaffold out and i never have a very  
easy time with hamburger buttons even though i've done it like a thousand times it always throws me for a loop so to  
save you from infinite boredom i just fast forwarded and did all the styling and the rest of the scaffolding  
but i am going to walk you through what i did and it's going to be better this way trust me so going to the going to the header file  
i had to make a couple adjustments here so where we left off in the header file we were storing the menu active state  
by using the modal itself to say if hey is this modal active okay then yes the hamburger should render as an x  
but if it's not active then just render it normally but i added an on click to this button  
here so that when this button is clicked that's going to toggle that modal and it's going to use this menu slug up  
here so when you click this button bam that modal is going to be active as far as the modal is concerned  
and so then the the hamburger can then know to render active and the other thing that i did was i  
also styled this button so we have classes that menu button and i'm passing in menu active to that  
button as well so let's go back to the hamburger first now we're going to have active or not  
active and you'll be able to see that these lines are going to animate differently based on the state of the  
button so if i go over to the mock-up i'm going to show you actually kind of like  
in detail what's going on with this hamburger icon let me copy it and then let's just harvest it out over here so there are  
three lines here right but there's actually four lines in the svg there's  
let me zoom in even further here there's actually two lines in the center so there's four lines overall this one  
is just going to animate away and up this one is going to animate away and down this one's just going to  
rotate like this and then the other one behind it is going to rotate  
so here let me do this paste one's going to rotate this way and one is going to rotate that  
way and then boom you've got an x this is figma i don't know why there's their strokes don't always line up in the  
middle that really annoys me but that's a topic for another day but anyway so you can see kind of the animation tactic here so we've got four  
svg lines the two on the outside are going to fade up and down  
and then the two in the middle are just going to rotate opposite to make an x and then we're going to be good so if i  
go back over to the code this is the first one it's going to animate up and out this is the last one it's going  
to animate down and out and then these two are just going to rotate so if i show you the css over  
here i'm going to pull this over next to this file if i can vs code thank you  
all right so hamburger we've just got it sized line one we're setting this equal to an an um  
function that's the word thank you and we're using that active prop to either say  
hey is your opacity if you're active this is the first line remember so it should fade out so if it is active then set  
opacity to zero otherwise don't set an opacity just let it be one and we're gonna translate we're gonna  
move it up negative point five base if it's active line two like i said that one's going to  
rotate and line three is going to rotate the opposite way and line four is going to fade out and  
move down by base 0.5 so it's nice and kind of like  
symmetrical here but you can also see this generate line styles i wrote that function because a  
lot of this stuff needed to be applied to every single line and i didn't want to have to rewrite it  
and i also needed to make a way that like generate line styles could be  
called and then each different line could still have its own styles be passed in so you can see  
i'm passing in the individual styles and then i'm also adding my own styles  
so that's pretty cool got the code for the the hamburger here we got the  
css here if you have any questions about this let me know in the comments and i can talk you through it more that did take  
me a minute and i ended up cutting out all that from the video but there's one more thing i want to show you before we hop  
over to the browser i also styled this menu button itself  
because the hamburger is just the white svg if we go to the mock-up you can see the  
hamburger itself is just these lines but we also have this container out here kind of like we did for the header  
itself like there's the container for the red background and then the svg inside same thing for this menu button on the  
outside so what i did was i added or use this class name called menu button and then we go in here we look at  
the css for that pull it over here the css it looks kind of complex but it's really not too bad  
all we're doing here is we're using the prop menu active we are saying background gray  
set it a transition size it center that svg inside of it with  
flexbox so display flex align vertically center justify content aligns horizontally center  
border radius is 100 so that we get a nice circle we turn off the border but here's a  
trick we have a box shadow and right now it's just zero but when we when it's active then we're  
going to be able wait oh nope here we go so there is a box shadow  
but when it's active it's going to be a color of antique and when it's not active it's going to be a gray color so  
this button isn't going to change sizes the reason i did this is because if you have a border and then you want  
to animate like a three pixel border that's actually going to resize the button itself borders add to the size of  
items or on the box model so if you use a box shadow you can keep  
that menu button to be perfectly sized how you want it and still animate in and out a border  
so i did a couple more things here and then i'm going to show you what it looks like i set up a stroke width variable  
that will be reusable i added a sizes.ts and this is just three pixels it's going  
to be reusable for everything throughout the site whenever we have like a stroke they should all be pretty similarly sized  
to be consistent from a design system perspective and i made that file i just dubbed it  
out that's the first size there will probably be more and then i also imported a new package  
called color which is a javascript package you can get it off of npm  
and what that allows you to do is it takes in a hex value like a variable and it allows you to run some functions  
against that hex value or rgb or any hsl any color  
pattern you can actually just it's kind of like sass how you can do that in sas but this is the javascript way of doing  
it so we use color um honestly it's not my favorite but it's the best that i've found so far  
so if anybody has any recommendations there please let me know  
anyway popping back over to the browser here you can see the menu button is styled if i click it it animates nicely and it  
gives you a different little border radius there and if i can zoom in maybe yeah let's do that click it you can see  
that it's a nice subtle animation the top line fades out and up  
the bottom line fades down and out and the two middle lines just rotate that's it they were always visible they  
were just sitting perfectly on top of each other so you couldn't see them now that's pretty nice  
Retrieving menu global data from Payload  
all right so now that we have something that looks relatively similar to the mockups in terms of the header itself  
we're going to start working on the mega menu itself and the funny thing about that is that this is the first time we actually need to  
grab data from our headless cms payload and render it on the page  
so if you remember from the first episode we have our database all set up we have payload  
running in the same node process so all i have to do is go to localhost 3000  
admin and bam here's payload if you are joining us for the first time i am one of the founders of payload and  
we built it because there is literally no other headless headless cms that does what payload can  
do it's built from a developer's perspective it gives you everything you need and  
nothing that you don't and it's fully customizable all in typescript so like for example if i log in and we  
go to let's say the global let's go to the mega menu you can swap out any of these components  
with your own react components if you want everything is completely editable you get reusable authentication  
you get internationalization out of the box so you can localize all of your content built in right away local file upload  
and it's locally hosted as well so it's not a third party sas that you need to pay for  
you just download it install it with npm and put it wherever you want and do whatever you want with it so  
it's extremely customizable it's extremely developer friendly and in my opinion it is way more powerful  
than anything else out there on the market this whole thing is going to hinge on payload being able to  
build with layout building components and just really give the the content editors a lot of  
flexibility and freedom to author highly dynamic content this mega menu is just one of those things this is  
relatively simple but as you'll you'll see further on when we get into layout blocks payload is really  
gonna help us out in a big way so we have our globals already scaffolded out  
here's the mega menu itself this is already all set up from our first go around but we have our approach which links to  
a page called our approach we have who we are which links to who we are we have studies which is a custom  
url that links to slash studies you'll see why shortly and then we have a custom url  
again that links to slash contact so what we need to do is fetch this data  
and then loop over it in our mega menu and then display it like this  
so if we go back over to our code we go to the header oh let's actually back up one step let's  
go to the app and let's look at where we are actually fetching these globals because as you know payload is a  
headless cms so it opens up rest api it opens up a graphql api  
and it gives you a local node api so if we wanted right now we're fetching  
these but we could just say payload.find global and grab it right from node we don't even have to go to the http layer  
but we've already scaffolded this out and it's it's kind of like this so that it shows you in a more often context how to use  
payload so what we're doing is we're fetching all three globals and this is a really  
cool pattern for any developers that are maybe somewhat new to async await or get confused easily when  
you look at promises what we're doing right here we have an asynchronous get initial props for the  
app and because all pages are going to need this global data that's why it's called  
global every page has got the header every page has got the mega menu so in xjs you don't want to have to  
write that in every single page template so we're writing it in the app get  
initial props and right now in our case we have three different globals inside of payload we've got the mega menu the footer and  
the social media and what we're doing here is we're saying await promise.all and then we're giving it an  
array of promises so each one of these fetches is a is also an asynchronous function that will  
return a promise so what we're doing is we're saying fetch get from our server url  
slash api global slash mega menu and then when that comes back return the res.json which is also  
a promise so promise.all is going to run all three of these next to each other if you didn't do that  
you could also say await fetch and then await fetch and then await fetch but guess what's  
going to happen your code is going to wait for this one to come back then it's going to wait for this one to come back then wait then return and if you run  
them in parallel like this your development experience is going to be a lot faster  
and a lot more rewarding because this is ultimately going to be rendered out as a static site anyways  
it doesn't really matter but this is going to just keep your development environment up and running fast and it's just a cool  
pattern to know about as a developer as a javascript developer we're just running them in parallel so they'll all fire at the same time  
they'll all come back when they will when we have all three of them boom we're good to go it's super cool but let's go look at what the rest api  
looks like if we just pop over and we go to local host 3000  
slash api global slash mega menu bam there's our json just like that how  
fast did that load let's see just for the sport of it let's go here and let's see i mean we're local but it's pretty fast  
wait this is actually could be faster because i have my little json viewer if i go here wait a second  
whoa i'm in incognito and this thing still worked i thought it would disable my plugins  
this thing slows it down a little bit but the rest api is super fast so you'll have to believe me on that anyway  
going back over here we have these three different sets of data already and if i scroll  
up to our app i've got them from app props which comes in as the next js props argument for your app  
component and what we're going to do is we're going to thread them through to the header so the header is receiving the mega menu  
and it's receiving the social media because that's where it's going to need to be rendered so going into the header  
you can see where's props we've got all this set up already  
whoops give me a second here  
we've got our props set up so that mega menu is typed as the mega menu type social media is typed as the social  
media type and those things come from globals so when we scaffolded this out we already set up our types  
so our header knows exactly what types we have available to us and that's a really clean type script  
pattern so our so for example if i go over to our  
globals folder and we go to mega menu here's where we define our payload config  
and then here's where we define the type and we just export both of them so everywhere wherever you're using this  
mega menu you can get access to this type and you can just change it in one place and it's going to be beautiful but here i can go mega menu  
and then i can go social media yep boom intellisense gives it to me automatically and then what we're going to do is we're  
going to start to scaffold out the mega menu itself so looking at the mock-up  
Building the main menu  
we've got a grid and a grid container if you remember from episode 2 we did  
build out a reusable utility called grid container and that's going to give us the centered  
max width for the grid and it's going to be able to just allow us to more quickly keep everything consistent  
throughout the whole app so we're going to want to use the grid container inside of this mobile or this modal we're going to want to use  
the css grid and then we're going to want to do let's say what is this one two three four five six seven eight nine nine  
columns or maybe we'll do eight and then just give one as a spacer and then we do three for the social media so let's go scaffold that out real  
quick let's say the first thing we need to do is actually render a modal and this is uh  
something that we haven't looked at yet but this is from faceless ui modal and i just auto imported it  
and when you render a modal with faceless ui all you need to do you can put it wherever you want but all you need to do is just render  
the modal component and give it a slug so we've already got our slug up there it's called menu slug  
and let's just give it an h1 and test i don't know why h1 is my go-to  
but back over here click it  
oh i know why because we didn't render our modal container yep  
okay so back over in the one thing we forgot to do is we forgot to say hey modal where should  
you render so we need to actually add that probably down at the bottom of our app just modal  
container yep bam and now this is where the modals will actually get portaled into and react  
so the mo the modal itself is not going to render inside of the header the modal package will automatically  
take it from here and put it directly underneath all of our content for us so now if i go over here click it  
there we go test beautiful looks like garbage i love it  
so back to what we were originally trying to do let's start building out the structure for this modal we're probably  
going to want to give this a class name as well so we can target it so let's say class name equals classes  
that menu and then get rid of this stupid h1 and we're going to give ourselves a grid container remember  
and that's going to set us up for that max width that we talked about close it how come it didn't auto import  
that there we go we need a grid so that's coming from the  
faceless ui grid package which is super cool and then we will render a cell and we're  
going to say cos equals what do we say 8 and then here is where we're gonna map  
over the mega menu itself okay h3 key equals i  
and then let's say link.what label typescript is really helping us out here oh you know what else we should do we  
should give this html element equals nav so the  
faceless ui grid allows you to specify what html element your cells and your grid will be  
rendering as and in this case we want the cell to render as a nav element to make sure that our html is  
semantic so if i go over to the browser and i go here let's go  
like that boom we've got our links and they're not they're not clickable  
yet they don't go anywhere but the content is clearly coming from the api and so if we went over there and we  
changed that content in the cms you would see it change here which is pretty cool  
so from there what we're going to need to do is probably start styling this so that it doesn't look like garbage but  
before we do that i'm going to continue on we're going to do another cell for the social media  
and then we're going to instead of mapping over the mega menu we're going to map over the social media  
dot links and again we're going to do the optional chaining dot map and we're going to say  
what do we have url and label here right let's check social media yep links url  
and label okay why is it yelling  
i don't know let's pretend that it's not and then see if it goes away on its own it did holy all right so now we're  
going to return and then we're going to just say label for now  
so we should have what do i got oh i need to wrap that in a fragment  
or we should just this is just going to be an anchor because it's always going  
to be an absolute url so we can just say class name equals classes dot secondary nav item let's say and then we  
also need an href equals the url and then target equals blank to open in a new tab and  
then we do rel equals no opener no referrer  
move that cool i believe  
that should be it go here got it not exactly right  
but we're close what should this cell be cause equals three  
there we go that's looking better so these will need some styling of their own but we'll get there  
so um yeah the next thing i think if we go back to this mock-up  
these are sized specifically i think it matches this 2432  
large body and we don't have a component for that yet so we should probably make a component for like a large body like  
just in one place that we can reuse because it's not a paragraph it's not a heading it's it's a large body  
typography component so if i make a new folder called type and then i make a new folder here  
called large body index.tsx import react from  
react  
Building a CMSLink component  
i'm gonna fast forward because i don't think this is necessary  
all right so got the large body type component all set up and it takes a class name  
and it will automatically join it with the base class name from the component and  
then just simply render out children so like you can render an h1 you can render a paragraph whatever  
now we can also render large body just as if it was a type typography component so there you go  
i did stub out a type declaration in the type css file for large body as well and what  
that does now we're just going to be importing it in the react component so there's like levels of organization here  
there's the base css for whenever we need to use that elsewhere but for cases where we want to just  
render out a component and have it be perfect we have this going on as well so that's  
pretty cool now it's time to actually make these main nav links turn into actual links and this is going  
to be an interesting part of this video because there's going to be a lot of places throughout this app  
that will reference links from the cms and if you remember back to the earlier  
episodes let's see if i can find it fields link we have this link field group  
and this link field group has its own type where you can actually specify a page or a custom link  
and then you give it a label a page in the url and this is used all over the place so  
for example if i go back over to the web browser and i go to payload  
our payload configs use links on very many places you have it here in the footer you have it um on  
individual layout building blocks so if i kind of drill in and i look for maybe one of these blocks has a link  
let's see hmm one of them does  
maybe the call to action cta grid yeah like a link here they're all over  
the place and it would be nice if we could build one react component to map one to one every time you ever see a  
link come from the cms so you're not willy-nilly just saying hey where should this thing link to you  
no you you import the group of the fields called link every time in your cms scaffolding  
and you know it's always the same and so if we can make a react component that fits one to one with this link  
then we're going to be in business so that's what i want to do now we're going to use this most of the time  
in place of the actual next js link because ideally this is going to be more  
of a structured approach and it's going to be mapped one to one exactly what we want it to be so let's create right here components  
let's just say link and next.tsx  
all right so basically what we're doing here is we imported the link type from the actual link field group  
and we just added a class name but from there all we're going to do is say hey is this  
a type of page okay then render the next js link or if it's a relative url then we know  
it's going to be rendered pointed somewhere at our app so if it's not maybe a page maybe it's a case study or similar  
so if the first character is a slash then we know it's a relative url so in that case we're going to render  
the next js link and we're going to set it up appropriately so that if the type is page then take the page.slug  
otherwise just send it to the url and down here we just have a regular anchor link but  
we can now use this if we go over here and we type in link and we can import it  
and then we just spread link  
but i'm pretty sure i need this needs to be next link because the the logo link is just the  
regular old link but this one needs to be our special link so that's going to be the convention we're going to go  
if we have that's not good  
there we go if we're going to use the next link because it's going to be less likely we're going to call it next  
link but if we're going to be using our link we'll just call it link  
so there we go so now if i go back over here these should all be links yep console is yelling at me because i don't  
have a key so we got to do that there we go  
okay and yeah so now i think everything is wired up  
these are linked oh let's get rid of that top margin on that first h3 what is that h3 yeah top margin okay so what we're  
going to do is we're going to say style equals margin top i  
equals 0 0 or undefined  
should disable that top margin on the first one perfect all right so let's style this i'm going  
to jump ahead and just blast it out and then i will sync back up afterwards and walk you through what i  
did okay so i just uh blasted through some  
css css is i think i've said this it's my least favorite part of web development i really enjoy javascript i really enjoy  
the logic but css is kind of like if you do it for 10 years it gets old and i wish there was a  
better way to do it but anyway so that's why i skipped forward i'm still going to take you through what i did like i said so  
we have a primary nav item for the link itself for the the mega menu itself and then we have a  
secondary nav item for the large body link for the social media and then we have a menu class on the top  
level modal itself so if i go over here and i show you exactly what that translated to  
the menu has a background of color gray it's got padding which i actually did something  
interesting i took the header itself and i did position fixed and now the header itself is going to be fixed above  
everything at all times but the problem with that becomes oh hey wait i need to know exactly how  
tall that header is so that i can add the padding for that header everywhere else and luckily because we  
have a pretty rigid header design system we know exactly the header height  
is going to be one two three four five six seven base so all i have to do  
i go over to my sizes in my css folder and i just defined a reusable header height equals  
base seven and so now we can use that wherever we need and we can add that padding to watch out for the header  
so i just uh fixed the header i set it so that it's above the modal at  
all times and then i go down here and the menu itself  
i've got padding top header so that's going to make sure that nothing ever interrupts the header space  
set it equal full width full height turn off overflow and then i shrink up that padding just a  
little bit on mobile nav links i've just quickly went through  
and uh given a quick pass to the styles one thing i have pointer events none and all now what that's going to do is  
because the header is fixed up at the top we should turn pointer events off meaning that it's not  
going to hide any clickable element because the header is translucent right so when things scroll behind it like  
this maybe this was a link you might still want to click on that link so you should be able to click through  
the header but then everything inside of the header you need to turn pointer events  
back on so that you can actually click the anchor links inside of the header itself so that's what i did there moving on  
that's why this is here and a pointer events all boom done primary nav item we colored  
them antique on hover we colored them blue secondary nav item they're all white  
on hover we color them blue as well and we also added transitions so transitions i've put in a single spot  
in the css folder just like everything else is just a set of variables and all this is is going to be just a  
collection of baseline transition values that we can use now the last thing  
if i go over to the app.tsx the modal provider package actually allows you to animate your  
modal windows as they come in and out but you just do whatever you want with c css so what i did was i gave it a class  
prefix called payload that's just it's a payload project whatever  
and what this is going to do is the modal package is actually going to set up bem classes for us block element modifier classes and  
that way we can target these things with css of our own and style the modal windows and give them a transition time  
so what that did i if i pop over to the app.ts in the css folder i just specified a  
couple base styles so by default modal items  
have zero opacity but they have transitions for opacity when you enter the transition will be set to one  
opacity and when it's done it will stay one opacity so if i pop over to my  
browser and i show you what that looks like click on this fades in nicely click on it out and it  
goes away nicely really nice that's it  
The animated "Let's Talk" SVG call to action  
okay now for the first little bit of real fanciness that we're gonna work through let's build this let's talk call to  
action and what this is going to be i'm going to try to break it down mentally before  
we start building and then um i'll kind of try to fast forward through the boring parts again but i  
want to talk theoretically about what we're going to do here so if i'm looking at this it's kind of  
like it's as you can see it's not perfectly lined up to the grid and it's got to be kind of bottom positioned  
so i think we're going to do a position absolute with this let's talk call to action and  
when i hover over it it would be nice if this arrow kind of went upwards a little bit or something and then this background svg should just  
always be kind of slowly spinning so that like if i show you this consult with us get some advice just chat start a  
project so we're going to position this thing absolute the whole thing  
is going to be clickable to the contact page and it should have some nice hover effects  
and we have to be mindful of the fact that this is going to be highly reusable we have to we have to also render it in  
the footer and then maybe someday in the future we're going to have some nice like in-line call to action that they can add into the site itself  
that might also use that so let's let's try to make a new component let's call it let's talk and we're going  
to import this svg we're going to make the link and then we're going to position it absolutely in the menu first so let's go back up  
here i've already got the svg rendered out so all we need to do is go here  
and create a let's talk component i'm going to fast forward and just get  
this scaffolded out quick  
all right so everything is all scaffolded out it's super nice i'm going to show you first and then i'm  
going to go through and see what we all did but if i open up the menu you can see this thing down here is  
nice and uh position absolute down in the corner and when i hover it it kind of brightens  
up the arrow moves you can see that the svg in the background kind of glows a little bit and the whole thing  
is a link to the contact page super cool so how did we do it  
first thing we need to maintain the state of if the let's talk component itself is hovered or not so  
this component is going to maintain its own state and we're going to pass that is hovered right through to the use styles  
react jss so we can use that as a variable to show and to set css  
appropriately one thing that i did here and i don't know if i've talked through this or not at trouble we use this a lot as like a  
convention like an easy way to join class names and it's really concise and i like it a lot but what it is  
is if you have class names and you're not sure if some of them are real or not you want to filter them out so you only  
take the ones that are true truthy so if classname is an optional string and it doesn't get passed in  
then you can filter it out and then join these classes by an empty string what that will do is it'll create a nice  
everybody knows the css class names have to be separated by a space but you can't just pass an array into class name you need to actually filter  
remove any of them that are falsy and then join by by a by an empty string that's just  
about as concise as we can get it i would love if anybody else has a cleaner way to do that  
without using external packages just something that's nice and simple this is pretty much what we normally do  
at trouble just filter out the ones that are falsy and then join them with an empty string or the space  
then we have the svg itself this is exported i mentioned that i already had that prepared and then what we do here we just give it  
a class name and then we give each path its own class name these are all the the letters like  
consult with us start a project etc so there's a lot of them but it was generated by figma scroll all the way  
down and then we have the link itself and then on mouse enter we set us hovered true  
on mouse leave set is hovered false and then i created another graphic  
called arrow and this time i gave the arrow a prop that takes the color  
and the class name and then i just have the heading itself so this arrow component i want to stop  
there and i want to look at that really quickly because it's got some cool stuff like i said before with the icon note  
here we did not let it take a specific color because right there we kind of figured that it will always be white  
but with the arrow itself this component is probably going to be more widely used meaning that we're going to need to be  
able to give it specific colors so what i did was i created a type i put the type right in the css file because  
it makes sense to keep everything nice next to each other and this type is reusable now and no  
matter where we are we can reuse this type to say hey if you're ever authoring an arrow component  
boom you get all your types and you know exactly what colors are available to you so inside of the arrow css  
we just set the path stroke to the color that was passed and now this arrow component is nice and  
dynamic and you can colorize it no matter where it is and we're using it in this let's talk by  
passing it antique so if i said white why is that not giving me  
i thought it would there we go so you get the auto complete and you can  
see all the different colors that it supports we want it to be antique so we set up  
that arrow we typed the color options we have the let's talk component built out  
and then if we go over to the header all i'm doing is just rendering it here and then the css for that is fairly  
straightforward all it is is position fixed so it's always going to be fixed in the same spot  
we're positioning it with right and bottom so that it kind of overlaps off the screen and then for smaller screen sizes we're  
going to adjust that position just slightly because we we need to kind of make sure that it's in the proper spot all the  
time and then for the cta itself we pass it the actual widths so we're shrinking it  
down and one thing that i really don't like about react jss and css modules and any type of like css  
like this i don't know if there's a way to avoid using the important keyword  
because as you'll see in the future we're overriding the styles that are built into that component  
because we we have the base styles here but it's actually a different size in the footer of the mock-up and we need to be able to  
override its default styles and specify how big we want it to be  
so i am using the important keyword i don't know if there's a better way to do that but if anybody has nia because  
it matters on where you load these components like is your header style going to be loaded first and then  
the let's talk cta style is going to be loaded second like those things with jss just css in general like the order  
of styles being loaded that still matters and that's super annoying but i think i just fixed it by going important here so  
at this point i believe our menu is complete all right  
Building the Footer  
last thing for this video the footer so first let's talk about strategy  
and then we'll go through and we'll see if we need to scaffold anything additional out but i believe this should be fairly  
straightforward i'm going to skip through the css again but we can get the structure all out and in place and in a prior video we  
already went through and we set up our layout so i'm going to show you something really quickly  
our our page template the dot dot slug this this is the next js template  
and here we have a template component and the template component is what's actually responsible for  
rendering the footer so if i go and i show you close this up go to layout template  
template is a very simple component but i'm going to show you something really quickly in an abstract way i'm  
just going to touch on this because we'll get back to it but the reason we're rendering the footer here in the template rather than just  
kind of how we did with the header we put it right in app.tsx that's very deliberate  
and the reason that we did that was because we're going to eventually introduce page transitions and the way that page  
transitions work so let me show you something let's say you have a page and it's this tall and you have  
your header here and let's just put this to a little bit darker and then we have the footer down  
here and then all this in the middle is the actual page content itself so when you transition for a page you  
want to actually load in the other page behind it and then kind of show and hide the pages  
as they both enter and exit so if a page exits then it's going to  
remove itself from the dom and all of a sudden the footer is going to blink all the way up top here if we rented  
if we rendered it in the app and so you would actually see the footer kind of flash upwards for a minute and  
say hello and you don't want that right and then when the new page loads let's say it's a different height let's say it's like this height  
then the footer would go back down to here but in instead of that what we're going  
to do is we're going to actually unmount the entire this every time so that rather than seeing that footer  
blink up when the page unmounts it's just going to look like that for a minute and then it'll come back in with  
the next page template so that's why we've rendered it in the template component itself so our views  
are responsible for actually rendering that and inside of the footer itself the footer will unmount  
and remount every time the page or the route changes that'll avoid that kind of blinking that  
we're talking about so i know that because i've struggled with that many times there's probably a couple different ways to do it but this  
is the way that i like that we've found in the past because once we get to that point it's going to be a big hairy mess page  
transitions are still not a very easy thing in web development so we're going to try to keep it as simple as possible that is one of those  
steps so now let's look at this so we know we have content that's lined up to the grid  
just like we did in the menu we're going to absolutely position this let's talk call to action but look at this background color this  
is actually really tricky you might not think so because it looks simple but if i was to hijack  
this let's bring it down here and what am i at the bottom of the artboard  
wow all right so if i didn't have this background color  
let me detach so i can go crazy here let's see  
if i did not have the background color it's my first day working in figma so  
give me a minute oh okay if i didn't have the background color everything would be lined up to  
the grid appropriately right so we kind of don't want the background  
color to influence like we could wrap this in a div yeah and it would be like  
yeah we could put all of our content inside of a gray background but then the grid container would be offset  
because this is not supposed to span 100 of the width so this is very abstract but i think we  
need to set ourselves up for a success here because we need our content needs to be in a grid container just like everything else and  
that needs to be the same width as the full screen so what we're probably going to do is  
we're going to set up a typical grid container we're going to put all of our content in that grid container just like normal  
and we're going to we're going to say just hey render this but then the background color itself we're going to  
position absolute and we're going to put it behind the content so that we can fake this gutter  
because as you see a lot of these components have this same gutter going on like it would be nice if we had one  
component that would just be responsible for rendering this space and taking the gutter into account  
for all components so we can maybe make another reusable layout component for the gutter  
we can use it for the footer but i don't want it to impact this grid so let's go over here and let's just  
stub out a quick gutter component and i'm going to put it in the layout because it's kind of like a layout  
utility this is going to be the first thing that we need to do for the footer  
whenever you have like full width elements on pages and you still need to  
line things up to the grid this is a common pattern that we use you kind of just you layer things so that  
yeah one of the items might not be positioning you or might not be interrupting your  
positioning but you still need to have the content be positioned you're going to see this in a lot of these layout blocks but this gutter  
component let's go over here just scaffold it out  
oh let's say props equals and then const gutter  
we're going to have class name  
i need an equals there that's what it's yelling about  
and we're going to need some styles  
okay and then we're just going to return and the thing about this is i think we're going to need to like what if we  
had like left and right and you could just set those equal to boolean so left  
right boolean so now we can say left let's set these  
equal to false by default so you have to actually say gutter left  
and right when you render this and then also we're going to have children because we're going to be able  
to wrap some things in here so let's say div class name equals let's do that same pattern where we have an  
array.filterboolean.join children right and then here what do we  
need to do inside this class name first one's going to be class name and then we say left and and  
classes that left right and and class is that right and what  
this is going to do export default gutter  
what this is going to do is it's going to say remember how this is filtering out any falsy values so if left is true then we output  
classes.left but if right is true we output classes that right but if either of these are false  
then it's just simply not going to get the class names  
and this might make a little bit more sense in a second here so  
hang with me  
okay we say left and then we say right  
all right now looking at this mock-up this size might be kind of  
reused heavily throughout the whole app like it could be used for this padding here oh yeah look at that it is designers  
look at that so this size is going to be something that's pretty common so i think what we're going to do is we're  
going to actually go and make a new style sheet for oh we have structure here  
let's just add some things here like export const let's say gutter let's say  
equals what do we want base what was it one two three four five six seven  
okay okay now we have this reusable gutter so  
we can say padding left is gutter  
and then right padding right is gutter now this seems really trivial  
but in the future it's gonna get a lot nicer to use so let's go back over here now  
all it is gonna all it's gonna do is just have padding that's it  
so in our footer we're going to fake it we're going to say let's have two elements inside of here  
maybe footer itself can be positioned relative but first we're going to have gutter  
and then let's give it a class name of like bgrap or classes that bg wrap  
and then we're going to have a div class name equals classes.bg so this is going to be our absolutely  
positioned background element and then above that we're going to have  
a div or let's say a grid container right because this is we need a grid container we need a grid  
and then we need columns so i'll say grid container  
grid cell and how many cells do we have  
one two okay so this is the first cell and this is the second cell and this is going to be  
calls let's say what is it maybe six one two three four five six and then one two three  
four five six perfect so both of these are going to be cos equals six  
and then in here test test okay now we need to give ourselves  
these classes so vgwrap bg  
and then if we think about this the footer is going to have to be positioned relative remember  
and then the bg wrap is position absolute and this is gonna be top zero right well  
hey top right bottom left trbl look at that this is gonna be z index one  
and then bg is just going to be well we need to give it the background color and then we need to set it to the height 100  
so first is height 100 because the div will by default not have any height  
at all so we need to just say hey fill up whatever space you have available and we'll say background will be colors  
enter dot gray cool  
i don't even know what this is going to look like right now probably nothing  
yep and you want to know why  
because we need to bring our actual content above that background color right now it was  
covered up by that so why don't we say like classes  
class name classes.rap  
can i not  
we need to add a class name to our grid container  
filter boolean join like that and then we need to give  
it a type so type props class name is optional string  
and then we pipe it through here  
so now this should stop yelling oh it's still yelling because we don't have this over here let me pull this over  
relative z index is two see if that works  
test you saw that right there you can see that those are actually there now which is good  
okay now one thing we haven't done yet we have to actually feed the footer and the social media globals through to the page component  
through the template and then to the footer finally so if we go here it looks to me like  
we've already got the footer and the social media going to the component so all we need to do is just add them to  
the types up here so we'll say footer social media and we can type them  
okay yep from footer did i get it no  
i need to say import type as footer type from  
global's footer okay and we need the same thing for the social media reusing our types  
okay and now all we have to do is just thread those through here so footer equals footer and social media  
equals social media and this is called prop drilling i'm sure a lot of you have already heard  
of that now it's not necessarily like the only pattern that we could do here  
we could also use context and we could just render like a global's provider of context at the app level and  
then any component anywhere could access the globals that would probably be a better pattern if the app was more complex  
but because this is pretty simple we're just going to keep with the performance reasons and just keep it as simple as  
possible so now we have to do the same thing and type the template  
so we're going to say just copy those imports and go up another folder right  
or is it two folders more yep two  
folders type props equals footer  
footer type and social media social media type and then we can say  
footer social media and then we can say  
okay now we just have to do that one more place in the footer itself  
okay and now we have  
nice highly reusable nice pattern performant because all we're doing is passing props  
prop drilling is annoying but it's also the it's more performant than having context where it's not necessary  
so now because we have the footer data we should be able to match our footer  
with the actual mockup so what do we have here  
here's the actual footer nav and then we have the social media down here so i'm just going to skip forward and  
actually render this stuff out and maybe do a little bit of styling and then i will get back with you in a minute  
okay nailed it so the first thing you're going to see in this footer is that i have a back to top callback that um  
all it does is it's basically just going to scroll you to the top of the window and if we go back to the mock-up you can see that's this little arrow so when we  
click on that arrow it'll scroll back to the top so that's what that first callback is there and then we go down we had all  
this this is just the gutter with the background then we have the grid container itself and if we have footer nav we're going to  
map over it we're going to put out a link which is our which is our cms link that we built so that's uh  
there's that reusability for you makes our job a lot easier i'm starting to pick up the pace  
because we have all these components built and from here on out it's only going to get faster we have all these  
things now it's just a matter of assembling them and of course we'll have more components to build as we go through the layout  
blocks but we're starting to really pick up pace here so then um the next column  
according to the mock-up is just uh some specific meta about the company and you  
could fill in the address you could fill in the email the telephone number all that stuff and then we map through  
the social media links finally we use javascript to get the current year so we don't have to change  
that every year right now it'll output 2021 but automatically next year we'll output 2022  
beautiful and then we have our cta wrap just like we did in the mobile that's  
going to be position absolute and then here's that button for the back to top button so when you  
click it it's going to run that callback it's going to scroll the screen back to the top and we're rendering that arrow that we  
made already and we're going to use some css to rotate that arrow because it did point right but now it's pointing up  
so if i pop back over to the the website bam we got the call to  
action it's beautiful it looks exactly like it does in the modal we've got all these links they hover blue when you are about to click them  
and everything is already responsive because we're using the grid so nice and easy there it is  
Outro  
all right that's enough for me today i am tapped that was a lot of development it actually took maybe like three or four hours but  
um getting the header in the footer right are like a significant part of any like high-end website  
and i think we did justice to that today i know i skipped over a lot of the css but trust me i did you a favor on that  
feel free to go back and look at the code on github and feel free to also ask questions about anything that i did move  
quickly through but um it is a beautiful day outside in michigan and that is a rarity  
so i'm going to go do some fun stuff it's also saturday so it's my time to  
shine at this point and the next two episodes i'm also just as excited about the next one we're gonna  
go into layout building blocks and we're gonna start building some parallax components we're gonna start using some media components from payload  
we're going to get really expressive and we're going to design the heroes and everything is really going to start to take shape  
but now that we have the header and the footer in place it's it's basically just going to be more of the same so the pace will be quick from  
here on out but it will be satisfying as well and then the last thing that we're going to do in the next episode or the  
two episodes from now is we're going to wire up forms we're going to wire up that contact page  
and we're actually going to submit email requests and we're going to build contact submissions into the cms itself so we're going to break those  
things out kind of like that two more episodes to go and then we're going to have a full website and it's coming along really well i hope  
you're learning i hope you're enjoying it and i hope you stick with us through the next two episodes  
also i hope that you try payload cms because i think you'll really like it it should unlock a lot of developer  
experience potential for you and your workflow and maybe even your team's workflow but if you have any questions about  
payload feel free to reach out to us we have that free license that you can just basically download payload and run it  
for free forever completely unrestricted we don't lock out any features or anything like that so  
if you're a solo developer and you kind of want to just kick the tires a little bit you don't have to pay for it you just download it and give it a shot  
so i would appreciate if you like this video take a look at payload and we'll talk to you soon  
