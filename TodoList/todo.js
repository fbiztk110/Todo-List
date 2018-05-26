var ul = document.getElementById('list');
var li;

var addButton = document.getElementById('add');
addButton.addEventListener('click', addItem);

var removeButton = document.getElementById('remove');
removeButton.addEventListener('click', removeItem);

function addItem() {

    var input = document.getElementById('input');
    var item = input.value;
    var textNode = document.createTextNode(item);


    if (item === '') {
        alert('Please enter your todo');
        return false;
        //Add a p tag and assign a value of "Enter your todo"
        let p = document.getElementById('p');
        let val = 'Enter your todo';
        let label = document.createTextNode(val);
        p.appendChild(label);
    } else {
        //Create li
        li = document.createElement('li');
        //Create checkbox
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id', 'check');
        //Create label
        var label = document.createElement('label');
        label.setAttribute('for', 'item'); //optional

        //add these elements on web page
        ul.appendChild(label);
        li.appendChild(checkbox);
        label.appendChild(textNode);
        li.appendChild(label);
        ul.insertBefore(li, ul.childNodes[0]);

        localStorage.setItem('todo', item);

        setTimeout(() => {
            li.className = 'visual';
        }, 2);

        input.value = '';
    }


    console.log('Add button clicked');

}

function removeItem() {
    li = ul.children;
    for (let index = 0; index < li.length; index++) {
        while (li[index] && li[index].children[0].checked) {
            ul.removeChild(li[index]);
            localStorage.removeItem(li[index].value);
        }
    }
    console.log('Remove button clicked');
}
