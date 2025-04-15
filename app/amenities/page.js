"use client";

import AmenityDesc from "../components/index/description";
import { amenitiesExtend } from "../constants";
import GymGalleryCarousel from "../components/index/gallery";

export default function Amenities() {
  return (
    <div className="main-card description">
      <h1>
        TAKE A LOOK <span className="accented">AROUND</span>
      </h1>
      <p>
        Every part of the gym has a purpose — whether you're here to lift,
        stretch, or take it easy for a bit. From open training zones to quiet
        recovery areas, it’s all set up to help you move how you want.
      </p>
      <p>See more about our amenities below.</p>
      <h1>
        OUR <span className="accented">AMENITIES</span>
      </h1>
      <div>
        {console.log(amenitiesExtend[0].path)}
        {amenitiesExtend.map((item, idx) => (
          <AmenityDesc
            key={`amenity_${idx}`}
            title={item.name}
            qualities={item.qualities}
            img_paths={item.path}
            magazine="true"
          />
        ))}
      </div>
      <h1>
        SEE THE SPACES IN <span className="accented">ACTION</span>
      </h1>
      <div className="video-box">
        <video preload="metadata" poster="/gallery/thumbnail_1.jpg" controls>
          <source src="/videos/spaces_1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <h1>GALLERY</h1>
      <GymGalleryCarousel></GymGalleryCarousel>
    </div>
  );
}
