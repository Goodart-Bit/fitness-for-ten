import React from 'react';
import Link from 'next/link';
import './navBar.css'

export function NavBar() {
    return (
    <ul className="flex-nav">
        <img src="/bu-assets/ff10-1.png" alt="Gym logo"/>
        <li><Link href="/">HOME</Link></li>
        <li>AMENITIES</li>
        <li>ABOUT US</li>
        <li>CONTACT US</li>
        <li>COMMUNITY INVOLVEMENT</li>
        <li>CAREERS</li>
    </ul>);
}

export function Footer() {
    return(
        <div className='footer-container'>
            <div>&nbsp;</div>
            <div className='footer-options'>
                <ul className='footer-option-list footer-list'>
                    <li className="accented">More</li>
                    <li className='bullet-ovr'><a>FAQ</a></li>
                    <li className='bullet-ovr'><a>Our installations</a></li>
                    <li className='bullet-ovr'><a>Careers</a></li>
                </ul>
                <ul className='footer-option-list footer-list'>
                    <li className="accented">Follow us</li>
                    <li>
                        <ul className="socials">
                            <li><img src="/bu-assets/instagram.svg" className="social-icon"/></li>
                            <li><img src="/bu-assets/facebook.svg" className="social-icon"/></li>
                            <li><img src="/bu-assets/twitter.svg" className="social-icon"/></li>
                        </ul>
                    </li>
                    <li><span className="accented">@</span>fit4all</li>
                </ul>
                <ul className='footer-option-list footer-list'>
                    <li className="accented">Operating hours</li>
                    <li className='bullet-ovr'>Monday to Friday</li>
                    <li className='bullet-ovr'>Saturday</li>
                    <li className='bullet-ovr'>Sunday</li>
                </ul>
                <ul className='footer-option-list timings'>
                    <li>&nbsp;</li>
                    <li>5:00 - 22:00</li>
                    <li>9:00 - 22:00</li>
                    <li>9:00 - 18:00</li>
                </ul>
            </div>
            <img src="/bu-assets/ff10-2.png" />
            <div className="accented">
                Copyright @ 2025 . All rights reserved.
            </div>
        </div>
    );
}