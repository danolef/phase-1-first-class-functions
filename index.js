
// function receivesAFunction(spy) {
//     const spyfun= spy() 
//     return spyfun
// }

function receivesAFunction(spy) {
    return spy() 
}

// const returnsANamedFunction = function() {
//     const newFun= function () {
//     }
//     return newFun
// }

function returnsANamedFunction() {
    return function nameFun() {}
}


// const returnsAnAnonymousFunction = function() {
//     return function () {}
// }

// function returnsAnAnonymousFunction() {
//     return function () {}
// }

const returnsAnAnonymousFunction= () => function(){}