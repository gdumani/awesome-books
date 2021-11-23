const book = (author,title) => ({author,title});

const BookArray = () => {
  const getBooks = () => {
    JSON.parse(localStorage.getItem(bookArray)) || [];
  }; 

  const setBooks = (book) => {
    const allbooks = getBooks();
    allbooks.push(book);
    localStorage.setItem(allBooks,JSON.stringify(allBooks));
  };

  document.getElementsById('book-form').addEventListener('submit', e => {
    e.preventDefault();
    console.log(JSON.stringify(e));
  });
};
//   const
//   const a = document.getElementById('title').value
//   const b = document.getElementById('author').value
// document.getElementsById('book-list').innerHTM= a

console.log('hola')