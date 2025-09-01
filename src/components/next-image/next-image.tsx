import Image from "next/image";
import styles from "./next-image.module.css";

interface NextImageProps {
  src: string;
  alt: string;
  contain: boolean;
}
export default function NextImage({
  src,
  alt,
  contain = true,
}: NextImageProps) {
  return (
    <div className={styles.imageWrapper}>
      <Image
        src={src}
        alt={alt}
        fill
        style={contain ? { objectFit: "contain" } : { objectFit: "cover" }}
        className={styles.nextImage}
      />
    </div>
  );
}
