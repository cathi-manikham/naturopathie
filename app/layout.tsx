import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { StyleProviders } from "../providers/chakra.provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='fr'>
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
