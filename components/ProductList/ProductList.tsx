import { ProductCard } from "../ProductCard/ProductCard";
import styles from "../ProductList/productList.module.css";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import { Product } from "../../hooks/useProductList";

interface ProductListProps {
  products: Product[];
  itemsToShow: number;
}

export function ProductList({ products, itemsToShow }: ProductListProps) {
  const totalPages = Math.ceil(products.length / itemsToShow);
  const [page, setPage] = useState(0);
  const [visibleProducts, setVisibleProducts] = useState(
    products.slice(0, itemsToShow)
  );

  useEffect(() => {
    const startIndex = page * itemsToShow;
    const endIndex = startIndex + itemsToShow;
    setVisibleProducts(products.slice(startIndex, endIndex));
  }, [page, itemsToShow, products]);

  const handlePrev = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    if (page < totalPages - 1) {
      setPage(page + 1);
    }
  };

  const arrowButtonBaseStyles = `text-6xl w-8 h-10 flex items-center 
  justify-center text-orange-500 disabled:text-gray-400 
  disabled:cursor-not-allowed cursor-pointer`;

  return (
    <section
      className={`relative flex flex-row items-center ${styles.section}`}
    >
      <button
        onClick={handlePrev}
        disabled={page === 0}
        aria-label="Previous products"
        className={`${arrowButtonBaseStyles}
          ${styles.productArrowLeft}`}
      >
        &#8592;
      </button>

      <div
        className={`flex flex-row gap-4 transition-opacity duration-300 ease-in-out`}
      >
        {visibleProducts.map((product) => (
          <ProductCard
            key={`${product.id}${uuidv4()}`}
            image={product.image}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>

      <button
        onClick={handleNext}
        disabled={page === totalPages - 1}
        aria-label="Next products"
        className={`${arrowButtonBaseStyles}
          ${styles.productArrowRight}`}
      >
        &#8594;
      </button>
    </section>
  );
}
