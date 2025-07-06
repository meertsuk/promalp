import {Container, Box, Typography, useMediaQuery} from "@mui/material";

interface HeroProps {
  t: Record<string, string>
}

export default function Hero({t}: HeroProps) {
  const isMobile = useMediaQuery("(max-width: 768px)")



  return (

    <Box
      sx={{
      backgroundImage: "url('../src/assets/images/cleaner-clean-glass-building.jpg')",
      height: "100vh",
      width: "100vw",
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      color: "#fff",
      position: "relative",


    }}>
      <Box
        sx={{
          backdropFilter: "brightness(0.7)",
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      />
      <Container
        sx={{
          position: "relative",
          zIndex: 2,
        }}
      >
        <Typography variant={ isMobile ? ("h4" as "h4") : ("h3" as "h3") } component="h1" gutterBottom >
          {t['headTitle']}
        </Typography>
        <Typography variant="h5" >
          {t['slogan']}
        </Typography>
      </Container>
    </Box>

  )
}