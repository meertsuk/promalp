import {Box, Container, Typography} from "@mui/material";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import example1 from "../assets/images/skilled-glass-cleaners-who-lower-themselves-with-slings-from.jpg"
import example2 from "../assets/images/telecom_worker_climbing_antenna_tower_2024_09_16_09_39_19_utc.jpg"
import example3 from "../assets/images/photo_2025-06-10_14-08-46.jpg"
import example4 from "../assets/images/photo_2025-06-10_14-08-47.jpg"
import example5 from  "../assets/images/low-angle-view-men-cleaning-building-wall.jpg"
import example6 from "../assets/images/IMG_7822.jpg"
import example7 from "../assets/images/industrial_climber_lowering_from_roof_of_building_2023_11_27_05.jpg"
import example8 from "../assets/images/silos.jpg"
import example9 from "../assets/images/IMG_7701.jpg"
import example10 from "../assets/images/industrial_mountaineering_worker_cleaning_window_o_2022_06_16_19.jpg"


const images = [example1, example2, example3, example4, example5, example6, example7, example8, example9, example10]

interface ExamplesProps {
  t: Record<string, string>
}

export default function Examples({t}: ExamplesProps) {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  }
  return (
    <Box py={10} id='examples' sx={{backgroundColor: "#e0e0e0"}}>
     <Container>
      <Typography variant="h4" align="center" py={4}>
        {t["examples"]}
      </Typography>

      <Slider {...settings}>

          {images.map((image, index) => (

            <Box key={index}>
              <img
                src={image}
                alt={`Photo ${index + 1}`}
                style={{
                  width: "100%",
                  height: "80vh",
                  objectFit: "cover",
                  borderRadius: "1rem",
                }}
              />
            </Box>

          ))}

      </Slider>
     </Container>
    </Box>
  )
}