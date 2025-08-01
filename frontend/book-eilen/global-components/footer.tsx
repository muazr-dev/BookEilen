'use client';

import Image from 'next/image';
import footerLogoImage from 'images/logo.svg';
import BookEilen from 'images/logo-img.png';

export default function Footer() {
    return (
        <footer className="be-footer">
            <div className="footer-content">
                <div className="be-footer-top row">
                    <div className="be-logo-content col-md-6 col-lg-5 col-xxl-6">
                        <div className="be-l-content">
                        <div className="be-logo">
                            <a href="/" className="be-link">
                                <Image src={BookEilen} alt="Logo-img" width="138" height="28" />
                            </a>
                        </div>
                        <p>Bookeilen is an open, editable library catalog, building towards a web page for every book ever published</p>
                        <div className="be-footer-icons">
                            <a href="#" className="x-color">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.2737 10.1635L23.2023 0H21.0872L13.3313 8.82305L7.14125 0H0L9.3626 13.3433L0 24H2.11504L10.3002 14.6806L16.8388 24H23.98M2.8784 1.5619H6.12769L21.0856 22.5148H17.8355" />
                                </svg>
                                <span className="sr-only">Facebook page</span>
                            </a>
                            <a href="#" className="">
                                <svg
                                    className="w-4 h-4"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 21 16"
                                >
                                    <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                                </svg>
                                <span className="sr-only">Discord community</span>
                            </a>
                            <a href="#" className="">
                                <svg
                                    className="w-4 h-4"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 17"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="sr-only">Twitter page</span>
                            </a>
                            <a href="#" className="">
                                <svg
                                    className="w-4 h-4"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="sr-only">GitHub account</span>
                            </a>
                        </div>
                        </div>
                    </div>
                    <div className="bfc-content col-md-6 col-lg-2 ">
                            <h5 className="">Explore</h5>
                            <ul className="">
                                <li className="">
                                    <a href="#" className="">
                                        Genre
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="">
                                        About Us
                                    </a>
                                </li>
                                <li className="">
                                    <a href="#" className="">
                                        Our Bookstore
                                    </a>
                                </li>
                                <li className="">
                                    <a href="#" className="">
                                        Shipping & Delivery
                                    </a>
                                </li>
                            </ul>
                    </div>
                    <div className="bfc-content col-md-6 col-lg-2 ">
                            <h5 className="">Follow us</h5>
                            <ul className="">
                                <li className="">
                                    <a href="https://github.com/themesberg/flowbite" className="">
                                        Github
                                    </a>
                                </li>
                                <li>
                                    <a href="https://discord.gg/4eeurUVvTy" className="">
                                        Discord
                                    </a>
                                </li>
                                <li>
                                    <a href="https://discord.gg/4eeurUVvTy" className="">
                                        X
                                    </a>
                                </li>
                                <li>
                                    <a href="https://discord.gg/4eeurUVvTy" className="">
                                        Instagram
                                    </a>
                                </li>
                            </ul>
                    </div>
                    <div className="bfc-content n-content col-md-6 col-lg-1">
                         <div className="newsletter-content">
                           <h5>Newsletter</h5>
                           <input
                            type="text"
                            placeholder="Search here"
                            className="be-search-input"
                           />
                           <button type="button" className="btn">Subscribe Now</button>
                         </div>
                    </div>
                </div>
                <hr className="" />
                <div className="be-footer-bottom">
                    <span className="">© 2025 . All Rights Reserved.</span>
                    <ul className="">
                        <li className="">
                                    <a href="#">
                                        Privacy Policy
                                    </a>
                        </li>
                        <li>
                                    <a href="#">
                                        Terms &amp; Conditions
                                    </a>
                        </li>
                        <li className="">
                                    <a href="#">
                                        Cookies Settings
                                    </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
