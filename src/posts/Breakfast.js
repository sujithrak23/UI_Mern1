import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stickybar from '../NavBar/Stickybar';
import {Link} from 'react-router-dom';
import Footer from '../pages/Footer/Footer';


const cards = [1];

const defaultTheme = createTheme();
const backgroundImageStyle = {
  backgroundColor: "#1a1a1a", 
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh', // Adjust as needed
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff', // Text color
  };

export default function Album() {
  return (
    <>
    <Stickybar/>
<div style={backgroundImageStyle}>
        <h2 style={{color:'pink',textAlign:'center',  fontFamily: "'Concert One', sans-serif"}}>Breakfast</h2>

    <ThemeProvider theme={defaultTheme}>
      
      <main>
        
        <Container sx={{ py: 5 }} maxWidth="md" style={{alignItems:'center'}}>
          {/* End hero unit */}
          <Grid container spacing={4}>
            {/* a card*/}

            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
              <Link to='/hydrabad' style={{textDecoration:'none',color:'inherit'}}>

                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image='https://img.freepik.com/premium-photo/idly-sambar-idli-with-sambhar-green-red-chutney-popular-south-indian-breakfast_466689-29517.jpg?size=626&ext=jpg&uid=R131645230&ga=GA1.1.456192605.1702699190&semt=ais'
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2" color='Black'>
                       Hydrabad Foodiee
                    </Typography>
                    <Typography style={{color:'gray'}}>
                       Desserts,Shakes
                    </Typography>
                    <Typography style={{color:'darkslategrey'}}>
                      Salem
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Add Cart</Button>
                  </CardActions>
                </Card>
                </Link>
              </Grid>
            ))}
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Link to='/sage' style={{textDecoration:'none',color:'inherit'}}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      pt: '56.25%',
                    }}
                    image='https://img.freepik.com/free-photo/cold-vegetable-kefir-soup-with-eggs-greens_2829-8229.jpg?size=626&ext=jpg&uid=R131645230&ga=GA1.1.456192605.1702699190&semt=ais'
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2" color='black'>
                       Sage & Slat
                    </Typography>
                    <Typography style={{color:'gray'}}>
                        Non-Veg Foods,Continental items
                    </Typography>
                    <Typography style={{color:'darkslategrey'}}>
                        Tirupur
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Add Cart</Button>
                  </CardActions>
                </Card>
                </Link>
              </Grid>
            ))}
             {/* a card*/}
             {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image='https://img.freepik.com/premium-photo/masala-dosa-is-south-indian-meal-served-with-sambhar-coconut-chutney-selective-focus_466689-22971.jpg?size=626&ext=jpg&uid=R131645230&ga=GA1.1.456192605.1702699190&semt=ais'
                  />
                  
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2" color='Black'>
                      Sri Aryaa Bavaan
                    </Typography>
                    <Typography style={{color:'gray'}}>
                      SouthIndian Meals,Cold drinks
                    </Typography>
                    <Typography style={{color:' darkslategrey'}}>
                     Neyveli
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Add Cart</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
             {/* a card*/}
             {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image='https://img.freepik.com/free-photo/indian-tasty-roti-composition_23-2149073357.jpg?size=626&ext=jpg&uid=R131645230&ga=GA1.1.456192605.1702699190&semt=ais'
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2" color='Black'>
                    ThalaCheri 
                    </Typography>
                    <Typography style={{color:'gray'}}>
                        Full Meals,NorthIndian & SouthIndian Foods
                    </Typography>
                    <Typography style={{color:' darkslategrey'}}>
                        Coimbatore
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Add Cart</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
             {/* a card*/}
             {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image='https://img.freepik.com/free-photo/fried-dumplings-samosas-ready-eat-generated-by-ai_188544-43164.jpg?size=626&ext=jpg&uid=R131645230&ga=GA1.1.456192605.1702699190&semt=ais'
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2" color='black'>
                    Prince Hotel
                    </Typography>
                    <Typography style={{color:'gray'}}>
                        Chineese Foods,Beverages
                    </Typography>
                    <Typography style={{color:'darkslategrey'}}>
                        Tirupur
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Add Cart</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
                {/*a crad*/}
               {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
              <Link to='/theme' style={{textDecoration:'none',color:'inherit'}}>

                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      pt: '56.25%',
                    }}
                    image='https://img.freepik.com/premium-photo/chole-bhature-spicy-chick-peas-curry-also-known-as-chole-channa-masala-is-traditional-north-indian-main-course-recipe-usually-served-with-fried-puri-bhature-selective-focus_726363-296.jpg?size=626&ext=jpg&uid=R131645230&ga=GA1.1.456192605.1702699190&semt=ais'
                  />
                  
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2" color='Black'>
                       Grand Hotel
                    </Typography>
                    <Typography style={{color:'gray'}}>
                    Italian Meals,Juices
                    </Typography>
                    <Typography style={{color:'darkslategrey'}}>
                        Erode
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Add Cart</Button>
                  </CardActions>
                </Card>
                </Link>
              </Grid>
            ))}


{cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
            <Link to='/saravana' style={{textDecoration:'none',color:'inherit'}}>

                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      pt: '56.25%',
                    }}
                    image='https://img.freepik.com/free-photo/top-view-pakistan-food-arrangement_23-2148821544.jpg?size=626&ext=jpg&uid=R131645230&ga=GA1.1.456192605.1702699190&semt=ais'
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2" color='black'>
                    Saravana Bhavan
                    </Typography>
                    <Typography style={{color:'gray'}}>
                        Veg Meals,Cold Drinks
                    </Typography>
                    <Typography style={{color:'darkslategrey'}}>
                        Coimbatore
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Add Cart</Button>
                  </CardActions>
                </Card>
                </Link>
              </Grid>
            ))}

{cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      pt: '56.25%',
                    }}
                    image='https://img.freepik.com/free-photo/crispy-bakery-with-various-sauces_140725-2902.jpg?size=626&ext=jpg&uid=R131645230&ga=GA1.1.456192605.1702699190&semt=ais'
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2" color='black'>
                       Mountain Mercado
                    </Typography>
                    <Typography style={{color:'gray'}}>
                        Mexcican Foods
                    </Typography>
                    <Typography style={{color:'darkslategrey'}}>
                        Madurai
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Add Cart</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}

{cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      pt: '56.25%',
                    }}
                    image='https://img.freepik.com/free-photo/sandwich-with-egg-served-with-lettuce_140725-8045.jpg?size=626&ext=jpg&uid=R131645230&ga=GA1.1.456192605.1702699190&semt=ais'
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2" color='black'>
                       Sage & Slat
                    </Typography>
                    <Typography style={{color:'gray'}}>
                        Non-Veg Foods,Continental items
                    </Typography>
                    <Typography style={{color:'darkslategrey'}}>
                        Tirupur
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Add Cart</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}



          </Grid>
          
        </Container>
        
      </main>
    
    </ThemeProvider>
   </div>
   <Footer/>
   </>

  );
}