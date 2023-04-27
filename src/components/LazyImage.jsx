import { LoadingOverlay } from "@mantine/core";
import React, { useEffect, useRef, useState } from "react";

function LazyImage(props) {
  const [inView, setInView] = useState(false);
  const ref = useRef();

  let callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setInView(true);
      }
    });
  };

  useEffect(() => {
    let observer = new IntersectionObserver(callback);

    if (ref?.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return inView ? (
    <li ref={ref} className="gallery-item">
      <img {...props} />
    </li>
  ) : (
    <li ref={ref} className="gallery-item">
      <LoadingOverlay visible={true} />
    </li>
  );
}

export default LazyImage;
