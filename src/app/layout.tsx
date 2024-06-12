import type { Metadata } from "next";
import "./globals.css";
import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const metadata: Metadata = {
  title: "prop website",
  description: "Generated by developerseyed@gmail.com",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          rtl={false}
          draggable
          theme="light"
          transition={Bounce}
        />
        {/* Same as */}
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}
