FIREBASE

a backend as a service
persist data
firebase.com

https://www.firebase.com/tutorial/#tutorial/basic/0
https://www.firebase.com/docs/web/libraries/backbone/quickstart.html


when you fork.. npm install  and bower install

setting up firebase proj with backbone
npm init
bower init
curl
bower install backbonefire --save
 answer 2
answer 3




gulp bower:assets


with jquery every time you empty() it removes the events as well as the content

view.delegateEvents(); - to get it working again.
instead of view.$el.remove();... view.$el.detach(); - removes stuff from dom but doesn't remove events

but backbone doesn't have a detatch 
if you're going to remove a view and add it later, use detatch jquery.. not remove 
