import { Box, Grid } from "@mui/material";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import saledata from "../Product/Data";
import { Link } from "react-router-dom";
import BasicCard from "../Product/Card";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray" }}
      onClick={onClick}
    />
  );
}

export default class CustomArrows extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <Box width={{xs:"85%",md:"95%"}}  mx={"auto"} p={{xs:1,sm:2,md:3}}>
        <h2>Related ads  </h2>
        <Slider {...settings}>
          {saledata.map((item) => (
            <div key={item.id}>
              <Grid
                container
                sx={{ width: "98%", mx: "auto" }}
                spacing={2}
                mt={2}
                
              >
                <Grid item md={10} sm={12} xs={12} p={1}>
                
                    <BasicCard
                      image={item.Product_img}
                      price={item.Product_price}
                      title={item.product_title}
                      city={item.city}
                    />
              
                </Grid>
              </Grid>
            </div>
          ))}
        </Slider>
      </Box>
    );
  }
}
