"use client";
import styles from "./offers.module.css";
import bannerImg from "../../assets/banner.jpg";
import bannerImgMobile from "../../assets/generated-image.png";
import { Banner } from "../../components/Banner/Banner";
import { useIsMobile } from "../../utils/isMobile";
import { ProductList } from "../../components/ProductList/ProductList";
import { Title } from "../../components/Title/Title";
import { useProductList } from "../../hooks/useProductList";

export default function Page() {
  const { productsData } = useProductList();
  const itemsToShow = useIsMobile() ? 2 : 6;
  if (!productsData) return;
  return (
    <>
      <Banner bannerImg={bannerImg} bannerImgMobile={bannerImgMobile} />
      <Title text="Ofertas da Semana" className={styles.productTitle} />
      <ProductList products={productsData} itemsToShow={itemsToShow} />
    </>
  );
}
