const books = [
    {
        Title: "48 LAWS OF POWER",
        Author: "Robert Greene"
    },
    {
        Title: "THINK AND GROW RICH",
        Author: "Napoleon Hill"
    },
    {
        Title: "THINK AND GROW RICH",
        Author: "Napoleon Hill"
    },
    {
        Title: "THINK AND GROW RICH",
        Author: "Napoleon Hill"
    }
]

const titleHeader = document.getElementById('uk-header-text')
titleHeader.textContent = "Awesome books"
const inputDiv =document.getElementById ("uk-input-div");

function breaking (){
    
    books.forEach(book => {
        const mainDiv = document.querySelector('#uk-emptydiv')
       const childDiv = document.createElement('div');
       const title = document.createElement('h3');
       const author = document.createElement('h5');
       const removeBtn = document.createElement('button');
       const hrLine = document.createElement('hr');
       const addBtn = document.createElement('button');
        title.textContent = `${book.Title}`;
        author.textContent = `${book.Author}`;
        // console.log(book.Title);
        childDiv.appendChild(title);
        childDiv.appendChild(author);
        childDiv.appendChild(removeBtn);
        childDiv.appendChild(hrLine);
        childDiv.appendChild(addBtn);
        mainDiv.appendChild(childDiv);
    });

}

breaking()

function inputs (){
    const titleInput = document.createElement('input')
    titleInput.classList.add("titleC");
    titleInput.placeholder = "Title";
    const authorInput = document.createElement('input');
    authorInput.classList.add("titleC");
    authorInput.placeholder = "Author";
    const lineBr = document.createElement('br');
    const lineB = document.createElement('br');
    const mainInputDiv = document.createElement('div')
    
    
    mainInputDiv.appendChild(titleInput);
    mainInputDiv.appendChild(lineBr);
    mainInputDiv.appendChild(lineB);
    mainInputDiv.appendChild(authorInput);
    inputDiv.appendChild(mainInputDiv)
}

inputs ()