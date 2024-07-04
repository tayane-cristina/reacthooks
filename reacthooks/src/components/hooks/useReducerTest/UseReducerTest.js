import React, { useReducer, useState } from 'react';
import './useReducerTest.css';

//Objetivo, utilizar o useReducer para criar um carrinho de compras.

const UseReducerTest = () => {

  const initialProducts = [
    {id: 1, name: "Cubo mágico", price: 10.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa4WrToATYt59zKe9-v5C6J5NcVOScGB5PQQ&s", quantity: 1},
    {id: 2, name: "Urso de pelúcia", price: 35.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwZDVhINaLmPh-9nzs6OujGNP5-DW0uCsTdg&s", quantity: 1},
    {id: 3, name: "Casinha de Boneca", price: 60.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyiVsc_dEkPWOPj8k1a4ePC_nukI9iXOXjbw&s", quantity: 1},
    {id: 4, name: "Carrinho de controle remoto", price: 55.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ7vMcZltIZitBNaZBE_YwvDUilJazHbkThQ&s", quantity: 1},
    {id: 5, name: "Blocos", price: 1.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTArZhXHMhiM3gFNrFmsmFq2KL60HIRYjhPgw&s", quantity: 1},
  ];

  const initialState = {
    products: initialProducts,
    productsInKart: []
  };

  const productReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return {
          ...state,
          productsInKart: [...state.productsInKart, action.product]
        };
      
      case "ADD_MORE_PRODUCT":
        return {
          ...state,
          productsInKart: state.productsInKart.map(product =>
            product.id === action.id ? { ...product, quantity: product.quantity + 1 } : product
          )
        };

      case "REMOVE_PRODUCT":
        return {
          ...state,
          productsInKart: state.productsInKart.map(product => 
            product.id === action.id ? { ...product, quantity: product.quantity - 1} : product
          )
          .filter(product => product.quantity > 0)
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(productReducer, initialState);

  const handleAddToCart = (product) => {
    dispatch({ type: "ADD", product });
  };

  const addMoreProducts = (id) => {
    dispatch({ type: "ADD_MORE_PRODUCT", id });
    console.log("O botão está funcionando");
  };

  const removeProduct = (id) => {
    dispatch({ type: "REMOVE_PRODUCT", id });
    console.log("O botão está funcionando");
  };

  return (
    <div className='principal-div'>
      <h3>Lista de Produtos</h3>
      <ul className='products-list'>
        {state.products.map((product) => (
          <li key={product.id} className='product-kart'>
            <img className="product-image" src={product.image} alt={`imagem do produto ${product.name}`} />
            <p><strong>{product.name}</strong></p>
            <p>PREÇO: R${product.price.toFixed(2)}</p>
            <section className='product-status'>
              <button className='add-at-kart' onClick={() => handleAddToCart(product)}>Adicionar ao carrinho</button>
              <button className='save-in-favorit'>Salvar na lista</button>
            </section>
          </li>
        ))}
      </ul>
      
      <div className='show-products-in-the-cart'>
        <p><strong>Produtos no carrinho:</strong></p>
        <ul>
          {state.productsInKart.length > 0 ? (
            state.productsInKart.map((product) => (
            <li className='li-products-in-cart' key={product.id}>
              <img className="product-image" src={product.image} alt={product.name} />
              <p><strong>{product.name}</strong></p>
              <p>PREÇO: R${product.price}</p>
              <section className='amount-products'>
                <button className='btn-amount-products addOneMore' onClick={() => addMoreProducts(product.id)}>+</button>
                <p>Quantidade: {product.quantity}</p>
                <button className='btn-amount-products removeOne' onClick={() => removeProduct(product.id)}>-</button>
              </section>
            </li>
          ))) : (
            <p className='special-word'><strong>Seu carrinho esta vazio</strong></p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default UseReducerTest;