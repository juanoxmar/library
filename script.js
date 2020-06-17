let myLibrary = [];

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
};

book.prototype.render = function() {
    let i = myLibrary.length-1;

    const bookLib = document.getElementById('books');
    const div = document.createElement('div');
    const ulist = document.createElement('ul');
    const list = document.createElement('li');
    const readButton = document.createElement('button');
    
    div.setAttribute('id', this.title);
    div.classList.add('aBook');
    bookLib.appendChild(div.cloneNode(true));

    list.innerHTML = this.title;
    ulist.appendChild(list.cloneNode(true));
    list.innerHTML = 'Author: ' + this.author;
    ulist.appendChild(list.cloneNode(true));
    list.innerHTML = 'Pages: ' + this.pages;
    ulist.appendChild(list.cloneNode(true));
    list.innerHTML = this.read;
    list.setAttribute('id', 'read' + i ); 
    ulist.appendChild(list.cloneNode(true));
    document.getElementById(this.title).appendChild(ulist.cloneNode(true));

    readButton.innerHTML = 'Read?';
    readButton.classList.add('readButton');
    readButton.setAttribute('id', i); 
    document.getElementById(this.title).appendChild(readButton);
}

//toggles read/unread with button
function read(){
    let j = myLibrary.length-1;

    const buttonClass = Array.from(document.getElementsByClassName('readButton'));

    buttonClass[j].addEventListener('click', function(e){
        const readText = document.getElementById('read' + j);

        if(myLibrary[j].read == 'Read')
            myLibrary[j].read = 'Not Read';
        else
            myLibrary[j].read = 'Read';
        readText.innerHTML = myLibrary[j].read;
    });
};

document.getElementById('formButton').addEventListener('click', e => document.getElementById('submitBookForm') == null ? forms(): null);

function forms(){
    const getForm = document.getElementById('form');
    const div = document.createElement('div');
    const form = document.createElement('form');
    const label = document.createElement('label');
    const input = document.createElement('input');
    const select = document.createElement('select');
    const option = document.createElement('option');
    const submitBook = document.createElement('button');

    form.setAttribute('id', 'submitBookForm')
    getForm.appendChild(form);

    label.innerHTML = 'Title: ';
    label.setAttribute('for', 'title');
    div.classList.add('formInputs');
    div.appendChild(label);
    input.setAttribute('id', 'title');
    div.appendChild(input);
    form.appendChild(div.cloneNode(true));

    label.innerHTML = 'Author: ';
    label.setAttribute('for', 'author');
    div.appendChild(label);
    input.setAttribute('id', 'author');
    div.appendChild(input);
    form.appendChild(div.cloneNode(true));

    label.innerHTML = 'Pages: ';
    label.setAttribute('for', 'pages');
    div.appendChild(label);
    input.setAttribute('id', 'pages');
    div.appendChild(input);
    form.appendChild(div.cloneNode(true));

    div.removeChild(input);

    label.innerHTML = 'Read?: ';
    label.setAttribute('for', 'read');
    div.appendChild(label);
    option.innerHTML = 'Yes';
    option.setAttribute('value', 'Read');
    select.appendChild(option.cloneNode(true));
    option.innerHTML = 'No';
    option.setAttribute('value', 'Not Read');
    select.appendChild(option.cloneNode(true));
    select.setAttribute('id', 'haveRead');
    div.appendChild(select);
    form.appendChild(div.cloneNode(true));

    div.removeChild(select);
    div.removeChild(label);
    
    submitBook.innerHTML = 'Submit';
    submitBook.setAttribute('id', 'submitBook');
    submitBook.setAttribute('type', 'button');
    submitBook.setAttribute('value', 'submit');
    div.appendChild(submitBook);
    form.appendChild(div.cloneNode(true));
    
    document.getElementById('submitBook').addEventListener('click', function(e) {
        const bookTitle = document.getElementById('title').value;
        const bookAuthor = document.getElementById('author').value;
        const bookPages = document.getElementById('pages').value;
        const bookRead = document.getElementById('haveRead').value;

        const newBook = new book(bookTitle, bookAuthor, bookPages, bookRead);
        newBook.addBookToLibrary();
        newBook.render();
        read();
        getForm.removeChild(form);
    });
};

const theHobbit = new book('The Hobbit', 'J.R.R. Tolkien', '287', 'Read');
theHobbit.addBookToLibrary();
theHobbit.render();
read();

const harryPotter = new book('Harry Potter & The Sorcerer\'s Stone', 'J.K. Rowling', '309', 'Read');
harryPotter.addBookToLibrary();
harryPotter.render();
read();