const start = document.getElementById('btn-start');
const list = document.getElementById('list');


const addItem = () => {
    item = document.createElement('li');
    list.appendChild(item);
}

start.addEventListener('click', () => {
    for (i = 1; i <= 100; i++) {
        if(i % 3 == 0 && i % 5 == 0) {
            addItem();
            console.log('foobar');
            item.innerText = 'foobar';
        }
        else if (i % 3 == 0) {
            addItem();
            console.log('foo');
            item.innerText = 'foo';
        }
        else if (i % 5 == 0) {
            addItem();
            console.log('bar');
            item.innerText = 'bar';
        }
        else {
            addItem();
            console.log(i);
            item.innerText = i;
        }
    }
})