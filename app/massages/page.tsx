import { Metadata } from "next";
import { Suspense } from "react";
import { Naturopathie } from "../../components/Naturopathie";
import styles from "../Layout.module.css";
import { Massages } from "@/components/Massages";

export const metadata: Metadata = {
  metadataBase: new URL("https://naturopathie.vercel.app/massages"),
  title: "Naturopathie - Catherine Manikham | Naturopathe",
  description: `La naturopathie est un art de vivre qui remet l’individu au centre de ses besoins, par le retour à une vie plus simple et proche de la nature, dans le but de garder la santé et de vivre mieux.`,
  keywords:
    "naturopathie, Approche holistique, Médecines naturelles, Soins individualisés,Catherine Manikham, Catherine, Manikham, bien-être, guérison naturelle",
  openGraph: {
    title: "Naturopathie - Catherine Manikham | Naturopathe",
    url: "https://naturopathie.vercel.app/massages",
    type: "website",
    description: `La naturopathie est un art de vivre qui remet l’individu au centre de ses besoins, par le retour à une vie plus simple et proche de la nature, dans le but de garder la santé et de vivre mieux.`,
    images: "/home.png",
  },
};

export default function page() {
  return (
    <Suspense
      fallback={
        <div className={styles.loading}>
          <div className={styles.loader}></div>
        </div>
      }
    >
      <div className={styles.layout}>
        <Massages />
      </div>
    </Suspense>
  );
}
