import React, { Component } from "react";

export default class MainColumn extends Component {
    render() {
        return <div className="d-flex">{this.renderProps()}</div>;
    }

    renderProps = () => {
        return (
            <div className="row">
                <div className="col">
                    <div className="card" style={{ width: "18rem" }}>
                        <h4 className="d-flex align-content-start">
                            FUSCE FRINGLLA
                        </h4>
                        <img
                            src={this.props.onImage}
                            className="card-img-top"
                        />
                        <div className="card-body px-1">
                            <p className="card-text text-left p-0">
                                {this.props.title}
                            </p>
                            <div className="d-flex justify-content-start">
                                <button className="btn btn-dark m-0">
                                    Read More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}
