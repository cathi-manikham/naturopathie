import { Metadata } from "next";
import { Naturopathie } from "../../components/Naturopathie";
import styles from "../Layout.module.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://naturopathie.vercel.app/naturopathie"),
  title: "Naturopathie - Catherine Manikham | Naturopathe",
  description: ` Le naturopathe utilise des thérapies naturelles pour promouvoir la
      santé et le bien-être, en identifiant et en traitant les causes
      profondes des maladies.`,
  keywords:
    "naturopathie, Approche holistique, Médecines naturelles, Soins individualisés,Catherine Manikham, Catherine, Manikham, bien-être, guérison naturelle",
  openGraph: {
    title: "Naturopathie - Catherine Manikham | Naturopathe",
    url: "https://naturopathie.vercel.app/Naturopathie",
    type: "website",
    description: `Le naturopathe utilise des thérapies naturelles pour promouvoir la
        santé et le bien-être, en identifiant et en traitant les causes
        profondes des maladies.`,
    images: "/home.png",
  },
};

export default function page() {
  return (
    <div className={styles.layout}>
      <Naturopathie />
    </div>
  );
}
