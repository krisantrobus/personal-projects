import './global.css';

export const metadata = {
  title: 'AI Mixology',
  description:
    'Welcome to AI Mixology, an AI powered cocktail app. Browse recipes, interact, review and even create new recipes using AI and your ingredients at home.',
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
