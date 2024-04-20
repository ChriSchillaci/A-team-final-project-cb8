import Navbar from "@/components/navbar";
import "@/styles/globals.scss";
import Menu from "@/components/menu";
import Footer from "@/components/footer/Footer";
import { useRouter } from "next/router";
import { AuthProvider } from "./api/authContext";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <AuthProvider>
        <Navbar />
        <main
          className={`main-layout ${
            router.pathname === "/signup" ? "main-layout__signup" : ""
          }`}
        >
          <Component {...pageProps} />
        </main>
        <Menu />
        {router.pathname !== "/login" && router.pathname !== "/signup" && (
          <Footer />
        )}
      </AuthProvider>
    </>
  );
}
