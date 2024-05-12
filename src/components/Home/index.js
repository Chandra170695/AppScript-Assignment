import Header from '../Header'
import CheckboxAccordion from '../SideNav'
import ProductList from '../Products'

import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="Home-container">
      <h1 className="home-heading">DISCOVER OUR PRODUCTS</h1>
      <p className="home-description">
        Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
        <br />
        scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
      </p>
    </div>
    <div className="Products-container">
      <div className="child-1">
        <CheckboxAccordion />
      </div>
      <div className="child-2">
        <ProductList />
      </div>
    </div>
  </>
)

export default Home
