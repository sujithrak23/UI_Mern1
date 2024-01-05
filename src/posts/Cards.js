import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';

const images = [
  {
    url: 'https://img.freepik.com/free-photo/chocolate-ice-cream-dessert_144627-8365.jpg?size=626&ext=jpg&uid=R131645230&ga=GA1.1.456192605.1702699190&semt=ais',
    title: 'Icecreams',
    width: '40%',
  },
  {
    url: 'https://img.freepik.com/free-photo/cup-coffee-with-coffee-beans-grinder-background_1112-430.jpg?size=626&ext=jpg&uid=R131645230&ga=GA1.1.456192605.1702699190&semt=ais',
    title: 'Coffees',
    width: '30%',
  },
  {
    url: 'https://img.freepik.com/free-photo/creamy-vanilla-milky-shake-with-chocolate-sauce-white-saucer_114579-10109.jpg?size=626&ext=jpg&uid=R131645230&ga=GA1.1.456192605.1702699190&semt=ais',
    title: 'Shakes',
    width: '30%',
  },
];

const imagesTwo = [
  {
    url: 'https://img.freepik.com/free-photo/cocktails-tropical-fruits_23-2147795383.jpg?size=626&ext=jpg&uid=R131645230&ga=GA1.1.456192605.1702699190&semt=ais',
    title: 'Freah Juices',
    width: '30%',
  },
  {
    url: 'https://img.freepik.com/premium-photo/delicious-toasts-with-various-sweet-jams-black-background-copyspace-your-text-banner_197589-3266.jpg?size=626&ext=jpg&uid=R131645230&ga=GA1.1.456192605.1702699190&semt=ais',
    title: 'Breads',
    width: '40%',
  },
  {
    url: 'https://img.freepik.com/free-photo/colorful-cocktails-with-ice_144627-21745.jpg?size=626&ext=jpg&uid=R131645230&ga=GA1.1.456192605.1702699190&semt=ais',
    title: 'Cold Drinks',
    width: '30%',
  },
];


const imagesThree = [
  {
    url: 'https://img.freepik.com/free-photo/assortment-pieces-cake_114579-28235.jpg?size=626&ext=jpg&uid=R131645230&ga=GA1.1.456192605.1702699190&semt=ais',
    title: 'Cakes',
    width: '30%',
  },
  {
    url: 'https://img.freepik.com/free-photo/front-view-sweet-cookies-with-candies-dark-grey-space_140725-79472.jpg?size=626&ext=jpg&uid=R131645230&ga=GA1.1.456192605.1702699190&semt=ais',
    title: 'Cookies',
    width: '30%',
  },
  {
    url: 'https://img.freepik.com/free-photo/brownie-chocolate-ice-cream-mint-sugar-powder-side-view_141793-15452.jpg?size=626&ext=jpg&uid=R131645230&ga=GA1.1.456192605.1702699190&semt=ais',
    title: 'Desserts',
    width: '40%',
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

export default function ButtonBaseDemo() {
  return (
    <div className='container' style={{width:'60%'}} >
      <h1 style={{textAlign:'left',color:'white',margin:'20px'}}>Need Refreshments Tap Below !! </h1>
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>

    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
      {imagesTwo.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>

    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
      {imagesThree.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
    </div>
  );
}