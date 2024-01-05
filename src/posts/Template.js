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
    <div
    style={{
      backgroundColor: "#1a1a1a", 
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
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
                      pt: '56.25%',
                    }}
                    image="https://img.freepik.com/free-photo/side-view-baked-chicken-with-cucumber-lemon-seasoning-bread-table_141793-4757.jpg?size=626&ext=jpg&ga=GA1.1.456192605.1702699190&semt=ais"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    
                    <Typography gutterBottom variant="h5" component="h2" color='Black'>
                    Hydrabad Foodiee
                    </Typography>
                    <Typography style={{color:'gray'}}>
                      All Types of Meals
                    </Typography>
                    <Typography style={{color:'darkslategrey'}}>
                      Salem
                    </Typography>

                  </CardContent>
                  <CardActions>
                    <Button size="small"> View </Button>
                  </CardActions>
                </Card>

                </Link>
              </Grid>
            ))}
             {/* a card*/}
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
                    image='https://img.freepik.com/premium-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-9292.jpg?size=626&ext=jpg&ga=GA1.1.456192605.1702699190&semt=ais'
                  />
                  
                  <CardContent sx={{ flexGrow: 1 }}>

                  <Typography gutterBottom variant="h5" component="h2" color='Black'>
                     Grand Hotel
                    </Typography>
                    <Typography style={{color:'gray'}}>
                      Non-Veg and Italian Restaurant
                    </Typography>
                    <Typography style={{color:'darkslategrey'}}>
                      Erode
                    </Typography>

                  </CardContent>
                  <CardActions>
                    <Button size="small"> View </Button>
                  </CardActions>
                </Card>
                </Link>
              </Grid>
            ))}
             {/* a card*/}
             {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Link to='/sage' style={{textDecoration:'none',color:'inherit'}}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image='https://img.freepik.com/free-photo/thin-chicken-roasted-sticks-served-with-tomato-rosemary-sauce_114579-2019.jpg?size=626&ext=jpg&ga=GA1.1.456192605.1702699190&semt=ais'
                  />
                  <CardContent sx={{ flexGrow: 1 }}>

                  <Typography gutterBottom variant="h5" component="h2" color='Black'>
                    Sage & Salt
                    </Typography>
                    <Typography style={{color:'gray'}}>
                      Chineese,Italian
                    </Typography>
                    <Typography style={{color:'darkslategrey'}}>
                      Kancheepuram
                    </Typography>

                  </CardContent>
                  <CardActions>
                    <Button size="small"> View</Button>
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
                    image='https://img.freepik.com/free-photo/fresh-pasta-with-hearty-bolognese-parmesan-cheese-generated-by-ai_188544-9469.jpg?size=626&ext=jpg&uid=R131217777&ga=GA1.1.1438787942.1703130962&semt=ais'
                  />
                  <CardContent sx={{ flexGrow: 1 }}>

                  <Typography gutterBottom variant="h5" component="h2" color='Black'>
                   Sri Narayanan Hotel
                    </Typography>
                    <Typography style={{color:'gray'}}>
                      Desserts,Juices,Sweets
                    </Typography>
                    <Typography style={{color:'darkslategrey'}}>
                      Chennai
                    </Typography>

                  </CardContent>
                  <CardActions>

                    <Button size="small">View</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
                {/*a crad*/}
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
                    image='https://img.freepik.com/premium-photo/arabic-food-kabsa-with-chicken-almonds-closeup-plate-generative-ai_779468-4840.jpg?size=626&ext=jpg&ga=GA1.1.456192605.1702699190&semt=ais'
                  />
                  <CardContent sx={{ flexGrow: 1 }}>

                  <Typography gutterBottom variant="h5" component="h2" color='Black'>
                    Grand Feast
                    </Typography>
                    <Typography style={{color:'gray'}}>
                      All Non-Veg Meals
                    </Typography>
                    <Typography style={{color:'darkslategrey'}}>
                      Karur
                    </Typography>

                  </CardContent>
                  <CardActions>

                    <Button size="small">View</Button>
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
                    image='https://img.freepik.com/premium-photo/paneer-butter-masala-cheese-cottage-curry_466689-49699.jpg?size=626&ext=jpg&uid=R131217777&ga=GA1.1.1438787942.1703130962&semt=ais'
                  />
                  <CardContent sx={{ flexGrow: 1 }}>

                  <Typography gutterBottom variant="h5" component="h2" color='Black'>
                      P&K Restaurant
                    </Typography>
                    <Typography style={{color:'gray'}}>
                      Beverages,FastFoods
                    </Typography>
                    <Typography style={{color:'darkslategrey'}}>
                      Coimbatore
                    </Typography>

                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                  </CardActions>
                </Card>
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
                    image='https://img.freepik.com/free-photo/meat-fritters-close_1220-141.jpg?size=626&ext=jpg&uid=R131217777&ga=GA1.1.1438787942.1703130962&semt=ais'
                  />
                  <CardContent sx={{ flexGrow: 1 }}>

                  <Typography gutterBottom variant="h5" component="h2" color='Black'>
                    Saravana Bhavan
                    </Typography>
                    <Typography style={{color:'gray'}}>
                      Veg Meals,Chineese
                    </Typography>
                    <Typography style={{color:'darkslategrey'}}>
                      Tirupur
                    </Typography>

                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
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
                    image='https://img.freepik.com/premium-photo/roti-parata-roti-canai-with-lamb-curry-sauce_121826-1722.jpg?size=626&ext=jpg&uid=R131217777&ga=GA1.1.1438787942.1703130962&semt=ais'
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2" color='Black'>
                    Prince Hotel
                    </Typography>
                    <Typography style={{color:'gray'}}>
                      All Types of Meals
                    </Typography>
                    <Typography style={{color:'darkslategrey'}}>
                      Madurai
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View </Button>
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
                    image='https://img.freepik.com/premium-photo/dum-handi-muttona-biryania-gosht-pilaf-is-prepared-earthen-clay-pot-called-haandi-1-kilo-size-popular-indian-non-vegetarian-fooda_466689-52330.jpg?size=626&ext=jpg&uid=R131217777&ga=GA1.1.1438787942.1703130962&semt=ais'
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2" color='Black'>
                    Poppy's Hotel
                    </Typography>
                    <Typography style={{color:'gray'}}>
                      SouthIndian,Italian,Desserts
                    </Typography>
                    <Typography style={{color:'darkslategrey'}}>
                      Tirupur
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
          
        </Container>
        
      </main>
    
    </ThemeProvider>
    </div>
  );
}