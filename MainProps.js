import React, { Component } from "react";
import Maincolumn from "../Task2/MainColumn";
import Img1 from "../Task2/image1/img06.jpg";
import Img2 from "../Task2/image1/img07.jpg";
import Img3 from "../Task2/image1/img08.jpg";

const data = {
    cardText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna",
};

const MainProps = () => {
    return (
        <div className="d-flex justify-content-around mt-5">
            <Maincolumn
                text="MAECENAS LUTCTUS"
                onImage={Img1}
                title={data.cardText}
            />
            <Maincolumn
                text="MAECENAS LUTCTUS"
                onImage={Img2}
                title={data.cardText}
            />
            <Maincolumn
                text="MAECENAS LUTCTUS"
                onImage={Img3}
                title={data.cardText}
            />
        </div>
    );
};

export default MainProps;
