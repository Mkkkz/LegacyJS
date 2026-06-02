import './globals.css';

export const metadata = {
  title: 'LegacyJS - Portfólio',
  description: 'Portfólio oficial da LegacyJS'
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
