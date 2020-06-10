let myLibrary = [];
let i = 0;

//new book constructor
function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

//adds new book to myLibrary
book.prototype.addBookToLibrary = function() {
    myLibrary.push(this);
}

//renders array of myLibrary
function render(bk) {
    const bookLib = document.getElementById('books');
    const div = document.createElement('div');
    const ulist = document.createElement('ul');
    const list = document.createElement('li');
    const readButton = document.createElement('button');
    
    div.setAttribute('id', bk.title);
    div.classList.add('aBook');
    bookLib.appendChild(div.cloneNode(true));

    list.innerHTML = bk.title;
    ulist.appendChild(list.cloneNode(true));
    list.innerHTML = bk.author;
    ulist.appendChild(list.cloneNode(true));
    list.innerHTML = bk.pages;
    ulist.appendChild(list.cloneNode(true));
    list.innerHTML = bk.read;
    list.setAttribute('id', 'read' + i ); 
    ulist.appendChild(list.cloneNode(true));
    document.getElementById(bk.title).appendChild(ulist.cloneNode(true));

    readButton.innerHTML = 'Read?';
    readButton.classList.add('readButton');
    readButton.setAttribute('id', i); 
    document.getElementById(bk.title).appendChild(readButton);
    i++;
};

function read(){
    
}

const HarryPotter = new book('Harry Potter', 'J.K. Rowling', '400', 'not read');
const theHobbit = new book('The Hobbit', 'J.R.R. Tolkien', '295', 'read');
theHobbit.addBookToLibrary();
HarryPotter.addBookToLibrary();
render(myLibrary[0]);
render(myLibrary[1]);

const buttonClass = Array.from(document.getElementsByClassName('readButton'));
const buttonEvent = buttonClass.map(x => x.addEventListener('click', function(e){
    let j = +x.id;
    const readText = document.getElementById('read'+j);

    if(myLibrary[j].read == 'read')
        myLibrary[j].read = 'not read';
    else
        myLibrary[j].read = 'read';
    readText.innerHTML = myLibrary[j].read;
}));
