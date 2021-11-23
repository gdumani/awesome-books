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

  document.getElementsById('book-form').addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(JSON.stringify(e));
  });
};

