import {  React, Drawer, Tabs, Tab, PhoneIcon, PersonPinIcon, CreditCardRoundedIcon, 
          LocalMallOutlinedIcon, AccountBalanceOutlinedIcon, FlagOutlinedIcon, 
          PersonOutlineOutlinedIcon,Button,Toggle,ExitToAppOutlinedIcon, } from './export'
import { useStyles } from './styles'



export function DrawerContent() {
  // Constructs 
  const classes = useStyles();


  // Content Array
  var mapMenuItems = [
  {
    icon: <FlagOutlinedIcon classes= {{root: classes.iconFonts}} />,
    title: 'Welcome',
    list : [
    "START",
    "YOUR STATISTICS"
    ],
    link: ''
  },
  {
    icon: <CreditCardRoundedIcon classes= {{root: classes.iconFonts}} />,
    title: 'Minipay',
    list: [
    'LINKS',
    'CHARGES',
    'APPEARANCE'
    ],
    link: ''
  },
  {
    icon: <LocalMallOutlinedIcon classes= {{root: classes.iconFonts}} />,
    title: 'Minishop',
    list : [
    'PRODUCTS', 
    'TRANSACTIONS', 
    'APPEARANCE'
    ],
    link: ''
  },
  {
    icon: <AccountBalanceOutlinedIcon classes= {{root: classes.iconFonts}} />,
    title: 'Minime',
    list : [
    'YOUR INFO',
    'APPEARANCE'
    ],
    link: ''
  },
  ];



  // Map Content
  var mapMenu = mapMenuItems.map(function(mapMenuItems){
    return (

      <Toggle>
        {({on, toggle}) => (
          <div>
            <Tab  icon={mapMenuItems.icon}             
                  classes={{wrapper: classes.alignment, root: classes.tabbg,}}  
                  label={mapMenuItems.title} onClick = {toggle}>
            </Tab>

            {on &&  
              <Button variant="contained" className={classes.button} 
                      classes={{root: classes.btnstyle}}>{mapMenuItems.list}
              </Button>
            }
          </div>
        )}
      </Toggle>   
    );
  })



  // Content Array
  var mapUserInfo = [
  {
    icon: <PersonOutlineOutlinedIcon />,
    user: 'John Doe',
    title: 'Welcome',
    settings: <PersonOutlineOutlinedIcon />,
    more: '&#8250;'
  },
  ];

  // Map Content
  var mapOther = mapUserInfo.map(function(mapUserInfo){
    return (
      <div>
        <div className={classes.root}>
          <Tabs
            variant="fullWidth"
            aria-label="icon label tabs example"
            orientation="vertical"
            TabIndicatorProps={{style: {backgroundColor: "#118076", left: "0px", width: "10px"}}}>
              {mapMenu}           
          </Tabs>
        </div>

        <Tabs   
        variant="fullWidth" orientation="vertical"
        TabIndicatorProps={{style: {display: "none"}}}
        classes={{root: classes.user}}>
          <Tab  
            icon={mapUserInfo.icon}
            label={mapUserInfo.user}
            classes={{wrapper: classes.alignment, root: classes.tabbg}}>
          </Tab>

          <Button variant="contained" className={classes.button} classes={{root: classes.btnLogoutSyle}}>
          <ExitToAppOutlinedIcon classes= {{root: classes.iconFonts}} />Logout
          </Button>     
        </Tabs>
      </div>
    );
  })          


  // Display Content
  return (
    <div className={classes.root}>
      <Drawer className={classes.drawer} variant="permanent" classes={{paper: classes.drawerPaper}}>
        <div className={classes.toolbar} />
        {mapOther}
      </Drawer>
    </div>
  );
}