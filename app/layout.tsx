import Footer from '@/components/Footer';
import Header from '@/components/Header';


import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
      </head>
      <body className='bg-gray-100'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

