var msg = 'helloworld';
console.log(msg);
function sayHello(content) {
    return '您说:$(content)';
}
var hello = '前端开发尝试';
var users = [1, 2, 3, 4, 5];
document.body.innerHTML = sayHello(hello);
