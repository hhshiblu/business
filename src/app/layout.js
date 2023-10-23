import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./redux/Providers";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rajdhola.com",
  description: "Rajdhole e-commerce website",
};

export default function RootLayout({ children }) {
  return (

      <html lang="en">
        <body className={inter.className}>
         
            <Providers>{children}</Providers>
          
        </body>
      </html>

  );
}
