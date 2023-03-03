import React, {useState, useEffect} from 'react';
import { Button } from '../Button'
import Footer from '../Footer'
import '../styles/Tickets.css'
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import '../styles/Books.css'

const url = `http://localhost:3003/api/v1/books`
const size = 10;
const shorted_list = [];
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyUm9sZSI6IkFETUlOIiwiaXNzIjoicHcgYmFja2VuZCIsInN1YiI6InB3IiwiYXVkIjoicHcgY2xpZW50In0.qe1rnDHBnHK4TYccWFa5zs81sGK2zvQ_clyYWifUOms"
function Books(props) {
    const { t } = useTranslation();
    const [books, setBooks] = useState([{}]);
    const size = 10
    useEffect(() => {
        getBooksAxios();
      }, []);
    const getBooksAxios = async () => {
        // const response = await 
        axios.get(url, {
            headers: {
                // Authorization: `Bearer ${localStorage.getItem("token_curent")}`
                Authorization: `Bearer ${token}`
            }
        })
        .then((response) => {
            console.log(response);
            setBooks(response.data.response);
           // shorted_list = books.slice(0, 10);
        })
        // console.log("RESPONSE ===============" + response.data);
        // console.log(" array " + response.data);
       
        // console.log("ticketssssss" + tickets);
        
    };
    return (
       
        <> <h1>{t("Toate cartile")}</h1>
        <div className='books_content'>
            {  
            
            Array.isArray(books) ?
            books.map((book) =>
            <div className='book_page'>
                    
                    <div className='books_details mtop10'> <h3> {book.booktitle}</h3></div>
                    
                    <div><img className="img_book mtop10" src={book.imageurls} alt={book.id} /></div>
                    
                    {/* <img src = {ticket.movie_image_url} alt="imagine film"></img> */}
                    {/* <div>{book.isbn} </div> */}
                    
                    <div className='mtop10'><strong>Autor:</strong> {book.bookauthor} </div>
                   
                    <div className='mtop10'><strong>Editura:</strong> {book.publisher} </div>
                    {/* <div>{book.imageurls}</div> */}
                    
                    
                    {/* <div className="product_comments">Loc: {ticket.seat_nr} </div>
                    <div className="product_comments">Sala: {ticket.room_id} </div>
                    <div className="product_rating"> Data: {ticket.date_time} </div>
                    <div> Ora: {ticket.hour_time}</div> */}
                    <br />
            </div>
            
        
            ):null
        
            }
      
        </div>
        <div className='next_pages mbottom40 mtop30'><h3>  <Button buttonStyle="btn--outline_red" url="/topalegeri">&lt; &lt; &lt; Prev</Button> &nbsp;&nbsp;&nbsp;&nbsp; 
        <Button buttonStyle="btn--outline_red" url="/topalegeri">Next &gt; &gt; &gt;</Button></h3></div>
 
        <div>
         {/* <Footer /> */}
        </div>
        </>
    )
}

export default Books
/*
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './mainstyle.css'
import Form from './Form';

const url = "http://localhost:5000/api/products"

function HomePage(props) {
    
  
    const [products, setProducts] = useState([{}]);
    useEffect(() => {
        getProductsAxios();
      }, []);
    const getProductsAxios = async () => {
        const response = await axios.get(url);
        console.log("RESPONSE ===============" + JSON.stringify(response.data));
        setProducts(response.data);
    };
    console.log("prod------------" + products);
   
    return (
     <>
    <div className="title">Products</div>
     <ul className="products">
    {
        products.map(product =>
        <li>
            <div className="product">
            <br />
                <img className="product_image" src={product.image} alt="product"></img>
                <br />
                <div className="product_name"> {product.name}</div>
                <div className="product_price">{product.price}</div>
                <div className="product_description">Descriere: " {product.description} "</div>
                <div className="product_comments">Comentarii: "{product.comments} "</div>
                <div className="product_rating">{product.rating} Stars {product.nrReviews}</div>
                <p> EDIT INFO ABOUT BOOK</p>
                <div>
                <Form />
                </div>
            </div>
        </li>
        )
       
    }
       <div className="add_object" >
          <div>Add new object</div>
          <br />
            < Form/>
        </div>
  </ul>
 
  </>
    )
}

export default HomePage;
*/