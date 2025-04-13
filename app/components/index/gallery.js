import './gallery.css'
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/navigation';

export default function GymGalleryCarousel() {
  const [imagePaths, setImagePaths] = useState([]);
  const [index, setIndex] = useState(1);

  useEffect(() => {
    const fetchImagePaths = async () => {
      try {
        const res = await fetch("/api/get-images");
        if (!res.ok) throw new Error("Failed to fetch images");
        const paths = await res.json();
        console.log(paths);
        setImagePaths(paths);
      } catch (err) {
        console.error(err);
      }
    };

    fetchImagePaths();
  }, []);


  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      modules={[Navigation]}
      navigation
      onSlidePrevTransitionStart={() => setIndex((prev) => prev - 1)}
      onSlideNextTransitionStart={() => setIndex((prev) => prev + 1)}
    >
      {imagePaths.map((path, idx) => (
        <SwiperSlide key={idx}>
          <img src={path} alt={`Image ${idx + 1}`} loading="lazy" />
          <div className="image-desc">{index}/{imagePaths.length}</div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
