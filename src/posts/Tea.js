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
        <h2 style={{color:'pink',textAlign:'center',  fontFamily: "'Concert One', sans-serif"}}>Chai</h2>

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
                    image='https://img.freepik.com/premium-photo/cup-tea-with-milk-spices_78677-6765.jpg?size=626&ext=jpg&uid=R131645230&ga=GA1.1.456192605.1702699190&semt=ais'
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
                    image='https://img.freepik.com/premium-photo/hot-black-tea-with-lemon-mint-wooden-table_221774-7439.jpg?size=626&ext=jpg&uid=R131645230&ga=GA1.1.456192605.1702699190&semt=ais'
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
                    image='https://img.freepik.com/free-photo/hot-orange-tea-fresh-orange-table_1150-28287.jpg?size=626&ext=jpg&uid=R131645230&ga=GA1.1.456192605.1702699190&semt=ais'
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
                    image='https://img.freepik.com/free-photo/vertical-view-delicious-coffee-white-cups-wooden-cutting-board-cookies-cinnamon-limes-chocolate-bars_140725-143841.jpg?w=740&t=st=1703227261~exp=1703227861~hmac=bdfadb88504300d4d715098e439052ed52f75b23ded1bdd8c7e37a3ba9b1666b'
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
                    image='https://img.freepik.com/free-photo/frappe-glass-slices-bread-with-seeds_23-2148623233.jpg?size=626&ext=jpg&uid=R131645230&ga=GA1.1.456192605.1702699190&semt=ais'
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
                    image='https://img.freepik.com/premium-photo/two-faceted-glass-glasses-wooden-table-with-traditional-indian-drink-masala-chai_163994-717.jpg?size=626&ext=jpg&uid=R131645230&ga=GA1.1.456192605.1702699190&semt=ais'
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
                    image='https://img.freepik.com/premium-photo/masala-tea-with-spices-wooden-table-two-glass-glasses_163994-187.jpg?size=626&ext=jpg&uid=R131645230&ga=GA1.1.456192605.1702699190&semt=ais'
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
                    image='https://img.freepik.com/free-photo/close-up-hand-pouring-coffee-water-into-coffee-cup-international-coffee-day-concept_1150-25434.jpg?size=626&ext=jpg&uid=R131645230&ga=GA1.1.456192605.1702699190&semt=ais'
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

          </Grid>
          
        </Container>
        
      </main>
    
    </ThemeProvider>

    </>
  );
}