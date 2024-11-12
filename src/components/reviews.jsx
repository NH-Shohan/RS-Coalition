"use client";

import reviews from "@/data/reviews.json";
import { Star } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";

const Reviews = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollSpeed = 0.5;
    let requestId;

    const animateScroll = () => {
      setScrollPosition((prevScrollPosition) => {
        const newPosition = prevScrollPosition - scrollSpeed;
        const containerWidth = scrollContainer.scrollWidth / 2;

        if (Math.abs(newPosition) >= containerWidth) {
          return 0;
        }

        return newPosition;
      });
      requestId = requestAnimationFrame(animateScroll);
    };

    animateScroll();

    return () => cancelAnimationFrame(requestId);
  }, []);

  return (
    <div className="pt-20 md:pt-40">
      <div className="container mx-auto max-w-7xl px-4">
        <p className="text-lg bg-gradient-to-b from-blue-500 to-purple-600 inline-block text-transparent bg-clip-text leading-none font-bold">
          REVIEW
        </p>
        <h1 className="text-neutral-700 dark:text-neutral-300">
          What Our Clients Say About Us
        </h1>
      </div>

      <div className="relative overflow-hidden border-y-2 border-neutral-300 dark:border-neutral-700 mt-10">
        <div
          ref={scrollRef}
          className="flex gap-6"
          style={{
            transform: `translateX(${scrollPosition}px)`,
          }}
        >
          {reviews.concat(reviews).map((review, index) => (
            <div
              key={index}
              className="text-neutral-500 border-r-2 border-neutral-300 dark:border-neutral-700 py-6 px-2 space-y-4 max-w-[300px] h-[450px] flex-shrink-0 transition-transform duration-300 ease-linear"
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} weight="fill" />
                ))}
              </div>
              <div>
                <h4 className="text-neutral-700 dark:text-neutral-300">{review.name}</h4>
                <p className="text-neutral-600 dark:text-neutral-400">{review.role}</p>
              </div>
              <p className="text-wrap">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
