
import { Box,  Grid,  Typography } from "@mui/material";
import React, { useState } from "react";

import ListData from "./List";
import AutoPlayMethods from "../home/Slides";
function ProductDetail() {
    const [selectedColor, setSelectedColor] = useState('black');
    const [quantity, setQuantity] = useState(1);
    const productImages = {
        black: "https://static-01.daraz.pk/p/44597d89eb506f9bf710fd6080f80874.jpg_720x720.jpg_.webp",
        white: 'https://static-01.daraz.pk/p/6db245f354bc39b01db42e7053b65cf7.jpg_720x720.jpg_.webp',
        red: 'https://static-01.daraz.pk/p/ed03b10a57a4c5d5568b111e28409f28.jpg_720x720.jpg_.webp',
        green: 'https://static-01.daraz.pk/p/687db865e309194560eb214fc546048b.jpg_720x720.jpg_.webp'
    };

    const handleColorChange = (color) => {
        setSelectedColor(color);
    };
    const handleQuantityChange = (newQuantity) => {
        setQuantity(Math.max(1, newQuantity)); // Prevent quantity from going below 1
    };

 
    return (

        <div style={{
            background: '#eff0f5',
            paddingTop: '50px',
            paddingBottom: '100px'

        }}>
            <Typography variant='body2' textAlign={"center"} >Home / product /AirPods</Typography> <br />
            <Box sx={{
                background: 'white',
                width: {
                    xs: '95%',
                    md: '60%',
                },
                mx: 'auto',
                padding: '20px 10px'

            }}>
                <Grid container spacing={2} >

                    <Grid item lg={8} xs={12} sm={6} md={8} >
                        <Box sx={{
                            height: {xs:"350px",md:"500px"},
                            // width: '700px',

                        }}>
                            <img src={productImages[selectedColor]}
                                style={{ height: "100%", width: "100%", cursor: 'pointer' }} alt="detail" />
                        </Box>

                        <Box mt={2} display="flex" gap={1}>
                            {Object.keys(productImages).map((color) => (
                                <Box
                                    key={color}
                                    sx={{
                                        height: "70px",
                                        width: "70px",
                                        borderRadius: "50%",

                                        position: "relative",
                                    }}
                                    onMouseEnter={() => handleColorChange(color)}
                                >
                                    <img
                                        src={productImages[color]}
                                        alt="data"
                                        style={{ height: "100%", width: "100%", cursor: 'pointer' }}
                                    />
                                    {selectedColor === color && (
                                        <Box
                                            sx={{
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                                height: "100%",
                                                width: "100%",
                                                cursor: 'pointer'

                                            }}
                                        ></Box>
                                    )}
                                </Box>
                            ))}
                        </Box>
                    </Grid>
                    <Grid item lg={4} xs={12} sm={6} md={4} sx={{boxShadow:" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
                    <ListData/>
                    </Grid>
                </Grid>
            </Box>


            {/* detail bottom */}

            <Grid>
                <Grid container sx={{
                    width: { lg: "60%", md: "80%", sm: "95%", xs: "95%" }, backgroundColor: "white", padding: "20px", mx: { lg: "auto", xs: "auto" }, mt: "30px",
                    justifyContent: "space-between"
                }}>
                    <Grid item sx={{ fontSize: "25px" }} ><b>Details</b></Grid>

                </Grid>
                <Grid spacing={4} container sx={{ width: { lg: "60%", xs: "95%", md: "80%", sm: "95%" }, backgroundColor: "white", mx: "auto" }} >

                    <Grid item lg={5} md={6} sm={6} xs={12} >
                        <Typography><b>ABOUT PRODUCTS</b></Typography>
                        <Typography sx={{ fontSize: "14px" }}>
                            Cool off this summer in the Mini Ruffle Smocked Tank Top from our very own LA Hearts. This tank features a smocked body,
                            adjustable straps, scoop neckline, ruffled hems, and a cropped fit.
                        </Typography><br />
                        <Typography ><b>ADVANTAGES</b></Typography>
                        <ul style={{ fontSize: "14px" }}>
                            <li>Smocked body</li>
                            <li>Adjustable straps</li>
                            <li>Scoop neckline</li>
                            <li>Ruffeled hems</li>
                            <li>Cropped length</li>
                            <li>Model is wearing a small</li>
                            <li>100% rayon</li>
                            <li>Machine washable</li>
                        </ul>
                        <Typography><b>DISADVANTAGES</b></Typography>
                        <ul style={{ fontSize: "14px" }}>
                            <li>Smocked body</li>
                            <li>Adjustable straps</li>
                            <li>Scoop neckline</li>
                        </ul>
                    </Grid>
                    <Grid item lg={5} md={6} sm={6} xs={12} >
                        <Typography><b>SHIPPING</b></Typography>
                        <Typography sx={{ fontSize: "14px" }}>
                            SHIPPING
                            We offer Free Standard Shipping for all orders over $75 to the 50 states and the District of Columbia. The minimum order value must be $75 before taxes,
                            shipping and handling. Shipping fees are non-refundable.
                        </Typography> <br />
                        <Typography sx={{ fontSize: "14px" }} >
                            Please allow up to 2 business days (excluding weekends, holidays, and sale days) to process your order.
                        </Typography> <br />
                        <Typography sx={{ fontSize: "14px" }}>
                            Processing Time + Shipping Time = Delivery Time
                        </Typography>
                    </Grid>
                </Grid>


            </Grid>

<AutoPlayMethods/>
        </div>
    )
}

export default ProductDetail