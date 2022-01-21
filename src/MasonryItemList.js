import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function MasonryImageList() {
  return (
   
    <Box sx={{ width: 800, height: 650, overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            
            />
          </ImageListItem>


        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1541445976433-f466f228a409?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    title: 'Card1',
  },
  {
    img: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    title: 'Card2',
  },
  {
    img: 'https://f-photos.com/wp-content/uploads/2012/12/rojden-den-kartichka_NAZDRAVE-696x497.jpg',
    title: 'Card3',
  },
  {
    img: 'https://f-photos.com/wp-content/uploads/2012/12/originalna-kartichka-za-rojden-den-696x497.jpg',
    title: 'Card4',
  },
  {
    img: 'https://kartichki.net/images/upload/2019-06/tHL2o2P9AQyRyP5j_f.jpg',
    title: 'Card5',
  },
  {
    img: 'https://1.bp.blogspot.com/-gPr_8YS8BSE/WV04FOJw0eI/AAAAAAAAAVY/1yTtH3jQECIUf1rjBovQ20YW-Tt4J8XZACLcBGAs/s320/album.jpg',
    title: 'Card6',
  },
  {
    img: 'https://th.bing.com/th/id/R.1da470b52ad2bc8c2cb6f25e1c4e16b1?rik=onn42AQR4Tj0dw&riu=http%3a%2f%2f3.bp.blogspot.com%2f-0kdigGKZcm4%2fT88ZWTYCBfI%2fAAAAAAAAA5k%2fSt3PaQx2yP0%2fs400%2fDSC00311.jpg&ehk=ew0lHCwpnnOWLEMeQ2UmUVxZDKzAa74AyiH%2fJ%2frLanQ%3d&risl=&pid=ImgRaw&r=0',
    title: 'Card7',
  },
  {
    img: 'https://i.pinimg.com/originals/a4/b2/c2/a4b2c25709f24cb949408a5e5f786f16.jpg',
    title: 'Card8',
  },
  {
    img: 'https://papilon-design.com/img/bonbon/bonbon-milestone-1-2.jpg',
    title: 'Card9',
  },
  {
    img: 'https://www.lykke.hr/wp-content/uploads/2021/03/kartica2.jpg',
    title: 'Card0',
  },
  
  {
    img: 'https://th.bing.com/th/id/OIP.EQeuzqGfpmk615ks1bGXfwHaEv?pid=ImgDet&rs=1',
    title: 'Card11',
  },

  {
    img: 'https://www.zayobooks.com/UserFiles/Product/gallery_1/FE4411FD-8AA0-619A-DE67-D6993236E987.jpg?w=1024&cache',
    title: 'Card12',
  },
  {
    img: 'https://kartichki.bg/images/upload/2014-01/205_abiturientskibal6_l.jpg',
    title: 'Card13',
  },
];

