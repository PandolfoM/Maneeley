import { Carousel } from "@mantine/carousel";
import { Image } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React from "react";
import Separator from "./Separator";

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
];

function About() {
  const mobile = useMediaQuery("(max-width: 600px)");

  return (
    <div className="about">
      <Separator title={"About"} />
      <p>
        Maneeleys is one of the leaders in the wedding industry in CT, creating
        amazing memories for many people over the last 25 years. We will assist
        you with every detail during the planning process of your wedding day
        and our amazing staff will attend to your every need on the day of your
        wedding. Chef Edgardo along with his staff will prepare a mouthwatering
        menu for you and your guests to experience.
      </p>
      {mobile ? (
        <Carousel
          className="awards"
          dragFree
          slideSize={"25%"}
          slideGap="sm"
          height={150}
          initialSlide={3}>
          {awards.map((i) => (
            <Carousel.Slide key={i.image}>
              <a>
                <Image
                  width={150}
                  height={150}
                  src={i.image}
                  alt={i.title}
                  withPlaceholder
                />
              </a>
            </Carousel.Slide>
          ))}
        </Carousel>
      ) : (
        <div className="awards">
          {awards.map((i) => (
            <a
              key={i.image}
              href="https://www.weddingwire.com/reviews/maneeleys-banquet-catering-and-the-lodge-at-maneeleys-south-windsor/d05508869673e0e2.html"
              target="_blank">
              <Image
                width={100}
                height={100}
                src={i.image}
                alt={i.title}
                withPlaceholder
              />
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default About;
