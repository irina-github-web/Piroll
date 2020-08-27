import React, { Component } from "react";
import Carousel, { consts } from "react-elastic-carousel";
import Dot from "./Dot.js";

export default class MyCarosel extends Component {
  myArrow({ type, onClick, isEdge }) {
    const pointer = type === consts.PREV ? "<" : ">";
    return (
      <button className="slider__arrows" onClick={onClick} disabled={isEdge}>
        {pointer}
      </button>
    );
  }

  render() {
    return (
      <Carousel
        itemsToShow={1}
        renderArrow={this.myArrow}
        initialFirstItem={1}
        renderPagination={({ pages, activePage, onClick }) => {
          return (
            <div className="slider__dots">
              {pages.map((page) => {
                const isActivePage = activePage === page;
                return (
                  <Dot
                    className="slider__dot"
                    key={page}
                    onClick={() => onClick(page)}
                    active={isActivePage}
                  />
                );
              })}
            </div>
          );
        }}
      >
        <div className="slider__item">slide 1</div>
        <div className="slider__item">
          <div className="slide__text">
            “ Outstanding job and exceeded all expectations. It was a pleasure
            to work with them on a sizable first project and am looking forward
            to start the next one asap.”
          </div>
          <span className="author">Michael Hopkins</span>
        </div>
        <div className="slider__item">slide 3</div>
      </Carousel>
    );
  }
}
