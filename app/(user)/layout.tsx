import { Suspense } from "react";
import "@/app/globals.css";
import NavbarComponent from "@/components/navbar/NavbarComponent";
import Loading from "./loading";
import Error from "./error";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";

import { inter, suwannaphum, localCustomFont } from "./fonts";
import { Metadata } from "next";
import StoreProvider from "../StoreProvider";
import SessionWrapper from "../SessionProvider";
import FooterComponent from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Newjeans Store",
  description: "Newjeans Store is a web for selling jeans.",
  icons:"https://img1.picmix.com/output/stamp/normal/3/1/2/5/2525213_cf584.png",
  openGraph: {
    title: "Newjeans Store",
    description: "Newjeans Store is a web for selling jeans.",
    images: "https://i8.amplience.net/i/naras/NewJeans_ADOR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SessionWrapper>
        <body
          className={`${inter.variable} ${suwannaphum.variable} ${localCustomFont.variable}`}
        >
          <StoreProvider>
            <header>
              <NavbarComponent />
            </header>
            <ErrorBoundary errorComponent={Error}>
              <Suspense fallback={<Loading />}>{children}</Suspense>
            </ErrorBoundary>
            <FooterComponent />
          </StoreProvider>
        </body>
      </SessionWrapper>
    </html>
  );
}
