import React from "react";
import "mdbreact";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer
} from "mdbreact";
// import TestMaterials from '../Materials/Test1.jsx';
import Hipaa from "../../constants/materials.js";
// import { FootCare } from "../../constants/materials.js/index.js";
import "./carousel.css";

const CarouselPage = () => {
  return (
    <MDBContainer className="wrapper">
      <h1 className="title">{Hipaa.title}</h1>
      <MDBCarousel
        className="z-depth-1 carousel"
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        interval={false}
      >
        <div className="carousel-content">
          <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
              <MDBView>
                <div>
                  {Hipaa.content.map(p => (
                    <p>{p.text}</p>
                  ))}
                </div>
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBView>
                <h3>{Hipaa.questions}</h3>
                {Hipaa.choices.map(p => (
                  <h6>{p.text}</h6>
                ))}
                <button>Next</button>
              </MDBView>
            </MDBCarouselItem>

            <MDBCarouselItem itemId="3">
              <MDBView>
                <embed src="../TESTING.pdf"></embed>
              </MDBView>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </div>
      </MDBCarousel>
    </MDBContainer>
  );
};

export default CarouselPage;
