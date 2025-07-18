'use client';

import React, { useEffect, memo } from 'react';
import { useAppDispatch } from '@/app/redux/hooks';
import { useRouter } from 'next/navigation';
import ReduxProvider from '@/app/ReduxProvider';
import BeHomeCarousel from '@/app/components/home-carousel';
import Image from 'next/image';
import sampleCarouselImage from 'images/sample-carousel.jpg';

const DashboardPage = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (typeof window !== 'undefined' && !localStorage.getItem('accessToken')) {
            router.push('/'); // Redirect to home if not authenticated
        }
    }, [router]);

    return (
        <main className="p-8">
            <h1>Dashboard</h1>
            <section>
                <BeHomeCarousel />
            </section>

            <section>
                <h2>Featured</h2>
                <div className="carousel">
                    <div className="book-card">
                        <Image src={sampleCarouselImage} alt="Featured Book" />
                    </div>
                    <div className="book-card">
                        <Image src={sampleCarouselImage} alt="Featured Book" />
                    </div>
                    <div className="book-card">
                        <Image src={sampleCarouselImage} alt="Featured Book" />
                    </div>
                    <div className="book-card">
                        <Image src={sampleCarouselImage} alt="Featured Book" />
                    </div>
                    <div className="book-card">
                        <Image src={sampleCarouselImage} alt="Featured Book" />
                    </div>
                </div>

                <h2>Top picks</h2>
                <div className="carousel">
                    <div className="book-card">
                        <Image src={sampleCarouselImage} alt="Top Pick Book" />
                    </div>
                </div>

                <h2>Trending</h2>
                <div className="carousel">
                    <div className="book-card">
                        <Image src={sampleCarouselImage} alt="Trending Book" />
                    </div>
                </div>
                <h2>New Arrivals</h2>
                <div className="carousel">
                    <div className="book-card">
                        <Image src={sampleCarouselImage} alt="New Arrival Book" />
                    </div>
                </div>
                <h2>Most Popular</h2>
                <div className="carousel">
                    <div className="book-card">
                        <Image src={sampleCarouselImage} alt="Most Popular Book" />
                    </div>
                </div>
                <h2>Recommendations</h2>
                <div className="carousel">
                    <div className="book-card">
                        <Image src={sampleCarouselImage} alt="Recommended Book" />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default memo(DashboardPage);
