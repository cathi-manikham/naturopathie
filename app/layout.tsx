import type { Metadata } from "next";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { StyleProviders } from "../providers/chakra.provider";

export const metadata: Metadata = {
  title: "Catherine Manikham | Naturopathe",
  description:
    "Embarquez pour un voyage de guérison naturelle avec Catherine Manikham",
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
