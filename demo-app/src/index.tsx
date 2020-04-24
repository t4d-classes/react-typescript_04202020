import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Switch, Route, Link,
  useParams, useHistory, useLocation, useRouteMatch,
} from 'react-router-dom';
import { isNil, isNull } from 'lodash';

interface Product {
  id: number;
  name: string;
}

const products: Product[] = [
  { id: 1, name: 'Water' },
  { id: 2, name: 'Juice' },
  { id: 3, name: 'Soda' },
  { id: 4, name: 'Tea' },
  { id: 5, name: 'Coffee' },
]

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {

  const location = useLocation<{ productId?: number }>();

  return (
    <>
      <h2>Home</h2>
      {location?.state?.productId && <p>Last Visited: {location?.state?.productId}</p>}
      <ul>
        {products.map(product => <li>
          <Link to={'/product/' + product.id}>{product.name}</Link>
        </li>)}
      </ul>
    </>
  );
};

const About = () => {

  const { path, url } = useRouteMatch();

  return (
    <>
      <header>
        <h2>About</h2>
      </header>
      <nav>
        <ul>
          <li><Link to={`${url}/mission`}>Our Mission</Link></li>
          <li><Link to={`${url}/team`}>Our Team</Link></li>
          <li><Link to={`${url}/story`}>Our Story</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route path={`${path}`} exact>
          <section>
            <p>Select a section above...</p>
          </section>
        </Route>
        <Route path={`${path}/mission`}>
          <section>
            <h3>Our Mission</h3>
            <p>Our mission is...</p>
          </section>
        </Route>
        <Route path={`${path}/team`}>
          <section>
            <h3>Our Team</h3>
            <p>Our team is...</p>
          </section>
        </Route>
        <Route path={`${path}/story`}>
          <section>
            <h3>Our Story</h3>
            <p>Our story is...</p>
          </section>
        </Route>
      </Switch>
    </>
  );
}

const Contact = () => {

  const query = useQuery();

  return (
    <>
      <h2>Contact</h2>

      <form>
        <div>
          <label>First Name:</label>
          <input type="text" defaultValue={query.get('firstname') || ''} />
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" defaultValue={query.get('lastname') || ''} />
        </div>
      </form>
    </>
  );
};

const Product = () => {

  const params = useParams<{ productId?: string }>();
  const history = useHistory();

  let product: Product | null = null;
  let errorMessage = 'Please specify a product.';

  if (!isNil(params.productId)) {
    const productId = parseInt(params.productId, 10);
    if (!isNaN(productId)) {
      const productFound = products.find(p => p.id === productId);
      if (!isNil(productFound)) {
        product = productFound;
        errorMessage = '';
      }
    }
  }

  const returnToHome = () => {
    history.push('/', { productId: product ? product.id : -1 });
  };

  return (
    <>
      <h2>Product</h2>
      {errorMessage && <p>Error: {errorMessage}</p>}
      {!isNull(product) && <ul>
        <li>Id: {product.id}</li>
        <li>Name: {product.name}</li>
      </ul>}

      <button type="button" onClick={returnToHome}>Return to Home</button>
    </>
  );
};

ReactDOM.render(
  <Router>
    <header>
      <h1>My Company</h1>
    </header>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact?firstname=Bob&lastname=Smith">Contact</Link></li>
      </ul>
    </nav>
    <div>
      <Switch>
        <Route path="/" exact><Home /></Route>
        <Route path="/product/:productId" exact><Product /></Route>
        <Route path="/about"><About /></Route>
        <Route path="/contact"><Contact /></Route>
      </Switch>
    </div>

  </Router>,
  document.querySelector('#root'),
);