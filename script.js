let newB = document.querySelector(".new");
let pop = document.querySelector(".popup");
let exit = document.querySelector(".exit");
let submit = document.querySelector(".submit");
let xs = document.querySelectorAll(".x");
let checks = document.querySelectorAll(".check");
let tab = document.querySelector(".tab");
let tracker = 0;
let books = [];
function Book(title, author, pages, readP) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readP = false;
}
function addToLibrary(){
    tab.innerHTML = '';
    restructure();
    for(let x = 0; x < books.length; x++)
    {
    let span = document.createElement("tr");
    tab.appendChild(span);
    let att = document.createAttribute("index");
    att.value = x;
    span.setAttributeNode(att);

    let titleN = document.createElement("td");
    titleN.textContent = books[x].title;
    span.appendChild(titleN);

    let authorN = document.createElement("td");
    authorN.textContent = books[x].author;
    span.appendChild(authorN);

    let pagesN = document.createElement("td");
    pagesN.textContent = books[x].pages;
    span.appendChild(pagesN);

    let statusUpper = document.createElement("td");
    let statusInner = document.createElement("i");
    console.log(books[x].readP);
    if(books[x].readP == false)
        statusInner.classList.add("fas","fa-times-circle","x");
    else
        statusInner.classList.add("fas","fa-check-square","check");
    span.appendChild(statusUpper);
    statusUpper.appendChild(statusInner);
    statusInner.setAttribute("id", x);
    let xs = document.querySelectorAll(".x");
    xs.forEach(x => x.addEventListener("click", change));

    let delUpper = document.createElement("td");
    let delInner= document.createElement("i");
    delInner.classList.add("fas","fa-ban", "delete");
    span.appendChild(delUpper);
    delUpper.appendChild(delInner);
    delInner.setAttribute("id", x);
    let rems = document.querySelectorAll(".delete");
    rems.forEach(rem => rem.addEventListener("click", remove));

    }
}
function appear(){
    pop.classList.add("show");
}
function disappear(){
    pop.classList.remove("show");
}
function add(){
    pop.classList.remove("show");
    let book = new Book(document.getElementById("title").value,document.getElementById("author").value,document.getElementById("pages").value);
    books.push(book);
    addToLibrary();
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
}
function change(){
    let index = this.id;
    if(this.matches(".x"))
    {
        this.classList.remove("fa-times-circle","x");
        this.classList.add("fa-check-square","check");
        books[x].readP = true;
    }
    else
    {
        this.classList.add("fa-times-circle","x");
        this.classList.remove("fa-check-square","check");
        books[x].readP = false;
    }
}
function remove(){
    let index = this.id;
    books.splice(index,1);
    addToLibrary();
}

function restructure(){
    let span = document.createElement("tr");
    tab.appendChild(span);

    let titleNew = document.createElement("th");
    titleNew.textContent = "Title";
    titleNew.classList.add("title");
    span.appendChild(titleNew);

    let authorNew = document.createElement("th");
    authorNew.textContent = "Author";
    authorNew.classList.add("author");
    span.appendChild(authorNew);

    let pagesNew = document.createElement("th");
    pagesNew.textContent = "# Pages";
    pagesNew.classList.add("pages");
    span.appendChild(pagesNew);

    let readStat = document.createElement("th");
    readStat.textContent = "Read Status";
    readStat.classList.add("read");
    span.appendChild(readStat);
    
    let newBook = document.createElement("th");
    newBook.textContent = "New Book";
    newBook.classList.add("new");
    span.appendChild(newBook);
    newB = document.querySelector(".new");
    newB.addEventListener("click", appear);
}

newB.addEventListener("click",appear);
exit.addEventListener("click",disappear);
submit.addEventListener("click",add);
xs.forEach(x => x.addEventListener("click", change));
checks.forEach(check => check.addEventListener("click", change));
