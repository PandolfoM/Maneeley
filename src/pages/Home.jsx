import { Button } from "@mantine/core";
import React from "react";

function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <div className="landing">
          <div>
            <h1>
              Welcome to <span>Maneeley's</span>
            </h1>
            <p>
              Maneely's is a highly reputable wedding venue in South Windsor,
              CT.
            </p>
            <Button
              variant="gradient"
              gradient={{ from: "#b57d09", to: "#fdbb2d", deg: 360 }}
              radius={"lg"}
              uppercase>
              Get Started
            </Button>
          </div>
          {/* <div className="video">
            <iframe
              src="https://streamable.com/e/kn3bc3"
              allowFullScreen></iframe>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
