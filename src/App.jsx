import './App.css';
import Products from './Products';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((results) => results.json())
      .then((data) => setData(data.products));
  }, [data]);

  console.log(data);

  return (
        <div className="cont">
          {
          data.map((product) => {
            return <Products product={product} key={product.id} />
          })
          }
        </div>
  );
}

export default App;