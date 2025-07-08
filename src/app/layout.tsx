import "./globals.css";
import Layout from "@/components/layout";

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
