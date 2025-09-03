import {Box, Container, Typography} from "@mui/material";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import example1 from "../assets/images/imgWebp/industrial_mountaineering_worker_cleaning_window_o_2023_11_27_05.webp"
import example2 from "../assets/images/imgWebp/telecom_worker_climbing_antenna_tower_2024_09_16_09_39_19_utc.webp"
import example3 from "../assets/images/imgWebp/photo_2025-09-03_17-06-12.webp"
import example4 from "../assets/images/imgWebp/photo_2025-06-10_14-08-47.webp"
import example5 from  "../assets/images/imgWebp/low-angle-view-men-cleaning-building-wall.webp"
import example6 from "../assets/images/imgWebp/IMG_7822.webp"
import example7 from "../assets/images/imgWebp/industrial_climber_lowering_from_roof_of_building_2023_11_27_05.webp"
import example8 from "../assets/images/imgWebp/silos.webp"
import example9 from "../assets/images/imgWebp/IMG_7701.webp"
import example10 from "../assets/images/imgWebp/industrial_mountaineering_worker_cleaning_window_o_2022_06_16_19.webp"


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