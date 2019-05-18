post('http://localhost:9000', {}, (result) => {
    var data = JSON.parse(result);
    dir(data)
})