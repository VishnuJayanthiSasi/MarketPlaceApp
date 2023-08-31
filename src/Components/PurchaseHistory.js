import {
  Container,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  CardMedia,
} from "@mui/material";

import Header from "./Header";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const PurchaseHistory = ({ purchaseHistory }) => {
  const productImageStyles = {
    width: 80,
    height: 80,
    marginRight: "1rem",
  };
  return (
    <div>
      <Header />

      <Container maxWidth="md" style={{ paddingTop: "2rem" }}>
        {console.log(purchaseHistory)}
        {purchaseHistory.length > 0 ? (
          <div>
            <h2>Order Tracking</h2>

            <div>
              <strong>Status:</strong>DISPATCHED
            </div>
            <div>
              <strong>Items:</strong>
            </div>
          </div>
        ) : (
          <div></div>
        )}
        <Paper elevation={3} style={{ padding: "2rem" }}>
          <Typography variant="h5" gutterBottom>
            Purchase History
          </Typography>
          {purchaseHistory.length === 0 ? (
            <Typography variant="body1">No purchase history yet.</Typography>
          ) : (
            <List>
              {purchaseHistory.map((purchase, index) => (
                <ListItem key={index}>
                  <ListItemAvatar>
                    <Avatar>
                      <ShoppingCartIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <CardMedia
                    component="img"
                    alt="producthistoryimage"
                    style={productImageStyles}
                    image={purchase[0].image}
                  />
                  <ListItemText
                    primary={purchase.title}
                    secondary={`Cost: AED ${purchase[0].price} | ${purchase[0].dateTime}`}
                  />
                </ListItem>
              ))}
            </List>
          )}
          {/* <img
            // src="https://as1.ftcdn.net/v2/jpg/05/66/56/16/1000_F_566561626_ckTp8dmbMIvBbKoReXFxwWAHl1LnSiPn.jpg"
            alt="historypageimage"
            style={{ marginTop: "1rem", width: "100%" }}
          /> */}
        </Paper>
      </Container>
    </div>
  );
};

export default PurchaseHistory;
