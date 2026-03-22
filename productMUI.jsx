import React from "react";
import { Card, CardContent, CardActions, Button, Typography } from "@mui/material";

function Product() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Product</Typography>
        <Typography>Price: ₹100</Typography>
      </CardContent>

      <CardActions>
        <Button size="small">Buy</Button>
      </CardActions>
    </Card>
  );
}

export default Product;