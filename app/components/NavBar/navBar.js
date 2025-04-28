"use client";

import React from "react";
import Link from "next/link";
import "./navBar.css";
import { useEffect, useState } from "react";

const routes = [
  { name: "HOME", href: "/" },
  { name: "AMENITIES", href: "/amenities" },
  { name: "ABOUT US", href: "/about" },
  { name: "CONTACT US", href: "/contact" },
  { name: "COMUNNITY INVOLVEMENT", href: "/" },
  { name: "CAREERS", href: "/" },
];

const socials = {
  facebook: "https://www.facebook.com/FF10PA/",
  instagram: "https://www.instagram.com/fitnessfor10_pa/",
};

export function Menu({ setExpandMenu }) {
  return (
    <div id="menu-box">
      <ul>
        {routes.map((route, idx) => {
          return (
            <li key={`menu_route${idx}`}>
              <Link
                href={route.href}
                onClick={() => {
                  setExpandMenu(false);
                }}
              >
                {route.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function NavBar() {
  const [expandMenu, setExpandMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth < 1000);

    checkWidth(); // initial check
    window.addEventListener("resize", checkWidth);

    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  return (
    <div className="nav-container">
      <ul className="flex-nav">
        <img src="/bu-assets/ff10-1.png" alt="Gym logo" />
        {routes.map((route, idx) => {
          return (
            <li key={`main_route${idx}`}>
              <Link href={route.href}>{route.name}</Link>
            </li>
          );
        })}
        {isMobile && (
          <li
            id="menu"
            onClick={() => {
              setExpandMenu(!expandMenu);
            }}
          >
            <p>Menu</p>
            <span className="material-symbols-outlined">menu</span>
          </li>
        )}
      </ul>
      {expandMenu && <Menu setExpandMenu={setExpandMenu} />}
    </div>
  );
}

export function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-options">
        <ul className="footer-option-list footer-list">
          <li className="accented">More</li>
          <li className="bullet-ovr">
            <Link
              href={routes.find((route) => route.name === "CONTACT US")?.href}
            >
              FAQ
            </Link>
          </li>
          <li className="bullet-ovr">
            <Link
              href={routes.find((route) => route.name === "AMENITIES")?.href}
            >
              Amenities
            </Link>
          </li>
          <li className="bullet-ovr">
            <Link href={routes.find((route) => route.name === "HOME")?.href}>
              Home
            </Link>
          </li>
        </ul>
        <ul className="footer-option-list footer-list">
          <li className="accented">Follow us</li>
          <li>
            <ul className="socials">
              <Link href={socials.instagram} target="_blank">
                <li>
                  <img src="/bu-assets/instagram.svg" className="social-icon" />
                  <span className="accented">@</span>fitnessfor10_pa
                </li>
              </Link>
              <Link href={socials.facebook} target="_blank">
                <li>
                  <img src="/bu-assets/facebook.svg" className="social-icon" />
                  <span className="accented">@</span>ff10pa
                </li>
              </Link>
            </ul>
          </li>
        </ul>
        <ul className="footer-option-list footer-list">
          <li className="accented">Operating hours</li>
          <li className="bullet-ovr">Monday to Friday</li>
          <li className="bullet-ovr">Saturday and Sunday</li>
          <li className="bullet-ovr">Holidays and stats</li>
        </ul>
        <ul className="footer-option-list timings">
          <li>&nbsp;</li>
          <li>8:00AM - 9:00PM</li>
          <li>11:00AM - 5:00PM</li>
          <li>Unstaffed</li>
        </ul>
      </div>
      <div className="accented">Copyright @ 2025 . All rights reserved.</div>
    </div>
  );
}
