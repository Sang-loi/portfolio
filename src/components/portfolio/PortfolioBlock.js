import React from 'react';
import IconLink from "./IconLink";
import {Box} from "@mui/material";

function PortfolioBlock(props) {
   const {image, live, source, title, techno} = props;
   const technoImages = techno.map((tech, index) => (
      <img key={index} src={tech} alt={`logo-${index}`} style={{ margin: '5px', width: '10%' }} />
  ));
   return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
         <Box component={'img'} src={image} alt={'logo'}/>
         <h1 style={{fontSize: '1rem', width: '85%', marginTop: '5px' }}>{title}</h1>
         <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
              alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
               <IconLink link={live} title={'Live Demo'} icon={'fa fa-safari'}/>
            </Box>
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
               <IconLink link={source} title={'Source Code'} icon={'fa fa-code'}/>
            </Box>
            <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
                    {technoImages}
            </Box>          
         </Box>
      </Box>
   );
}

export default PortfolioBlock;