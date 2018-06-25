$(document).ready(function () {
    let number = 3;

    // call function one immediately by wrapping in () and adding ()
    (function one() {
        console.log(number);
    })();


    // call a second function after two seconds
    setTimeout(function two() {
        console.log(number * 4);
    }, 2000);



    // practicing setTimeout
    function getWords() {
        console.log("1st word: cheetah");
        setTimeout(function () { console.log("2nd word: macaroni") }, 2000);
        setTimeout(function () { console.log("3rd word: socks") }, 0);
        console.log("4th word: seafoam");
    }
    getWords();         // logs words in this order: 1st, 4th, 3rd, 2nd


    // count down from a number, when it gets to one, call another function
    function countDown(num, callback) {
        let count = num;
        while (count > 1) {
            console.log(count);
            count--;
        }
        if (count === 1) {
            console.log(count);
            callback();
        }
    }
    function done() {
        console.log("all done");
    }
    countDown(7, done);



    // practice with promise -- change true to false to see resolve & reject
    let globalVariable = true;


    // create a new promise
    let orderingChickenSandwich = new Promise(function(resolve, reject) {
        
        // set up conditions
        if(globalVariable) {
            let lunch = {
                sandwich: "chicken",
                veggies: "lettuce"
            }

            // resolve with lunch object
            resolve(lunch);

        // create a new error and reject with it
        } else {
            let noFood = new Error("no lunch for you")
            reject(noFood);
        }

    // log message and promise result/output for resolve and for reject
    }).then(function (result){
        console.log('promise fulfilled')
        console.log(result)
    })
    .catch(function(error){
        console.log(error);
    });

    // create another function to return the promise
    (function orderFood() {
        return orderingChickenSandwich;
    })();



// practice promise chaining
function numbers() {
    return new Promise ((resolve, reject) => {
        setTimeout(function () { resolve(1) }, 2000);
    }).then(function (resultA){
        console.log(resultA*2)      // 1*2 = 2
        return resultA*2;
    }).then(function (resultB){
        console.log(resultB*4);     // 2*4 = 8
        return resultB*4;
    }).then(function(resultC){
        console.log(resultC*6);
        return resultC*6;           // 8*6 = 48
    }).catch(function(error) {
        console.log(error);
    })
}

(numbers());

});