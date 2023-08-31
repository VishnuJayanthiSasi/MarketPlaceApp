import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Icon,
  IconButton,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

import AddShoppingCartSharpIcon from "@mui/icons-material/AddShoppingCartSharp";
import { useLocation } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";

import Header from "./Header";
import EditIcon from "@mui/icons-material/Edit";
import "./Product.css";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

const Product = ({ cart, setCart }) => {
  const location = useLocation();

  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  const { brand, thumbnail, title, description, price, stock } = location.state;

  const handleCart = (productData) => {
    // console.log(productData);
    setCart([...cart, productData]);
    console.log(cart);
    alert("Added to Cart");
  };

  return (
    <div>
      <Header />
      <Grid item xs={6} sm={4} md={3} lg={2} className="card-container">
        <Card sx={{ maxWidth: 500 }} alignItems="center" justify="center">
          <CardMedia component="img" image={thumbnail} />

          <CardContent justify="center">
            <Typography gutterBottom variant="h4" component="div">
              {title}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {brand}
            </Typography>

            <Typography gutterBottom variant="h6" component="div">
              {description}
            </Typography>

            <Typography gutterBottom variant="h6" component="div">
              {price} AED
            </Typography>
            <Typography gutterBottom variant="h6" component="div"></Typography>

            <Typography gutterBottom variant="h6" component="div">
              {stock} Pieces Available
            </Typography>

            <Box
              sx={{
                // width: 500,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Rating
                name="hover-feedback"
                value={value}
                precision={0.5}
                getLabelText={getLabelText}
                style={{ paddingLeft: "150px" }}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              {value !== null && (
                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
              )}
            </Box>

            <Typography gutterBottom variant="h6" component="div"></Typography>

            <IconButton onClick={() => handleCart({ title, thumbnail, price })}>
              <Icon>
                <AddShoppingCartSharpIcon color="secondary" />
              </Icon>
            </IconButton>
            <br></br>
            <Icon>
              <EditIcon />
            </Icon>
            <TextField
              id="filled-multiline-static"
              label="Review"
              multiline
              rows={4}
              placeholder="Type Here.."
              variant="filled"
            />
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
};

export default Product;
