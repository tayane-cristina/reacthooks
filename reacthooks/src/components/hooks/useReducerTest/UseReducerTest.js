import React from 'react';
import './useReducerTest.css'
import { useReducer, useState } from 'react';

//Objetivo, utilizar o useReducer para criar um carrinho de compras.

const UseReducerTest = () => {

  //Está constante deve guardar o valor inicial do meu reducer.
  const initialProducts = [
    {id: 1, name: "Cubo mágico", price: 10.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa4WrToATYt59zKe9-v5C6J5NcVOScGB5PQQ&s"},
    {id: 2, name: "Urso de pelúcia", price: 35.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwZDVhINaLmPh-9nzs6OujGNP5-DW0uCsTdg&s"},
    {id: 3, name: "Casinha de Boneca", price: 60.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyiVsc_dEkPWOPj8k1a4ePC_nukI9iXOXjbw&s"},
    {id: 4, name: "Carrinho de controle remoto", price: 55.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ7vMcZltIZitBNaZBE_YwvDUilJazHbkThQ&s"},
    {id: 5, name: "Blocos", price: 1.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTArZhXHMhiM3gFNrFmsmFq2KL60HIRYjhPgw&s"},
  ];

  const [productsInKart, setProductsInKart] = useState([]);

  //Está constante deve guardar a lógica que será realizada pelo action, quando houver um dispatch.
  const productReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        setProductsInKart([...productsInKart, action.product]);

      default:
        return state;
    }
  };

  const [products, dispatchProducts] = useReducer(productReducer, initialProducts)

  const handleAddToCart = (product) => {
    
    dispatchProducts({type: "ADD", product})
  }

  return (
    <div className='principal-div'>
      <h3>UseReducer Test</h3>
      <ul className='products-list'>
        {products.map((product) => (
          <li key={product.id} className='product-kart'>
            <img className="product-image" src={product.image} alt={`imagem do produto ${product.name}`} />
            <p><strong>{product.name}</strong></p>
            <p>PREÇO: R${product.price.toFixed(2)}</p>
            <section className='product-status'>
              <button className='add-at-kart' onClick={() => handleAddToCart(product)}>Adicionar ao carrinho</button>
              <img 
              className='img-save' 
              src='https://img.icons8.com/?size=50&id=581&format=png' 
              alt='salvar'
              >
              </img>
            </section>
          </li>
        ))}
      </ul>
      
      <div className='show-products-in-the-cart'>
        <p><strong>Produtos no carrinho:</strong></p>
        <ul>
          {productsInKart.map((product) => (
            <li key={product.id}>
              <img className="product-image" src={product.image} alt={product.name} />
              <p><strong>{product.name}</strong></p>
              <p>PREÇO: R${product.price}</p>
              <section className='amount-products'>
                <button className='addOneMore'>+</button>
                <p>1</p>
                <button className='removeOne'>-</button>
              </section>
            </li>
          ))}
        </ul>
      </div>
     
    </div>
  );
};

export default UseReducerTest;