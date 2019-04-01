function wait(sec) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('done!')
        }, sec * 1000)
    })
}

async function myAsyncFuncErr() {
    console.log(new Date())
    // await wait(3);
    console.log(new Date())
}



var result = myAsyncFuncErr()