import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";

import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate();

  const handleSingleProduct = (element) => {
    navigate("/product", {
      state: {
        brand: product.brand,
        title: product.title,
        thumbnail: product.thumbnail,
        description: product.description,
        price: product.price,
        stock: product.stock,
      },
    });
  };

  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      lg={2.4}
      key={product.id}
      py={2}
      sx={{ mt: 10 }}
      className="card"
    >
      <Card style={{ maxWidth: 400 }}>
        <CardMedia
          // className={classes.card}
          component="img"
          height="400"
          image={product.thumbnail}
          onClick={handleSingleProduct}
          style={{ cursor: "pointer" }}
        />

        <CardContent
          style={{
            padding: "0px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            style={{ fontSize: "1.25rem", marginBottom: "8px" }}
          >
            {product.title}
          </Typography>
          <Typography
            gutterBottom
            variant="subtitle1"
            component="div"
            style={{ fontSize: "1rem", marginBottom: "4px" }}
          >
            Brand : {product.brand}
          </Typography>

          <Typography
            gutterBottom
            variant="subtitle1"
            component="div"
            style={{ fontSize: "1rem", marginBottom: "4px" }}
          >
            Price : {product.price} AED
          </Typography>

          <Rating
            name="read-only"
            value={product.rating}
            readOnly
            style={{
              marginTop: "8px",
              paddingLeft: "90px",
              paddingRight: "80px",
            }}
          />

          <Typography gutterBottom variant="h6" component="div"></Typography>
        </CardContent>
      </Card>
    </Grid>
    // </Grid>
  );
}

export default ProductCard;
