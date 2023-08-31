// import React from "react";

// import { Button, IconButton } from "@mui/material";
// import TextField from "@mui/material/TextField";

// import Box from "@mui/material/Box";

// import SearchIcon from "@mui/icons-material/Search";
// import productsContext from "./productsContext";

// function Form() {
//   const { setProductsData, getProducts, productsData } =
//     React.useContext(productsContext);

//   //

//   const [filter, setFilter] = React.useState({
//     gender: "",
//     status: "",
//     species: "",
//   });

//   const [searchId, setSearchId] = React.useState(productsData);

//   const searchDataHandler = (e) => {
//     // setFilter((prev) => ({ ...prev, [e.target.name]: e.target.value }));

//     setSearchId({ [e.target.name]: e.target.value });
//     // console.log(searchId);
//   };

//   const searchHandler = async (searchId) => {
//     const fetchedId = await fetch(
//       `https://rickandmortyapi.com/api/character/${searchId.id}`
//     );
//     const displayFetchId = await fetchedId.json();
//     // console.log(displayFetchId);
//     setProductsData([displayFetchId]);
//   };

//   const handleFilterText = (e) => {
//     setFilter((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//     // console.log(filter);
//   };

//   const handleFilter = async (gender, status, species) => {
//     // event.preventDefault();
//     const filterResponse = await fetch(
//       `https://rickandmortyapi.com/api/character/?gender=${gender}&status=${status}&species=${species}`
//     );
//     const filterResponseData = await filterResponse.json();
//     console.log(filterResponseData.results);
//     setProductsData([...filterResponseData.results]);
//     // console.log(filterResponseData);
//   };

//   return (
//     <div>
//       {/*  */}
//       {/* <label>
//             Search By Id
//         </label> */}
//       <br></br>

//       <br></br>
//       <br></br>

//       <Box
//         component="form"
//         sx={{
//           "& > :not(style)": { m: 1, width: "25ch" },
//         }}
//         noValidate
//         autoComplete="off"
//       >
//         <TextField
//           id="outlined-basic"
//           label="Category"
//           placeholder="male/female/unknown"
//           variant="outlined"
//           name="gender"
//           onChange={handleFilterText}
//         />
//         <TextField
//           id="outlined-basic"
//           label="Brand"
//           placeholder="alive/dead/unknown"
//           variant="outlined"
//           name="status"
//           onChange={handleFilterText}
//         />

//         <Button
//           variant="contained"
//           onClick={() => {
//             handleFilter(filter.gender, filter.status, filter.species);
//           }}
//         >
//           Filter
//         </Button>
//       </Box>

//       {/* <input type="text" name="id" onChange={searchHandler}></input> */}
//       <br></br>
//       {/* <button type="sbmit" >Search</button> */}
//     </div>
//   );
// }

// export default Form;
