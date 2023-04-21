import {  React, ErrorOutlineOutlinedIcon, Card,
          CardActions,CardContent, Button, 
          Typography, } from './export'
import { useStylesConnect } from './styles'


export function Connect() {
// Constructs 
const classes = useStylesConnect();

// Display Content
return (
  <Card className={classes.cardConnect}>
    <CardContent>
      <Typography variant="h5" component="h5" classes={{root: classes.connect}}>
        Connect your Stripe account to use our e-commerce tools.
      </Typography>

      <Typography variant="body2" component="p">
        <br/>
        Stripe is the best software platform for running an internet business.
        <ErrorOutlineOutlinedIcon classes={{root: classes.errorIconStyle}} />
      </Typography>
    </CardContent>

    <CardActions>
      <Button size="medium" classes= {{root: classes.btnSettings}}>Go to Settings &#8250;</Button>
    </CardActions>
  </Card>  
  );
}