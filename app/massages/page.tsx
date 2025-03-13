import { Metadata } from "next";
import { Suspense } from "react";
import { Naturopathie } from "../../components/Naturopathie";
import styles from "../Layout.module.css";
import { Massages } from "@/components/Massages";
export const metadata: Metadata = {
  metadataBase: new URL("https://naturopathie.vercel.app/massages"),
  title: "Massages Bien-être & Drainage - Catherine Manikham | Naturopathe",
  description: `Découvrez nos massages relaxants, drainants et le Chi Nei Tsang. Massages à domicile dans un cadre apaisant pour votre détente et bien-être. Drainage naturopathique disponible au Centre Tout Naturellement.`,
  keywords:
    "massage relaxant, drainage manuel, Chi Nei Tsang, massage détox, massage à domicile, drainage naturopathique, Catherine Manikham, bien-être, détente, massage ventre",
  openGraph: {
    title: "Massages Bien-être & Drainage - Catherine Manikham | Naturopathe",
    url: "https://naturopathie.vercel.app/massages",
    type: "website",
    description: `Découvrez nos massages relaxants, drainants et le Chi Nei Tsang. Massages à domicile dans un cadre apaisant pour votre détente et bien-être. Drainage naturopathique disponible au Centre Tout Naturellement.`,
    images: "/massages.png",
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
