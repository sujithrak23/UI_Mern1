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
        <h2 style={{color:'pink',textAlign:'center',  fontFamily: "'Concert One', sans-serif"}}>Icecreams</h2>

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
                    image='https://img.freepik.com/free-photo/ice-cream-cones-with-almond-chocolate_144627-23110.jpg?size=626&ext=jpg&uid=R131645230&ga=GA1.1.456192605.1702699190&semt=ais'
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
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      pt: '56.25%',
                    }}
                    image='https://img.freepik.com/free-photo/delicious-ice-cream-cookies-high-angle_23-2149681931.jpg?size=626&ext=jpg&uid=R131645230&ga=GA1.1.456192605.1702699190&semt=ais'
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
                    image='https://img.freepik.com/free-photo/blueberry-ice-cream-scoops-with-waffle-black-background_123827-21841.jpg?size=626&ext=jpg&uid=R131645230&ga=GA1.1.456192605.1702699190&semt=ais'
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
                    image='https://img.freepik.com/free-photo/side-view-thai-ice-cream-roll-topped-with-colorful-sprinkles-cardboard-bowl-black-wall_140725-12923.jpg?size=626&ext=jpg&uid=R131645230&ga=GA1.1.456192605.1702699190&semt=ais'
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
                    image='https://img.freepik.com/free-vector/ice-cream-glass-bowl-realistic-composition-with-fresh-berries-violet-scoops-icecream_1284-27095.jpg?size=626&ext=jpg&uid=R131645230&ga=GA1.1.456192605.1702699190&semt=ais'
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
                    image='https://img.freepik.com/free-photo/freshly-scooped-lemon-ice-cream-waffle-cone-generative-ai_188544-12433.jpg?size=626&ext=jpg&uid=R131645230&ga=GA1.1.456192605.1702699190&semt=ais'
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
                    image='https://img.freepik.com/free-photo/mixed-ice-cream-balls-with-caramel-shavings_140725-2160.jpg?size=626&ext=jpg&uid=R131645230&ga=GA1.1.456192605.1702699190&semt=ais'
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
                    image='https://img.freepik.com/free-photo/chocolate-ice-cream-dessert_144627-8364.jpg?size=626&ext=jpg&uid=R131645230&ga=GA1.1.456192605.1702699190&semt=ais'
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
                    image='https://img.freepik.com/free-photo/typical-brazilian-freezies-with-fruits-still-life_23-2150187431.jpg?size=626&ext=jpg&uid=R131645230&ga=GA1.1.456192605.1702699190&semt=ais'
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
                      // 16:9
                      pt: '56.25%',
                    }}
                    image='https://img.freepik.com/premium-photo/vanilla-ice-cream_518173-1716.jpg?size=626&ext=jpg&uid=R131645230&ga=GA1.1.456192605.1702699190&semt=ais'
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

          </Grid>
          
        </Container>
        
      </main>
    
    </ThemeProvider>
   </>
  );
}