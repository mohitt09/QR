import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function Dashboard() {
  const [product, setproduct] = useState([]);
  const [loader, setLoader] = useState(true);
  const [form, setform] = useState({});

  useEffect(() => {
    fetchData();
    setLoader(false); 
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/products');
      console.log(response.data.message);
      setproduct(response.data.message);
    } catch (error) {
      console.error(error);
    } 
  };


  const PostData = async (e) => {
    try {
      e.preventDefault();
      console.log(form);
      const response = await axios.post('http://localhost:8000/products',form);
      console.log(response.data.message);
    } catch (error) {
      console.error(error);
    } 
    setform({})
    fetchData();
  };

  let changehandle = (key,value)=>{
    setform({
      ...form,
      [key]:value
    })
  }
      
  return (
    <>
      <h1>Welcome To Dashboard Admin</h1>
      <form action="" onSubmit={(e)=>PostData(e)}>
        <input type="text" name='name' placeholder='enter title Name' onChange={(e)=>{changehandle(e.target.name,e.target.value)}} /><br />
        <input type="text" name='description' placeholder='enter product description ' onChange={(e)=>{changehandle(e.target.name,e.target.value)}}/><br />
        <input type="number" name='price' placeholder='enter price' onChange={(e)=>{changehandle(e.target.name,e.target.value)}}/><br />
        <button>Submit Details</button>
      </form>
      <hr />
      <h2>product From Database:</h2>
      <ol>
        {loader ? (<>Loading...</>) : (product.map((productData) => (
            <li key={productData._id}>
              <span>{productData.name}</span> - <span>{productData.description}</span> - <span>Rs. {productData.price}</span>
            </li>
          ))
        )}
      </ol>
    </>
  );
}

export default Dashboard;
