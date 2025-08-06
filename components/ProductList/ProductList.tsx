import { ProductCard } from "../ProductCard/ProductCard";
import { v4 as uuidv4 } from "uuid";
import styles from "../ProductList/productList.module.css";
interface Product {
  id: string;
  image: string;
  title: string;
  price: number;
}

interface ProductListProps {
  products: any[];
  itemsToShow: number;
}

export function ProductList({ products, itemsToShow }: ProductListProps) {
  return (
    <section className={`flex flex-row items-center ${styles.section}`}>
      {products.slice(0, itemsToShow).map((product) => (
        <ProductCard
          key={uuidv4()}
          image={product.image}
          title={product.title}
          price={product.price}
        />
      ))}
    </section>
  );
}
