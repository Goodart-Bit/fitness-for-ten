"use client";

import styles from "./page.module.css";
import SubscriptionPrev from './components/index/subscription'
import AmenityDesc from './components/index/description'
import React, { useRef } from 'react';
import Link from "next/link";
import { amenities } from './constants'

const placeMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2391.0531392958155!2d-105.75548291065162!3d53.181026615517226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53017af09db9ae4b%3A0xaac478e64febee33!2sFitness%20For%2010%2024%2F7!5e0!3m2!1sen!2sco!4v1745844315695!5m2!1sen!2sco"

export default function Home() {
  const targetRef = useRef(null);

  const handleMemberScroll = () => {
    targetRef.current?.scrollIntoView({ behavior: 'smooth'});
  }

  return (
    <div className="main-card">
      <div className={styles["img-holder"]}>
        <div>
          <span className="accented">READY</span> <p>TO TRAIN?</p>
        </div>
        <div>
          <p>GET FIT WITH</p><span className="accented">FITNESS FOR 10</span>
          <button onClick={handleMemberScroll}>Become a member</button>
        </div>
      </div>
      <div className={styles.memberships} ref={targetRef}>
        <h2>OUR MEMBERSHIPS</h2>
        <div className={styles["member-cards"]}>
          <SubscriptionPrev name="Basic" price="15" path="gallery/_CSS1084.jpg" link="https://www.mymemberaccount.com/member-enrollment/10887/group/8924"></SubscriptionPrev>
          <SubscriptionPrev name="VIP+" price="24" path="gallery/_CSS0713.jpg" link="https://www.mymemberaccount.com/member-enrollment/10887/group/8882"></SubscriptionPrev>
          <SubscriptionPrev name="Basic+" price="10" path="gallery/_CSS2071.jpg" link="https://www.mymemberaccount.com/member-enrollment/10887/group/8881"></SubscriptionPrev>
        </div>
        <Link href="/subscriptions" className="btn">See all</Link>
      </div>
      <div className="separator">
        <p>Your <span className="accented-2">body</span> can do it</p>
        <p>It&apos;s time to convince your <span className="accented-2">mind</span></p>
      </div>
      <div className={styles["amenities-holder"]}>
        <h2>OUR <span className="accented">AMENITIES</span>:</h2>
        <div className={styles.amenities}>
          <AmenityDesc title={amenities[0].name} qualities={amenities[0].qualities} img_paths={amenities[0].path}></AmenityDesc>
          <AmenityDesc title={amenities[1].name} qualities={amenities[1].qualities} img_paths={amenities[1].path}></AmenityDesc>
        </div>
      </div>
      <div className={styles["map-container"]}>
        <h2>Find us Here</h2>
        <iframe src={placeMapUrl} className={styles["gym-map"]} loading="lazy" allowFullScreen="" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
}
