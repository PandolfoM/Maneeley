import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import React from "react";
import LazyImage from "./LazyImage";

const awards = [
  {
    title: "2013 Wedding Wire Couples' Choice Award",
    image:
      "https://cdn1.weddingwire.com/img/badges/2013/badge-weddingawards_en_US.png",
  },
  {
    title: "2014 Wedding Wire Couples' Choice Award",
    image:
      "https://cdn1.weddingwire.com/img/badges/2014/badge-weddingawards_en_US.png",
  },
  {
    title: "2015 Wedding Wire Couples' Choice Award",
    image:
      "https://cdn1.weddingwire.com/img/badges/2015/badge-weddingawards_en_US.png",
  },
  {
    title: "2016 Wedding Wire Couples' Choice Award",
    image:
      "https://cdn1.weddingwire.com/img/badges/2016/badge-weddingawards_en_US.png",
  },
  {
    title: "2017 Wedding Wire Couples' Choice Award",
    image:
      "https://cdn1.weddingwire.com/img/badges/2017/badge-weddingawards_en_US.png",
  },
  {
    title: "2018 Wedding Wire Couples' Choice Award",
    image:
      "https://cdn1.weddingwire.com/img/badges/2018/badge-weddingawards_en_US.png",
  },
  {
    title: "2019 Wedding Wire Couples' Choice Award",
    image:
      "https://cdn1.weddingwire.com/img/badges/2019/badge-weddingawards_en_US.png",
  },
  {
    title: "2020 Wedding Wire Couples' Choice Award",
    image:
      "https://cdn1.weddingwire.com/img/badges/2020/badge-weddingawards_en_US.png",
  },
  {
    title: "2021 Wedding Wire Couples' Choice Award",
    image:
      "https://cdn1.weddingwire.com/img/badges/2021/badge-weddingawards_en_US.png",
  },
  {
    title: "2022 Wedding Wire Couples' Choice Award",
    image:
      "https://cdn1.weddingwire.com/img/badges/2022/badge-weddingawards_en_US.png",
  },
  {
    title: "2023 Wedding Wire Couples' Choice Award",
    image:
      "https://cdn1.weddingwire.com/img/badges/2023/badge-weddingawards_en_US.png",
  },
];

function Awards() {
  const tablet = useMediaQuery("(max-width: 900px)");

  return (
    <div className="awards">
      {tablet ? (
        <Carousel
          mx="auto"
          slideSize={"150px"}
          dragFree
          slideGap="sm"
          initialSlide={0}>
          {awards.map((i) => (
            <Carousel.Slide key={i.image}>
              <a
                key={i.image}
                href="https://www.weddingwire.com/reviews/maneeleys-banquet-catering-and-the-lodge-at-maneeleys-south-windsor/d05508869673e0e2.html"
                target="_blank">
                <LazyImage
                  width={"100%"}
                  height={"100%"}
                  src={i.image}
                  alt={i.title}
                />
              </a>
            </Carousel.Slide>
          ))}
        </Carousel>
      ) : (
        <div className="awards-imgs">
          {awards.map((i) => (
            <a
              key={i.image}
              href="https://www.weddingwire.com/reviews/maneeleys-banquet-catering-and-the-lodge-at-maneeleys-south-windsor/d05508869673e0e2.html"
              target="_blank">
              <LazyImage width={100} height={100} src={i.image} alt={i.title} />
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default Awards;
