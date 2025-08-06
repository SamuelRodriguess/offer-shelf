"use client";
import styles from "./offers.module.css";
import bannerImg from "../../assets/banner.jpg";
import bannerImgMobile from "../../assets/generated-image.png";
import { Banner } from "../../components/Banner/Banner";
import { useIsMobile } from "../../utils/isMobile";
import { ProductList } from "../../components/ProductList/ProductList";
import { Title } from "../../components/Title/Title";
import { useProductList } from "../../hooks/useProductList";

const ITEMS_DESKTOP = 6;

export default function Page() {
  const { productsData } = useProductList();
  const isMobile = useIsMobile(1280);

  if (!productsData || productsData.length === 0) {
      return null;
  }

  const itemsToShow = isMobile ? productsData.length : ITEMS_DESKTOP;

  return (
    <>
      <Banner bannerImg={bannerImg} bannerImgMobile={bannerImgMobile} />
      <Title text="Ofertas da Semana" className={styles.productTitle} />
      <ProductList products={productsData} itemsToShow={itemsToShow} />
    </>
  );
}
