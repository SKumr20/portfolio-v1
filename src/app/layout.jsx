import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/sections/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/sonner"
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import Footer from "@/components/sections/Footer";

const inter = Inter({subsets: ['latin']});

export const metadata = {
  title: "Satyam Kumar",
  description: "Dev portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <ScrollProgress />
            <Navbar />
            <main className="flex-grow">
              {children}  
            </main>
            <Toaster />
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}