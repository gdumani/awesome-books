const book = (author,title) => ({author,title});

const BookArray = () => {
  const getBooks = () => {
    JSON.parse(localStorage.getItem('allBooks')) || [];
  }; 

  const setBooks = (book) => {
    const allBooks = getBooks();
    allBooks.push(book);
    localStorage.setItem('allBooks',JSON.stringify(allBooks));
  };

  const UI = () => {
     getBooks(book) {
       const list = document.getElementById('book-list');
       const row = document.createElement('tr');
       row.innerHTML = ` 
       <td>${book.title}</td>
       <td>${book.author}</td>
       <td><button type='button' class='delete'>Remove this book</button></td>
       `;
       list.appendChild(row);
     } 
  }

  const form = document.querySelector('#book-form');
  document.getElementsById('book-form').addEventListener('submit', (e) => {
    e.preventDefault();
  });
 
};

const author = e.target.author.value;
const title = e.target.title.value; 
