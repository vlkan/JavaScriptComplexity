const promise1 = new Promise((resolve, reject) => {
  //empty state is pending
  //result undefined
  resolve("Data"); //now state is fulfield but result undefined still
  //reject("Error"); //error state
});
console.log(promise1);

promise1
  .then(
    () => {
      console.log("Success");
    },
    () => {
      console.log("FAİL");
    }
  )
  .catch(() => {
    console.log("FAİL");
  })
  .finally(() => {
    //ES2018
    //for all situation
    console.log("RUN");
  });
//promise1.catch((reason) => console.log(reason)); //reject

const books = [
  { name: "Pinball 1973", author: "Haruki" },
  { name: "Özgürlük", author: "Bauman" },
  { name: "Türkiye'de Çağdaşlaşma", author: "Niyazi Berkes" },
];
const listBooks = () => {
  books.map((book, index) => {
    console.log(book, index);
  });
};
const addNewBook = (newBook) => {
  const promise2 = new Promise((resolve, reject) => {
    books.push(newBook);
    resolve(books);
  });
  return promise1;
};
addNewBook({ name: "Berlin Hatıralarım", author: "Hüsrev Gerede" })
  .then(() => {
    console.log("New List");
    listBooks();
  })
  .catch((reason) => {
    console.log(reason);
  });
