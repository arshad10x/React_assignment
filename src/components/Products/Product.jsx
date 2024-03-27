import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { Box, Pagination, Snackbar, TextField } from "@mui/material";
import productData from "../Data.json";
import Stack from "@mui/material/Stack";

const Product = () => {
  const [searchProduct, setSearchProduct] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const products = productData;

  // Filter products
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchProduct.toLowerCase())
  );

  //pagination here
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Change page
  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  // Handle search
  const handleSearchChange = (e) => {
    setSearchProduct(e.target.value);
  };

  // Handle add product to the cart
  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
    setSnackbarOpen(true);
  };

  // Handle close snackbar
  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <div className="col-md-12">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          margin: "20px 0px",
        }}
      >
        <TextField
          label="Search Category"
          variant="outlined"
          value={searchProduct}
          onChange={handleSearchChange}
          sx={{ marginRight: "10px" }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        <ProductCard
          products={currentProducts}
          handleAddToCart={handleAddToCart}
        />
      </Box>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
        message="Item added to cart"
      />
      {/* Pagination */}
      <Stack spacing={2} sx={{ justifyContent: "center", marginTop: "20px" }}>
        <Pagination
          count={Math.ceil(filteredProducts.length / itemsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
        />
      </Stack>
    </div>
  );
};

export default Product;
