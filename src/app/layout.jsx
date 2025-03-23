import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import Hero from "@/components/Hero";

const inter = Inter({subsets: ['latin']});

export const metadata = {
  title: "Satyam Kumar",
  description: "Dev portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className={inter.className}>
          <Navbar />
          <main>
          {children}  
          </main>
        </body>
      </ThemeProvider>

    </html>
  );
}
