import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from'@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
// import classes from '*.module.css';

import useStyles from './styles';

const Product = ({ product }) => {
    const classes = useStyles();
    return (
        <card class={classes.root}>
          <CardMedia className={classes.media} image='' title={product.name} />  
            <cardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="h5">
                        {product.price}
                    </Typography>
                </div>
                <Typography variant="h2" color="textSecondary">{product.description}</Typography>
            </cardContent>
            <cardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Add to cart">
                    <AddShoppingCart />
                </IconButton>
            </cardActions>
        </card>
    )
}

export default Product
