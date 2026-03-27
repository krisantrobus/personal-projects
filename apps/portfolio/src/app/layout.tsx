import './global.css';

export const metadata = {
  title: 'Kristian Antrobus - Software Engineer',
  description:
    'Welcome to the portfolio for Kristian Antrobus. This site is designed to introduce you to the developer and their experience and skills.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background text-foreground">{children}</body>
    </html>
  );
}
