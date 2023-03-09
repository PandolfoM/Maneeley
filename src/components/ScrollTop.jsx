import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ActionIcon, Transition } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import React from "react";

const scaleCustom = {
  in: { opacity: 1, transform: "scale(1)" },
  out: { opacity: 0, transform: "scale(0)" },
  common: { transformOrigin: "center" },
  transitionProperty: "transform, opacity, ease",
};

function ScrollTop() {
  const [scroll, scrollTo] = useWindowScroll();
  return (
    <>
      <Transition
        mounted={scroll.y > 800}
        transition={scaleCustom}
        duration={400}
        timingFunction="ease">
        {(styles) => (
          <ActionIcon
            style={styles}
            className="scrollTop"
            size={"xl"}
            radius="xl"
            variant="gradient"
            gradient={{ from: "#b17900", to: "#fdbb2d", deg: 360 }}
            onClick={() => scrollTo({ y: 0 })}>
            <FontAwesomeIcon icon={faChevronUp} size="xl" color="white" />
          </ActionIcon>
        )}
      </Transition>
    </>
  );
}

export default ScrollTop;
