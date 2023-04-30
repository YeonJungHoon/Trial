import React from "react";
import { useNavigate, BrowserRouter, Routes, Route } from "react-router-dom";
import styles from './Base.module.css'



function Base(){

    return(

      



        <div>
        <header>
            <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
            </nav>
        </header>
        <div className={styles.heroImage}>
            <div className={styles.heroText}>
            <h1>Welcome to our website</h1>
            <p>Learn more about our services and products</p>
            <button>Read More</button>
            </div>
        </div>
        <div className={styles.content}>
            <h2>Featured Products</h2>
            <div className={styles.productList}>
            <div className={styles.productItem}>
                <img src="product-1.jpg" alt="Product 1" />
                <h3>Product 1</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button>Learn More</button>
            </div>
            <div className={styles.productItem}>
                <img src="product-2.jpg" alt="Product 2" />
                <h3>Product 2</h3>
                <p>Etiam non justo ac ex faucibus feugiat eu eu diam.</p>
                <button>Learn More</button>
            </div>
            <div className={styles.productItem}>
                <img src="product-3.jpg" alt="Product 3" />
                <h3>Product 3</h3>
                <p>Aliquam eget nunc sit amet lacus bibendum lobortis ut quis quam.</p>
                <button>Learn More</button>
            </div>
            </div>
        </div>
        <footer>
            <p>&copy; 2023 Main Page</p>
        </footer>
        </div>



    )
};

export default Base;




