const start = document.getElementById('btn-start');
const list = document.getElementById('list');



start.addEventListener('click', () => {
    list.classList.remove('hide');
    start.disabled = true;
    calcMult();
})

const addItem = (text) => {
    item = document.createElement('li');
    list.appendChild(item);
    item.innerText = text;
}

const calcMult = () => {
    for (i = 1; i <= 100; i++) {
        if(i % 3 == 0 && i % 5 == 0) {
            addItem('Foobar');
            console.log('Foobar');
        }
        else if (i % 3 == 0) {
            addItem('Foo');
            console.log('Foo');
        }
        else if (i % 5 == 0) {
            addItem('Bar');
            console.log('Bar');
        }
        else {
            addItem(i);
            console.log(i);
        }
    }
}