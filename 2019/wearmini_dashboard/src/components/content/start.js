import {  React, Button, Typography, Grid, Paper,
          CreditCardRoundedIcon, LocalMallOutlinedIcon,
          AccountBalanceOutlinedIcon, } from './export'
import { useStylesStart } from './styles'


export function Start() {

  // Constructs 
  const classes = useStylesStart();

  // Content Array
  var mapContentItems = [
  {
    icon: <CreditCardRoundedIcon classes= {{root: classes.iconFonts}} />,
    title: 'MINIPAY',
    list: [
    'Get paid with just a link.',
    'Share it. Embed it. Get paid.'
    ],
    button: 'Start',
    link: ''
  },
  {
    icon: <LocalMallOutlinedIcon classes= {{root: classes.iconFonts}} />,
    title: 'MINISHOP',
    list: [
    'Create your own online store.',
    'Zero hassle, zero fees.'
    ],
    button: 'Start',
    link: ''
  },
  {
    icon: <AccountBalanceOutlinedIcon classes= {{root: classes.iconFonts}} />,
    title: 'MINIME',
    list: [
    'Publish your own microsite',
    'Show who you are and what you do.'
    ],
    button: 'Start',
    link: ''
  },
  ];

  // Map Content
  var mapContent = mapContentItems.map(function(mapContentItems){
  return ( 
    <Grid container className={classes.root}>
      <Grid item sm={12}>
        <Grid container justify="center" spacing={5}>
          <Paper className={classes.paper} >
            <Grid  item> 
              <Grid><Typography>{mapContentItems.icon}</Typography></Grid>
              <br/>
              <Grid><Typography variant="h5">{mapContentItems.title}</Typography></Grid>
              <br/>
              <Grid>{mapContentItems.list}</Grid>
              <br/>
              <Grid><Button size="medium" classes= {{root: classes.btnSettings}}>{mapContentItems.button} &#8250;</Button></Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
      );
  })

  // Display Content
  return (
    <div className={classes.root}>
    { mapContent }
    </div>
  );
}