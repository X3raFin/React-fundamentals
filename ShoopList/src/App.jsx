import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [products, setProducts] = useState([]);

  const url = "http://127.0.0.1:5173/products.json";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          console.error("Coś poszło nie tak.");
        }
        const json = await response.json();
        setProducts(json.products);
        // console.log(json.products[0]);
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
          <div key={product.id}>
            <img src={product.imageUrl} alt={product.name} />
            <h1>{product.name}</h1>
            <h3>{product.description}</h3>
            <p>Cena: {product.price}</p>
          </div>
        )
      })}
    </div>
  )
}

export default App
