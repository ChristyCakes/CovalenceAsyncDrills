Full Stack Development > Lab: Async Drills

Expand All
Still Working  All Finished
Asynchronous Code Drills
Objective
Practice Asynchronous JavaScript concepts discussed in the video lecture

Setup
Make sure all the html has loaded before using JavaScript
Create a new project folder and connect it to a github repository. Copy this README.md file into it.
Create an index.html file and an app.js file and link the two together.
Async: Now and later
JavaScript programs are executed in chunks. Chunks that execute now and others that will execute later. Let’s explore that concept.

Create a function in app.js that will log a message to the console and return a number
The value returned should be stored in a global variable
Create another function that will log the result of multiplying the global variable multiplied by 4
Create a setTimeout function that will call the second function you created after 2 seconds
Callbacks
Create a function called getWords that will do the following:
log a word
log another word after 2 seconds,
log a third word after 0 seconds
log a fourth word
Before you call the function try to determine how the log statements will be printed in the console
Call the getWords function
Create a function called countdown that accepts two parameters: num and callback
Create another function called done that will log a message to the console
The countdown function should countdown from the number you passed it and when it gets to 1 it should return the result of the callback function
Call the countdown function and pass it two arguments: a number to countdown from and the callback function
Promises
Create a global variable and set it equal to true or false
Create a new promise named orderingChickenSandwich
If the global variable is true, create an object with two properties (key/value pair):
sandwich : chicken
veggies: lettuce
Resolve the object
If the global variable is false, create a variable and set it equal to a new Error
Reject this new variable
Create a new function named orderFood that will call the promise you made and console log the result if the promise is fulfilled or if it is rejected
Call the orderFood function
Chaining Promises
Create a new promise that will resolve the number 1 after 2 seconds
Then return the result multiplied by 2
Then return the new result multiplied by 4
Then return the new result multiplied by 6
Hint:

The Error constructor creates an error object. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error