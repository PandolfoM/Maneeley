import { LoadingOverlay } from "@mantine/core";
import React, { useEffect, useState } from "react";

function LazyImage({ reserveSpace = false, ...props }) {
  const [inView, setInView] = useState(false);
  // Callback ref: the overlay's DOM node may mount after the first effect runs.
  const [node, setNode] = useState(null);

  useEffect(() => {
    if (!node || inView) return;

    // Start loading a little before the image scrolls into view.
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setInView(true);
        }
      },
      { rootMargin: "300px 0px" }
    );
    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [node, inView]);

  if (inView) {
    return <img decoding="async" {...props} />;
  }

  // Give the placeholder the image's final shape so off-screen images
  // stay off-screen (and unloaded) until scrolled near.
  if (reserveSpace && props.width && props.height) {
    return (
      <div
        ref={setNode}
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: `${props.width} / ${props.height}`,
        }}>
        <LoadingOverlay visible={true} />
      </div>
    );
  }

  return <LoadingOverlay ref={setNode} visible={true} />;
}

export default LazyImage;
