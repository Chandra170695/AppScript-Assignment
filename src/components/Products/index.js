import './index.css'
import React, {useState} from 'react'

const ProductList = () => {
  // Sample product data
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Product 1 is very large name here',
      description: 'Sign in or Create an account to see pricing',
      imageUrl: 'https://picsum.photos/200/300',
      favorite: false,
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Sign in or Create an account to see pricing',
      imageUrl: 'https://picsum.photos/201/300',
      favorite: false,
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Sign in or Create an account to see pricing',
      imageUrl: 'https://picsum.photos/202/300',
      favorite: false,
    },
    {
      id: 4,
      name: 'Product 4',
      description: 'Sign in or Create an account to see pricing',
      imageUrl: 'https://picsum.photos/203/300',
      favorite: false,
    },
    {
      id: 5,
      name: 'Product 5',
      description: 'Sign in or Create an account to see pricing',
      imageUrl: 'https://picsum.photos/204/300',
      favorite: false,
    },
    {
      id: 6,
      name: 'Product 6',
      description: 'Sign in or Create an account to see pricing',
      imageUrl: 'https://picsum.photos/205/300',
      favorite: false,
    },
    {
      id: 7,
      name: 'Product 7',
      description: 'Sign in or Create an account to see pricing',
      imageUrl: 'https://picsum.photos/206/300',
      favorite: false,
    },
    {
      id: 8,
      name: 'Product 8',
      description: 'Sign in or Create an account to see pricing',
      imageUrl: 'https://picsum.photos/207/300',
      favorite: false,
    },
    {
      id: 9,
      name: 'Product 9',
      description: 'Sign in or Create an account to see pricing',
      imageUrl: 'https://picsum.photos/208/300',
      favorite: false,
    },
    {
      id: 10,
      name: 'Product 10',
      description: 'Sign in or Create an account to see pricing',
      imageUrl: 'https://picsum.photos/209/300',
      favorite: false,
    },

    {
      id: 11,
      name: 'Product 11',
      description: 'Sign in or Create an account to see pricing',
      imageUrl: 'https://picsum.photos/210/300',
      favorite: false,
    },
    {
      id: 12,
      name: 'Product 12',
      description: 'Sign in or Create an account to see pricing',
      imageUrl: 'https://picsum.photos/211/300',
      favorite: false,
    },
  ])

  const toggleFavourite = productId => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === productId
          ? {...product, favorite: !product.favorite}
          : product,
      ),
    )
  }

  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product">
          <img src={product.imageUrl} alt={product.name} />
          <h2>
            {product.name.length > 10
              ? product.name.substring(0, 10) + '...'
              : product.name}
          </h2>
          <div className="flex">
            <p className="productDesc">{product.description}</p>
            <span className="left" onClick={() => toggleFavourite(product.id)}>
              {product.favorite ? (
                <>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.62 20.8096C12.28 20.9296 11.72 20.9296 11.38 20.8096C8.48 19.8196 2 15.6896 2 8.68961C2 5.59961 4.49 3.09961 7.56 3.09961C9.38 3.09961 10.99 3.97961 12 5.33961C13.01 3.97961 14.63 3.09961 16.44 3.09961C19.51 3.09961 22 5.59961 22 8.68961C22 15.6896 15.52 19.8196 12.62 20.8096Z"
                      fill="#EB4C6B"
                    />
                  </svg>
                </>
              ) : (
                <>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.62 20.8097C12.28 20.9297 11.72 20.9297 11.38 20.8097C8.48 19.8197 2 15.6897 2 8.68973C2 5.59973 4.49 3.09973 7.56 3.09973C9.38 3.09973 10.99 3.97973 12 5.33973C13.01 3.97973 14.63 3.09973 16.44 3.09973C19.51 3.09973 22 5.59973 22 8.68973C22 15.6897 15.52 19.8197 12.62 20.8097Z"
                      stroke="#292D32"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </>
              )}
            </span>
          </div>
          {/* Like icon can be added here */}
        </div>
      ))}
    </div>
  )
}

export default ProductList
