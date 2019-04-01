function wait(sec) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('wait Error!') //reject되면 throw가 된다. 그래서콘솔로그 2가 찍히지 않는다. 
        }, sec * 1000)
    })
}

async function myAsyncFuncErr() {
    console.log('1', new Date())
    await wait(3);
    console.log('2', new Date())
}



var result = myAsyncFuncErr()