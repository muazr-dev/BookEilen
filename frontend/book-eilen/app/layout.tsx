import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '../src/styles/styles.scss';
import Header from '../global-components/header';
import Footer from '@/global-components/footer';
import ReduxProvider from './ReduxProvider';
import { Inter, Montserrat } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });


const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ReduxProvider>
            <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
                <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                    <Header />
                    {children}
                    <Footer />
                </body>
            </html>
        </ReduxProvider>

    );
}
