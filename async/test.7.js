function wait(sec) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve('done!')
            reject('wait Error!')
        }, sec * 1000)
    })
}

async function myAsyncFuncErr() { //asyc는 promise를 리턴
    asdconsole.log(new Date())

    const result = await wait(3).catch(e => {
        console.error(e)
    });

    console.log(result)
    console.log(new Date())
}


myAsyncFuncErr().catch(e => {
    console.log(e)
})
// try {
//     myAsyncFuncErr()
// } catch (e) {
//     console.log(e)
// }