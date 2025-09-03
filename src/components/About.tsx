import {Box, Typography, useMediaQuery} from "@mui/material";
import aboutImg from "../assets/images/imgWebp/equipment_of_industrial_mountaineer_laborer_on_roo_2024_07_24_18.webp"


interface AboutProps {
  t: Record<string, string>
}

export default function About({t}: AboutProps) {
  const isMobile = useMediaQuery("(max-width: 768px)")

  if (!isMobile) {
    return (
      <Box py={10} id='about' sx={{backgroundColor: "#fff"}}>
        <Typography variant="h4" align="center" py={4}>
          {t["aboutTitle"]}
        </Typography>
        <Box sx={{display: "flex", justifyContent: "space-between", gap: 4}}>
          <Typography variant="body1" align="center"  sx={{marginLeft: "2rem", fontSize:"1.8rem"}}>
            {t["about"]}
          </Typography>
          <img src={aboutImg}
               alt="About"
               style={{width: "350px", borderRadius: "0.5rem", margin: "0 1rem"}}
          />
        </Box>
      </Box>
    )
  } else {
    return (
      <Box py={10}
           id='about'
           sx={{
             backgroundColor: "#fff",
             display: "flex",
             flexDirection: "column",


      }}>
        <Typography variant="h4" align="center" py={4}>
          {t["aboutTitle"]}
        </Typography>
        <Box sx={{
          display: "flex",
          flexDirection: "column-reverse",
          justifyContent: "space-between",
          gap: 4,
          alignItems: "center",
        }}>
          <Typography
            component="p"
            sx={{ fontSize: "1.5rem", paddingLeft: "1rem", textAlign: "left" }}
          >
            {t["about"]}
          </Typography>
          <img src={aboutImg}
               alt="About"
               style={{width: "300px", height: "200px" , borderRadius: "0.5rem"}}
          />
        </Box>
      </Box>
    )
  }


 }