async function myAsyncFunc() {
    return 'done!';
}

function myPromiseFunc() {
    return new Promise((resolve, reject) => {
        resolve('done!')
    })
}

var result = myAsyncFunc();
console.log(result)

var result2 = myPromiseFunc();
console.log(result2)



async function myAsyncFuncErr() {
    throw 'Error!!!!';
}

function myPromiseFuncErr() {
    return new Promise((resolve, reject) => {
        reject('Error!!!')
    })
}

var result = myAsyncFuncErr();
console.log(result)
var result2 = myPromiseFuncErr();
console.log(result2)
