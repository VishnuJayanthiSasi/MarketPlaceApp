import { Grid, Typography } from "@mui/material";
import React from "react";
import productsContext from "./productsContext";
import Paper from "@mui/material/Paper";
import "../App.css";

function CategoryCards() {
  const { setProductsData } = React.useContext(productsContext);

  const [categoryData, setCategoryData] = React.useState([]);

  const getCategory = async () => {
    try {
      const fetchResponse = await fetch(
        "https://dummyjson.com/products/categories"
      );

      const responseData = await fetchResponse.json();

      setCategoryData(responseData);
      console.log(categoryData);
    } catch (error) {
      console.log(error.msg);
    }
  };

  React.useEffect(() => {
    getCategory();
  }, []);

  const handleCategory = async (filterData) => {
    console.log(filterData);
    const filterResponse = await fetch(
      `https://dummyjson.com/products/category/${filterData}`
    );
    const filterResponseData = await filterResponse.json();
    console.log(filterResponseData);

    setProductsData([...filterResponseData.products]);
    // console.log(filterResponseData);
  };

  return (
    <div>
      <Grid container spacing={2} my={4} px={5} className="category-grid">
        {categoryData.map((categoryData, key) => (
          <Grid item className="card" xs={6} sm={4} md={3} lg={2.4} key={key}>
            <Paper
              elevation={3}
              key={categoryData}
              style={{ padding: "2px", cursor: "pointer" }}
              onClick={() => handleCategory(categoryData)}
            >
              <Typography gutterBottom variant="h7" component="div">
                {categoryData}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default CategoryCards;
