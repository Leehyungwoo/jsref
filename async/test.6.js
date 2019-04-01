function wait(sec) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve('done!')
            reject('wait Error!')
        }, sec * 1000)
    })
}

async function myAsyncFuncErr() {
    console.log(new Date())

    const result = await wait(3).catch(e => {
        console.error(e)
    });//reject이기때문에 catch안에 console.log.error(e)에 찍힌다. 대신에 result변수에는 return된값이 없기때문에 undefined가 찍힌다.

    console.log(result)
    console.log(new Date())
}



var result = myAsyncFuncErr()