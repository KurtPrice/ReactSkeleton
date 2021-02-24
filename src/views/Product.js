import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function Product() {
  const { id } = useParams()
  const url = `http://localhost:5000/users/${id}`
  const [product, setProduct] = useState({
    loading: false,
    data: null
  })

  let content = null
  
  useEffect(() => {
    setProduct({
      loading: true,
      data: null
    })
    axios.get(url)
      .then(response => {
        setProduct({
          loading: false,
          data: response.data
        })
      })
    }, [url])
  
  if(product.loading) {
    content = <p>... loading</p>
  }

  if(product.data) {
      content = 
        <img 
        src={product.data.images[0].imageUrl}
        alt={product.data.name} />
  }

  return(
    <div>
      {content}
    </div>
  )
}

export default Product