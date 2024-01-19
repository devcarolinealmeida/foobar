const start = document.getElementById('btn-start');
const list = document.getElementById('list');


const addItem = (text) => {
    item = document.createElement('li');
    list.appendChild(item);
    item.innerText = text;
}

start.addEventListener('click', () => {
    for (i = 1; i <= 100; i++) {
        if(i % 3 == 0 && i % 5 == 0) {
            addItem('foobar');
            console.log('foobar');
        }
        else if (i % 3 == 0) {
            addItem('foo');
            console.log('foo');
        }
        else if (i % 5 == 0) {
            addItem('bar');
            console.log('bar');
        }
        else {
            addItem(i);
            console.log(i);
        }
    }
})