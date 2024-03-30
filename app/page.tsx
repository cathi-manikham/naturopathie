import { Metadata } from "next/types";
import { Biography } from "../components/Biography";
import Feature from "../components/Feature";
import Hero from "../components/Hero";
import { Testimonials } from "../components/Testimonials";
import styles from "./Layout.module.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://naturopathie.vercel.app/"),
  title: "Accueil - Catherine Manikham | Naturopathe",
  description: ` Le naturopathe utilise des thérapies naturelles pour promouvoir la
    santé et le bien-être, en identifiant et en traitant les causes
    profondes des maladies.`,
  keywords:
    "naturopathie, Approche holistique, Médecines naturelles, Soins individualisés,Catherine Manikham, Catherine, Manikham, bien-être, guérison naturelle",
  openGraph: {
    title: "Accueil - Catherine Manikham | Naturopathe",
    type: "website",
    description: `Le naturopathe utilise des thérapies naturelles pour promouvoir la
      santé et le bien-être, en identifiant et en traitant les causes
      profondes des maladies.`,
    images: "/home.png",
  },
};

export default function Home() {
  return (
    <div className={styles.layout}>
      <Hero />
      <Feature />
      <Biography />
      <Testimonials />
    </div>
  );
}
