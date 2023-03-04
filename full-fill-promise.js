'use strict';

var promise = new Promise(function (fulfill, reject) {
    setTimeout(function () {
        fulfill('TIMED OUT!')
    }, 300)
});

promise.then(console.log)