import { Product } from "../../sanity.types";

interface ProductsViewProps {
  products: Product[];
}

const ProductsView = ({ products }: ProductsViewProps) => {
  return (
    <div>
      {/* categories */}
      <div></div>

      {/* products */}
      <div className="flex-1">
        <div>
          {/* <ProductGrid products={products} /> */}
          <hr className="x-1/2 sm:w-3/4" />
        </div>
      </div>
    </div>
  );
};

export default ProductsView;
