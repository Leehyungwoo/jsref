
var objOne = {};
Object.defineProperty(objOne, 'music', {
    value: '음악', 
    writable: true
});
Object.seal(objOne);

try {
    Object.defineProperty(objOne, 'book', {
        value: '책'
    });
} catch(e) {
    console.log(e);
    console.log('추가불가 : book');
}
console.log(objOne.book);




var objTwo ={
    music:'음악',
    add:function(param){
        this.book = param;
    }
}
Object.seal(objTwo);

try{
    objTwo.add('책')
} catch(e) {
    console.log('추가 불가:book')
}

console.log(objTwo.book);
