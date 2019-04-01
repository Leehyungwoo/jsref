async function myAsyncFuncErr() {
    throw 'Error!!!!';
}

function myPromiseFuncErr() {
    return new Promise((resolve, reject) => {
        reject('Error!!!')
    })
}

var result = myAsyncFuncErr().catch(e => {
    console.log(e)
});
var result2 = myPromiseFuncErr().catch(e => {
    console.log(e)
});;
