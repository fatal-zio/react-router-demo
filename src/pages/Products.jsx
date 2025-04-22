import { Link } from 'react-router-dom';

const PRODUCTS = [
  { id: 'p1', title: 'Product One' },
  { id: 'p2', title: 'Product Two' },
  { id: 'p3', title: 'Product Three' },
];

function ProductsPage() {
  return (
    <>
      <h1>The Products Page</h1>
      <ul>
        {PRODUCTS.map((prod) => (
          <li key={prod.id}>
            <Link to={prod.id}>{prod.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProductsPage;
