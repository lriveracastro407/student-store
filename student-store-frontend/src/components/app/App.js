import { useState, useEffect } from "react"
import axios from "axios"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../Home/Home"
import "./App.css"

export default function App() {
  const [products, setProducts] = useState([])
  const [isFetching, setIsFetching] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      setIsFetching(true)
      try {

      
      const data = await axios.get("http://localhost:3001/store/")
      if (data?.products) {
        setProducts(data.products)
      }
    } catch (err) {
        setError(err)
      }
      setIsFetching(false)
    }


    fetchProducts()
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                error={error}
                products={products}
                isFetching={isFetching}
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}