const container = <HTMLUListElement>document.getElementById('books')
const fragment = <HTMLTemplateElement>document.getElementById('book-template')

const books = [
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { title: 'A Farewell to Arms', author: 'Ernest Hemingway' },
  { title: 'Catch 22', author: 'Joseph Heller' }
]

books.forEach(book => {
  const instance = document.importNode(fragment.content, true)

  const title = <HTMLSpanElement>instance.querySelector('.title')
  title.innerHTML = book.title

  const author = <HTMLSpanElement>instance.querySelector('.author')
  author.innerHTML = book.author

  container.appendChild(instance)
})

