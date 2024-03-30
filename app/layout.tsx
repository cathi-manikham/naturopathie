import type { Metadata } from "next";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { StyleProviders } from "../providers/chakra.provider";

export const metadata: Metadata = {
  metadataBase: new URL("https://naturopathie.vercel.app/"),
  title: "Catherine Manikham | Naturopathe",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <StyleProviders>
          <Header />
          {children}
          <Footer />
        </StyleProviders>
      </body>
    </html>
  );
}
