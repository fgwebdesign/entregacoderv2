// OriginalMerch.js
import React from 'react';
import './OriginalMerch.css';

function OriginalMerch() {
  const products = [
    {
      name: 'MY BALLIN',
      image: process.env.PUBLIC_URL + '/images/merch/1.png',
      price: '$19.99',
      description: 'Camiseta oficial de Duki con diseño exclusivo.',
    },
    {
      name: 'DESDE EL FIN DEL MUNDO I',
      image: process.env.PUBLIC_URL + '/images/merch/2.png',
      price: '$24.99',
      description: 'Gorra de estilo urbano con el logotipo de Duki.',
    },
    {
      name: 'DESDE EL FIN DEL MUNDO I',
      image: process.env.PUBLIC_URL + '/images/merch/3.png',
      price: '$39.99',
      description: 'Hoodie con capucha y diseño moderno de Duki.',
    },
    {
      name: 'DESDE EL FIN DEL MUNDO I HOODIE',
      image: process.env.PUBLIC_URL + '/images/merch/4.png',
      price: '$29.99',
      description: 'Pantalones cómodos y elegantes de Duki.',
    },
    {
      name: 'DESDE EL FIN DEL MUNDO I OVER-SIZE',
      image: process.env.PUBLIC_URL + '/images/merch/5.png',
      price: '$34.99',
      description: 'Sudadera con estilo y calidad de Duki.',
    },
    {
      name: 'DESDE EL FIN DEL MUNDO I MAPA',
      image: process.env.PUBLIC_URL + '/images/merch/6.png',
      price: '$59.99',
      description: 'Zapatos de moda con el sello de Duki.',
    },
  ];

  return (
    <div className="original-merch">
      <h1>ORIGINAL MERCH</h1>
      <div className="product-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <div className="product-card-divider"></div>
            <p className="price">{product.price}</p>
            <p className="description">{product.description}</p>
            <button className="btn buy-button">COMPRAR</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OriginalMerch;
