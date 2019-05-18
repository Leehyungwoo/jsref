

post('http://localhost:9000', {}, (result) => {
    var data = JSON.parse(result);
    setList(data)
})


function setList(data) {

}