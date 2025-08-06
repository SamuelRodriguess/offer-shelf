import Image from "next/image";
import { formatPrice } from "../../utils/formatPrice";
import styles from "../ProductCard/productCard.module.css";

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
  onClick?: () => void;
}

export function ProductCard({ title, price, image }: ProductCardProps) {
  return (
    <div
      className={`flex flex-col items-start p-4
        rounded shadow-lg justify-between ${styles.productCard}
      `}
    >
      <Image
        src={image}
        alt={title}
        width={200}
        height={200}
        className={`${styles.productImage}`}
      />
      <h3>{title}</h3>
      <p className="pb-4">{formatPrice(price)}</p>
      <button
        className={`cursor-pointer w-full 
          bg-orange-500 text-white font-bold px-4 py-2 
          rounded hover:bg-orange-600 transition`}
      >
        Comprar
      </button>
    </div>
  );
}
