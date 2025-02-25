import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { StyleProviders } from "../providers/chakra.provider";
import dynamic from "next/dynamic";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	const CrispWithNoSSR = dynamic(
    () => import('../components/crisp')
  )
  return (
    <html lang='fr' data-theme="light" style={{ colorScheme: "light" }}>
			<CrispWithNoSSR />
      <body suppressHydrationWarning>
        <StyleProviders>
          <Header />
          {children}
          <Footer />
        </StyleProviders>
      </body>
    </html>
  );
}
