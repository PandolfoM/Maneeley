import { LoadingOverlay } from "@mantine/core";
import React, { useEffect, useState } from "react";

function LazyImage(props) {
  const [inView, setInView] = useState(false);
  // Callback ref: the overlay's DOM node may mount after the first effect runs.
  const [node, setNode] = useState(null);

  useEffect(() => {
    if (!node || inView) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setInView(true);
      }
    });
    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [node, inView]);

  return inView ? (
    <img decoding="async" {...props} />
  ) : (
    <LoadingOverlay ref={setNode} visible={true} />
  );
}

export default LazyImage;
