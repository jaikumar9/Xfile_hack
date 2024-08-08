import { Inter } from "next/font/google";
import "./globals.css";
import { Web3Modal } from '../context/web3modal'
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Xfile",
  description: "Decentralized File Locker",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Web3Modal>{children}</Web3Modal>
      </body>
    </html>
  )
}
