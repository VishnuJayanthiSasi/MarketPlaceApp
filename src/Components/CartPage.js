import React from "react";
import {
  Container,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Button,
  CardMedia,
} from "@mui/material";
import { useNavigate } from "react-router";
import Header from "./Header";

import "../App.css";

const cartItemStyles = {
  display: "flex",
  alignItems: "center",
  marginBottom: "1rem",
};

const productImageStyles = {
  width: 80,
  height: 80,
  marginRight: "1rem",
};

const productDetailsStyles = {
  display: "flex",
  flexDirection: "column",
};

const checkoutButtonStyles = {
  marginTop: "1rem",
};

const CartPage = ({ cart, setCart, purchaseHistory, setPurchaseHistory }) => {
  const navigate = useNavigate();

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const handleCheckout = () => {
    const purchases = cart.map((item) => ({
      title: item.title,
      price: item.price,
      image: item.thumbnail,
      dateTime: new Date().toLocaleString(),
    }));
    alert("Payment Succesful");
    setPurchaseHistory(purchases);
    setPurchaseHistory([...purchaseHistory, purchases]);
    console.log(purchaseHistory);

    setCart([]);

    navigate("/home");
  };

  return (
    <div>
      <Header />

      <Container maxWidth="md" style={{ paddingTop: "2rem" }}>
        <Paper elevation={3} style={{ padding: "2rem" }}>
          <Typography variant="h5" gutterBottom>
            Cart
          </Typography>
          {cart.length === 0 ? (
            <Typography variant="body1">Your cart is empty.</Typography>
          ) : (
            <List>
              {cart.map((item, index) => (
                <ListItem
                  key={index}
                  style={cartItemStyles}
                  className="cart-item"
                >
                  <CardMedia
                    component="img"
                    alt="Product Image"
                    style={productImageStyles}
                    image={item.thumbnail}
                  />
                  <div style={productDetailsStyles}>
                    <ListItemText
                      primary={item.title}
                      secondary={`AED ${item.price}`}
                    />
                    <ListItemSecondaryAction>
                      {/* <Button variant="outlined" color="secondary">
                        Remove
                      </Button> */}
                    </ListItemSecondaryAction>
                  </div>
                </ListItem>
              ))}
            </List>
          )}
          {cart.length > 0 && (
            <div className="cart-summary">
              <Typography variant="h6">
                Total Price: {calculateTotalPrice()} AED
              </Typography>
              <Button
                onClick={handleCheckout}
                variant="contained"
                color="primary"
                style={checkoutButtonStyles}
              >
                Checkout
              </Button>
            </div>
          )}
        </Paper>
      </Container>
    </div>
  );
};

export default CartPage;
