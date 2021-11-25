let books=[]

function getBook() {
  const book = {
    title:  document.getElementById('title').value,
    author: document.getElementById('author').value
  };
  return book;
}

function addBook(b) {
  const book=getBook();
  if (JSON.stringify(b[b.length-1])!=JSON.stringify(book) &&
    book.title!='' && book.author!=''){
    b.push(book);
  }  
  localStorage.setItem('books',JSON.stringify(b));
}

const submitBtn=document.getElementById('submit');
submitBtn.addEventListener('click', () => {addBook(books)});


function displayBooks(){}