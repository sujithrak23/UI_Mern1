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


const cards = [1, 2, 3];

const defaultTheme = createTheme();

const ExampleHotel = (props) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      
      <main>
        
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
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
                  image={props.img}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  
                  <Typography gutterBottom variant="h5" component="h2" color='Black'>
                  {props.title}
                  </Typography>
                  <Typography style={{color:'gray'}}>
                   {props.desc}
                  </Typography>
                  <Typography style={{color:'darkslategrey'}}>
                    {props.location}
                  </Typography>

                </CardContent>
                <CardActions>
                  <Button size="small"> View </Button>
                </CardActions>
              </Card>
            </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}

export default ExampleHotel;