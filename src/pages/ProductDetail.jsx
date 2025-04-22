import { useParams } from 'react-router-dom';

function ProductDetailPage() {
  const params = useParams();

  params.productId;

  return (
    <>
      <h1>Product Details!</h1>
      <p>For Id:{params.productId}</p>
      <p>
        {/* This "relative" property is important. It ensures we go back 1 URL segment, instead of back to the Parent Route, which would be the root. */}
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </>
  );
}

export default ProductDetailPage;
