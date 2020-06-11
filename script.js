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
};

book.prototype.render = function() {
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
    list.innerHTML = this.author;
    ulist.appendChild(list.cloneNode(true));
    list.innerHTML = this.pages;
    ulist.appendChild(list.cloneNode(true));
    list.innerHTML = this.read;
    list.setAttribute('id', 'read' + i ); 
    ulist.appendChild(list.cloneNode(true));
    document.getElementById(this.title).appendChild(ulist.cloneNode(true));

    readButton.innerHTML = 'Read?';
    readButton.classList.add('readButton');
    readButton.setAttribute('id', i); 
    document.getElementById(this.title).appendChild(readButton);
    i++;
}

//toggles read/unread with button
function read(){
    let j = myLibrary.length-1;

    const buttonClass = Array.from(document.getElementsByClassName('readButton'));

    buttonClass[j].addEventListener('click', function(e){
        const readText = document.getElementById('read' + j);

        if(myLibrary[j].read == 'read')
            myLibrary[j].read = 'not read';
        else
            myLibrary[j].read = 'read';
        readText.innerHTML = myLibrary[j].read;
    });
};


const HarryPotter = new book('Harry Potter', 'J.K. Rowling', '400', 'not read');
HarryPotter.addBookToLibrary();
HarryPotter.render();

//const theHobbit = new book('The Hobbit', 'J.R.R. Tolkien', '295', 'read');
//theHobbit.addBookToLibrary();
//theHobbit.render()
