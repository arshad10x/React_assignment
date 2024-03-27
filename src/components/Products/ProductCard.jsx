import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const ProductCard = ({ products, handleAddToCart }) => {
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {products.map((product) => (
        <Card key={product.id} sx={{ maxWidth: 345, margin: "10px" }}>
          <CardActionArea>
            <div style={{ textAlign: "center" }}>
              <img src={product.image} alt={product.name} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    {product.name}
                  </Typography>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    Price: ${product.price}
                  </Typography>
                </Typography>
              </CardContent>
            </div>
          </CardActionArea>
          <CardActions
            sx={{ justifyContent: "center", backgroundColor: "gray" }}
          >
            <Button
              size="small"
              sx={{
                backgroundColor: "gray",
                color: "white",
                fontWeight: "bold",
              }}
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default ProductCard;
