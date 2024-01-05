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
import {Link} from 'react-router-dom'



const cards = [1];

const defaultTheme = createTheme();

export default function Album() {
  return (
    <>
    <h2 style={{color:'pink',textAlign:'center',  fontFamily: "'Concert One', sans-serif"}}>Shakes</h2>
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
                    image='https://img.freepik.com/free-photo/high-angle-assortment-desserts-with-straws-chocolate_23-2148603243.jpg?size=626&ext=jpg&uid=R131645230&ga=GA1.1.456192605.1702699190&semt=ais'
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
                    image='https://img.freepik.com/free-photo/strawberry-ice-cream-with-delights_140725-8815.jpg?size=626&ext=jpg&uid=R131645230&ga=GA1.1.456192605.1702699190&semt=ais'
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
                    image='https://img.freepik.com/premium-photo/milkshake-with-chocolate-brick-wall-background_219193-3738.jpg?size=626&ext=jpg&uid=R131645230&ga=GA1.1.456192605.1702699190&semt=ais'
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
                    image='https://img.freepik.com/free-photo/creamy-vanilla-milky-shake-with-chocolate-sauce-white-saucer_114579-10109.jpg?size=626&ext=jpg&uid=R131645230&ga=GA1.1.456192605.1702699190&semt=ais'
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
                    image='https://img.freepik.com/premium-photo/ice-cream-milkshake-black-wooden-background-copy-space_187166-32407.jpg?size=626&ext=jpg&uid=R131645230&ga=GA1.1.456192605.1702699190&semt=ais'
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
                    image='https://img.freepik.com/free-photo/chocolate-smoothie_1339-2852.jpg?size=626&ext=jpg&uid=R131645230&ga=GA1.1.456192605.1702699190&semt=ais'
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
                    image='https://img.freepik.com/free-photo/front-view-chocolate-dessert-glass-with-straw_23-2148603311.jpg?size=626&ext=jpg&uid=R131645230&ga=GA1.1.456192605.1702699190&semt=ais'
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
                    image='https://img.freepik.com/free-photo/kiwi-parfait-with-yogurt-caramel-crumbled-cookies-kiwi_140725-10963.jpg?size=626&ext=jpg&uid=R131645230&ga=GA1.1.456192605.1702699190&semt=ais'
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
                    image='https://img.freepik.com/premium-photo/three-glasses-milkshake-with-assorted-flavors-chocolate-vanilla-strawberry-milkshake_434193-2702.jpg?size=626&ext=jpg&uid=R131645230&ga=GA1.1.456192605.1702699190&semt=ais'
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
                    image='https://img.freepik.com/free-photo/front-view-glass-dessert-with-chocolate_23-2148603291.jpg?size=626&ext=jpg&uid=R131645230&ga=GA1.1.456192605.1702699190&semt=ais'
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
                    image='https://img.freepik.com/free-photo/front-view-milkshake-glass-with-blue-background_23-2148296120.jpg?size=626&ext=jpg&uid=R131645230&ga=GA1.1.456192605.1702699190&semt=ais'
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