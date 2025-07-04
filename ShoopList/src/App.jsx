import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [products, setProducts] = useState([]);
  const url = "http://127.0.0.1:5173/products.json";

  return (
    <>
      <Products products={products}
        setProducts={setProducts}
        url={url}
      />
    </>
  )
}

function Products({ products, setProducts, url }) {

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          console.error("Coś poszło nie tak.");
        }
        const json = await response.json();
        setProducts(json.products);
      }
      catch (error) {
        console.error("Cos poszło nie tak:" + error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {products.map(product => {
        return (
          <div className="cont" key={product.id}>
            <img src={product.imageUrl} alt={product.name} />
            <div>
              <h3>{product.name}</h3>
              <h4>{product.description}</h4>
              <p>Cena: {product.price}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default App
