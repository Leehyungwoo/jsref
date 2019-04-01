function wait(sec) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('wait Error!')
        }, sec * 1000)
    })
}

async function myAsyncFuncErr() {
    console.log(new Date())

    await wait(3).catch(e => {
        console.log(e) //test.4와 결과는 같다
    });


    console.log(new Date())
}



var result = myAsyncFuncErr()