import { Metadata } from "next/types";
import ContactForm from "../../components/ContactForm";
import PricingList from "../../components/PricingList";
import { FAQ } from "../../components/faq";
import styles from "../Layout.module.css";

export const metadata: Metadata = {
  title: "Tarifs & Contact  - Catherine Manikham | Naturopathe",
  description: `Choisissez ce qui vous convient le mieux.Consultations à domicile dans un périmètre de 10 km autour de Châtenay-Malabry et à Paris.`,
  keywords:
    "Bilan de vitalité (1h30), Massages relaxant de 45 minutes, Massages relaxant de 1 heure, faq, Questions fréquemment posées Contactez moi",
  openGraph: {
    title: "Tarifs & Contact  - Catherine Manikham | Naturopathe",
    description: `Choisissez ce qui vous convient le mieux.Consultations à domicile dans un périmètre de 10 km autour de Châtenay-Malabry et à Paris.`,
    images: [
      {
        url: "/pricing.png",
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function Page() {
  return (
    <div className={styles.layout}>
      <PricingList />
      <FAQ />
      <ContactForm />
    </div>
  );
}