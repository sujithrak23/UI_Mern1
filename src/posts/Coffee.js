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
import {Link} from 'react-router-dom';


const cards = [1];

const defaultTheme = createTheme();

export default function Album() {
  return (
    <>
        <h2 style={{color:'pink',textAlign:'center',  fontFamily: "'Concert One', sans-serif"}}>Coffees</h2>

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
                    image='https://img.freepik.com/free-photo/cup-coffee-with-heart-drawn-foam_1286-70.jpg?1&w=826&t=st=1703225533~exp=1703226133~hmac=c22d01eafa7f8410cc38f8baa59e41707f3e269e4eebfd25e2189df4c8399456'
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
                    image='https://img.freepik.com/premium-photo/south-indian-filter-coffee-served-traditional-brass-stainless-steel-cup_466689-83533.jpg?size=626&ext=jpg&uid=R131645230&ga=GA1.1.456192605.1702699190&semt=ais'
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
                    image='https://img.freepik.com/premium-photo/hot-coffee-with-roasted-coffee-beans-wood_252965-978.jpg?w=900'
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
                    image='https://img.freepik.com/free-photo/top-view-tasty-espresso-served-cup-with-coffee_24972-2309.jpg?w=1060&t=st=1703225750~exp=1703226350~hmac=abc43964157d92a238c6518fd87be3a3305989b723101190d985a746ba8e068b'
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
                    image='https://img.freepik.com/free-photo/cappuccino-served-blue-cup_140725-3354.jpg?size=626&ext=jpg&uid=R131645230&ga=GA1.1.456192605.1702699190&semt=ais'
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
                    image='https://img.freepik.com/free-photo/hot-chocolate-served-with-cookies_140725-1153.jpg?w=740&t=st=1703225803~exp=1703226403~hmac=4abec43ed353ab43c0712a7a6abb2d5510d2f3ceb73dde9ad62b0d166dc14bb0'
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
                    image='https://img.freepik.com/free-photo/side-view-cup-latte-coffee-beans-table_140725-10221.jpg?size=626&ext=jpg&uid=R131645230&ga=GA1.1.456192605.1702699190&semt=ais'
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
             <Link to='/sage' style={{textDecoration:'none',color:'inherit'}}>

                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      pt: '56.25%',
                    }}
                    image='https://img.freepik.com/free-photo/aroma-cup-tea-with-tasty-crackers-wooden-table_114579-77028.jpg?size=626&ext=jpg&uid=R131645230&ga=GA1.1.456192605.1702699190&semt=ais'
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
                    image='https://img.freepik.com/free-photo/front-view-cup-coffee-hot-strong-with-fresh-brown-coffee-seeds-crackers-cream-rustic-desk-coffee-seed-drink-photo-grain_140725-26035.jpg?size=626&ext=jpg&uid=R131645230&ga=GA1.1.456192605.1702699190&semt=ais'
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2" color='black'>
                    Spicy World
                    </Typography>
                    <Typography style={{color:'gray'}}>
                        Chicken Special Menu
                    </Typography>
                    <Typography style={{color:'darkslategrey'}}>
                        Coimbatore
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
    </>
  );
}