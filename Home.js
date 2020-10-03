import React, { Component } from "react";

const data = {
    cardText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo  Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunts eiusmod tempor incididunt ut labore et dolore magna Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna",
    heading: "welcome to multiple render ",
};
export default class Board extends Component {
    render() {
        return (
            <div>
                <div className="row bg-light ">
                    <div className="col-md-8 text-left m-5">
                        <h2 className="font-weight-bold">{data.heading}</h2>
                        <p>{data.cardText}</p>
                        <div className="d-flex justify-content-start">
                            <button className="btn btn-dark m-1">
                                read more
                            </button>
                            <button className="btn btn-dark m-1">
                                comments
                            </button>
                        </div>
                    </div>
                </div>
                <div className="d-flex pt-3">
                    {this.renderCard("MAECENAS LUCTUS LECTUS")}
                    {this.renderCard("MAECENAS LUCTUS LECTUS")}
                    {this.renderCard("MAECENAS LUCTUS LECTUS")}
                </div>
                {this.renderFooter()}
            </div>
        );
    }

    renderCard = (heading) => {
        return (
            <div className="col bg-dark">
                <div className=" m-5 text-left">
                    <h3 className="text-white col-md">{heading}</h3>
                </div>
            </div>
        );
    };
    renderFooter = () => {
        return (
            <div className="d-flex flex-row justify-content-center bg-warning font-weight-bold  p-5">
                @ UNTITLED, ALL RGHTS RESERVED | DESIGN BY VENKATESH.R
            </div>
        );
    };
}
