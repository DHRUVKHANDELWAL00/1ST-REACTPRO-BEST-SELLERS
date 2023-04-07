import  React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//const Author='John';
//const Title='this is my message';
//const Image="https://images-eu.ssl-images-amazon.com/images/I/814L+vq01mL._AC_UL600_SR600,400_.jpg"
//
import {books} from './books.js';
import {Book} from './Book.js'

//
const BookList=()=>{

    return (
    <section className="booklist">
    <h1> Amazon Best Seller's</h1>
    {books.map((book)=>{
       return <Book {...book} key={book.id}  />
    })}
    </section>
  );
};





const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);
