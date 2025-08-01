import type { Metadata } from 'next';
import Container from 'react-bootstrap/Container';
import Index from './pages/index/page';
import BeLoginForm from '@/global-components/login-form';
import ReduxProvider from './ReduxProvider';


export const metadata: Metadata = {
    title: 'Book Eilen',
    description: 'Generated by create next app',
};

export default function Home({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div  className="form-content">
                {/* <Index /> */}
                <BeLoginForm />
        </div>
    );
}
