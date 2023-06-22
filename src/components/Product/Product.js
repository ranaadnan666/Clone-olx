import { Box, Grid, Typography } from "@mui/material";
import React from "react";

import { Link } from "react-router-dom";

import saledata from "./Data";
import BasicCard from "./Card";

function Product() {
  return (
    <div
      style={{
        background: "#eff0f5",
        padding: "30px 0px",
      }}
    >
      <Box
        sx={{
          width: {
            xs: "95%",
            md:"75%",
            lg: "70%",
          },
          mx: "auto",
          paddingBottom: "50px",
        }}
      >
        <Typography
          component={"h3"}
          sx={{
            color: "#424242",
            fontFamily: "Roboto-Regular",
            fontSize: "22px",
            textAlign: "left",
            fontWeight: 600,
            marginBottom: 2,
            marginX:"25px"
          }}
        >
         Fresh recommendations
        </Typography>

        <Grid container sx={{ width: "98%", mx: "auto" }} spacing={2}>
          {saledata.map((item) => {
            return (
              <Grid item xl={3}  md={4} sm={6} xs={12}>
                <Link
                  to="/detail"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <BasicCard
                    image={item.Product_img}
                    price={item.Product_price}
                    title={item.product_title}
                    city={item.city}
                  />
                </Link>
              </Grid>
            );
          })}
        </Grid>

        <Grid container sx={{ width: "98%", mx: "auto" }} spacing={2} mt={2}>
          {saledata.map((item) => {
            return (
              <Grid item xl={3}  md={4} sm={6} xs={12}>
                <Link
                  to="/detail"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <BasicCard
                    image={item.Product_img}
                    price={item.Product_price}
                    title={item.product_title}
                    city={item.city}

                  />
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
}

export default Product;
