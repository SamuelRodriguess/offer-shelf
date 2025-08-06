import { ProductCard } from "../ProductCard/ProductCard";
import { v4 as uuidv4 } from "uuid";
import styles from "../ProductList/productList.module.css";
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
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (isTransitioning) {
      return;
    }
    const startIndex = page * itemsToShow;
    const endIndex = startIndex + itemsToShow;
    setVisibleProducts(products.slice(startIndex, endIndex));
  }, [page, itemsToShow, products, isTransitioning]);

  const changePage = (newPage: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setPage(newPage);
      setIsTransitioning(false); 
    }, 300);
  };

  const handlePrev = () => {
    if (page > 0) changePage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages - 1) changePage(page + 1);
  };

  return (
    <section className={`relative flex flex-row items-center ${styles.section}`}>
      <button
        onClick={handlePrev}
        disabled={page === 0}
        aria-label="Previous products"
        className="text-6xl w-8 h-10 flex items-center justify-center text-orange-500 disabled:text-gray-400 disabled:cursor-not-allowed cursor-pointer"
        style={{
          position: "absolute",
          top: "50%",
          left: "-2rem",
          transform: "translateY(-50%)",
        }}
      >
        &#8592;
      </button>
      <div
        className={`flex flex-row gap-4 transition-opacity duration-300 ease-in-out ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
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
        className="text-6xl w-8 h-10 flex items-center justify-center text-orange-500 disabled:text-gray-400 disabled:cursor-not-allowed cursor-pointer"
        style={{
          position: "absolute",
          top: "50%",
          right: "-2rem",
          transform: "translateY(-50%)",
        }}
      >
        &#8594;
      </button>
    </section>
  );
}
