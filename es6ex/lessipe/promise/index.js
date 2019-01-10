const promise = new Promise((resolve, reject) => {
    //비동기 처리코드

    if (true) {
        resolve('처리결과')
    } else {
        reject('오류메시지')
    }
})

promise.then(result => {
    //resolve 함수로 넘긴 결과
}).catch(err => {
    //reject 함수로 넘긴 결과
})




const promise2 = new Promise((resolve, reject) => {
    console.log('첫번째 비동기 처리');

    resolve('첫번째 비동기 처리완료')
})

promise2.then(result => {
    console.log(result)
    return new Promise((resolve, reject) => {
        console.log('두번째 비동기 처리');

        resolve('두번째 비동기 처리완료')
    })
}).then(result => {
    console.log(result)
    return '모든 비동기 처리 완료'
}).then(result => {
    console.log(result)
}).catch(error => {
    console.log(error)
})


const promise3 = new Promise((resolve, reject) => {
    let succed = false;

    console.log('처리중');

    succed = true;

    if (succed) {
        resolve('처리결과')
    } else {
        reject('오류메시지')
    }

})

promise3.then(result => {
    console.log(result)
}).catch(error => {
    console.log(error)
})




const promise4 = new Promise((resolve, reject) => {
    console.log('promise4');
    resolve('promise4 처리 완료')
})

const promise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('promise5');
        resolve('promise5 처리 완료')
    }, 1000)
})

Promise.all([promise4, promise5]).then(result => {
    console.log(result)
})