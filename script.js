const start = document.getElementById('btn-start');
const list = document.getElementById('list');


/* start.addEventListener('click', () => {
    item = document.createElement('li');
    list.appendChild(item);
}) */

start.addEventListener('click', () => {
    for (i = 1; i <= 100; i++) {
        if(i % 3 == 0 && i % 5 == 0) {
            item = document.createElement('li');
            list.appendChild(item);
            console.log('foobar');
            item.innerText = 'foobar';
        }
        else if (i % 3 == 0) {
            item = document.createElement('li');
            list.appendChild(item);
            console.log('foo');
            item.innerText = 'foo';
        }
        else if (i % 5 == 0) {
            item = document.createElement('li');
            list.appendChild(item);
            console.log('bar');
            item.innerText = 'bar';
        }
        else {
            item = document.createElement('li');
            list.appendChild(item);
            console.log(i);
            item.innerText = i;
        }
    }
})