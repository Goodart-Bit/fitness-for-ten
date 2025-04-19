import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import styles from "./page.module.css";
import { NavBar, Footer } from "./components/NavBar/navBar";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--poppins",
  weight: ['400', '600', '800'], // You can include other weights like '700' if needed
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: "Fitness for 10",
  description: "The Canada's Prince Albert gym site"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>
        <div className={styles.page}>
          <NavBar />
          <main className={styles.main}>{children}</main>
          <Toaster position="top-right" reverseOrder={false}/>
          <Footer />
        </div>
      </body>
    </html>
  );
}
