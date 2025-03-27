import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import Hero from "@/components/Hero";
import { Toaster } from "@/components/ui/sonner"
import { ScrollProgress } from "@/components/magicui/scroll-progress";

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
          <ScrollProgress />
          <Navbar />
          <main>
          {children}  
          </main>
          <Toaster />
        </body>
      </ThemeProvider>

    </html>
  );
}
