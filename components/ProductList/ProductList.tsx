import { useState, useEffect } from "react";
import { Product } from "../../hooks/useProductList";
import { ProductCard } from "../ProductCard/ProductCard";
import styles from "../ProductList/productList.module.css";

interface ProductListProps {
  products: Product[];
  itemsToShow: number;
}

export function ProductList({ products, itemsToShow }: ProductListProps) {
  const totalPages = Math.ceil(products.length / itemsToShow);
  const [currentPage, setCurrentPage] = useState(0);

  const [visibleProducts, setVisibleProducts] = useState(
    products.slice(0, itemsToShow)
  );

  useEffect(() => {
    const startIndex = currentPage * itemsToShow;
    const endIndex = startIndex + itemsToShow;
    setVisibleProducts(products.slice(startIndex, endIndex));
  }, [currentPage, itemsToShow, products]);

  const handlePrev = () => {
    const isAfterFirstPage = currentPage > 0;
    if (isAfterFirstPage) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    const isBeforeLastPage = currentPage < totalPages - 1;
    if (isBeforeLastPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <section
      className={`relative flex flex-row items-center ${styles.productListSection}`}
    >
      <div className={`shadow-lg ${styles.productListArrowButton}`}>
        <button
          onClick={handlePrev}
          disabled={currentPage === 0}
          aria-label="Previous products"
          className={`${styles.arrowButtonBaseStyles}
          ${styles.productArrowLeft}`}
        >
          &#8592;
        </button>
      </div>

      <div className={`${styles.productListCard}`}>
        {visibleProducts.map((product, idx) => (
          <ProductCard
            key={`${product.id}-${idx}`}
            image={product.image}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>

      <div className={`${styles.productListArrowButton}`}>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages - 1}
          aria-label="Next products"
          className={`${styles.arrowButtonBaseStyles}
          ${styles.productArrowRight}`}
        >
          &#8594;
        </button>
      </div>
    </section>
  );
}
