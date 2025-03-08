import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({subsets: ['latin']});

export const metadata = {
  title: "Satyam Kumar",
  description: "Dev portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
         {children}  
        </main>
      </body>
    </html>
  );
}
