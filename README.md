# WAYS-Javascript
[WAYS] Write As You Speak - Javascript Edition
### WORK IN PROGRESS - Right now I'm building the basics functions, THEN I'll try to create a cool parser

- [X] Start a basic function file
- [ ] Think on how to parse stuff
- [ ] Create a grammatic to be parsed (multiple possibilities too)

Complex frameworks are all around and they're very cool.
The simple tools however are not added to them.
This first version (not WAYS but there must be a start for it) will cover all the basics of programming like loops, save and load data into localStorage and things like that.

In the next future when all the function are done I'll start to think how to make a cool parser line-by-line that can be write in plain english (yes, plain english is cool for non-developer or the tired one ;)

# HOW IT WORKS (right now)
```javascript
var obj = { "name":"portapipe","height":"185","hobby":"not programming"}; 

WAYS.loop(obj,function(key,value){
  console.log("The key is "+key+" and the value "+value);
};

/* You can storage objects, arrays and simple data! */
WAYS.save("Personal Data",obj);

/* The load tool restore the data of the type you stored in (object will return object, array return array and so on */
console.log(WAYS.load("Personal Data"));
```
