import Image, { StaticImageData } from "next/image";
import styles from "./banner.module.css";

interface BannerProps {
  bannerImgMobile: StaticImageData;
  bannerImg: StaticImageData;
}

export function Banner({ bannerImgMobile, bannerImg }: BannerProps) {
  return (
    <section>
      <div className={`${styles.bannerDesktop}`}>
        <Image
          src={bannerImg}
          alt="Banner de ofertas de produtos desktop"
          width={1920}
          height={640}
          loading="lazy"
          sizes="(min-width: 768px) 100vw, 100vw"
          className="w-full h-auto"
        />
      </div>
      <div className={`${styles.bannerMobile}`}>
        <Image
          src={bannerImgMobile}
          alt="Banner de ofertas de produtos mobile"
          width={768}
          height={640}
          className="w-full h-auto"
          priority
          sizes="100vw"
        />
      </div>
    </section>
  );
}
