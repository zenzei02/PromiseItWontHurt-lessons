var promise = new Promise(function (fulfill, reject) {
    setTimeout(() => {
        reject(new Error('TIMED OUT!'))
    }, 300);
});

function onReject(error) {
    console.log(error.message)
}
promise.then(null, onReject)