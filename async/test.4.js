function wait(sec) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('wait Error!') //reject되면 throw가 된다. 그래서 잡는방법은 try catch다.
        }, sec * 1000)
    })
}

async function myAsyncFuncErr() {
    console.log(new Date())
    try {
        await wait(3);
    } catch (e) {
        console.log(e)
    }

    console.log(new Date())
}



var result = myAsyncFuncErr()