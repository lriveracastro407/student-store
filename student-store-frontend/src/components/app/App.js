import { useState, useEffect } from "react"
import axios from "axios"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../home/home"
import Productcard from "../productcard/productcard"
import "./App.css"

export default function App() {
  const [products, setProducts] = useState([])
  const [error, setError] = useState()

  useEffect(() => {
    const fetchProducts = async () => {
      try {
      const req = await axios.get("http://localhost:3001/store/")
      const products = req?.data?.products
      
      if (products) {
        setProducts(products)
      }
    } catch (err) {
        setError(err)
      }
    }
    fetchProducts()
  }, [])
  console.log(products)
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                products={products}
                error={error}
              />
            }
          />
          <Route path="/store/:productId" element={<Productcard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}