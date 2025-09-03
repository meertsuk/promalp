import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material"

import rusImg from "../assets/images/flags/Flag_of_the_Russian_Federation.svg.png"
import engImg from "../assets/images/flags/flag-eng@2x.webp"
import geImg from "../assets/images/flags/Flag_of_Georgia.svg.png"

interface HeaderProps {
  language: string
  changeLanguage: (lang: string) => void
  t: Record<string, string>
}

export default function Header ({language, changeLanguage, t}: HeaderProps) {



  return (
    <AppBar position='absolute' color='primary'
            sx={{
              opacity: 0.8,
              py: "1rem",

            }}
    >
      <Container maxWidth={false}>
        <Toolbar
          disableGutters
          sx={{
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Typography variant="h1"  sx={{
            fontWeight: 700,
            textAlign: "center",
            fontSize: '2rem'
          }}>
            {t["headTitle"]}
          </Typography>

          <Box sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            marginTop: "1rem",
            marginBottom: "1rem",
          }}>
            <Button sx={{backgroundColor: "#213FC4"}} color="inherit" href="#services">{t["types"]}</Button>
            <Button sx={{backgroundColor: "#213FC4"}} color="inherit" href="#examples">{t["examples"]}</Button>
            <Button sx={{backgroundColor: "#213FC4"}} color="inherit" href="#about">{t["aboutTitle"]}</Button>
            <Button sx={{backgroundColor: "#213FC4"}} color="inherit" href="#contact">{t["contact"]}</Button>
            <Button sx={{backgroundColor: "#213FC4"}} color="inherit" href="#order">{t["formTitle"]}</Button>
          </Box>





              <Box sx={{display: "flex", gap:1}}>
                <Button
                  onClick={() => changeLanguage("ru")}
                  variant={language === "ru" ? ("contained" as "contained") : ("outlined" as "outlined")}
                  sx={{
                    backgroundImage: `url(${rusImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "2.5rem"
                  }}
                >
                </Button>
                <Button
                  onClick={() => changeLanguage("en")}
                  variant={language === "en" ? ("contained" as "contained") : ("outlined" as "outlined")}
                  sx={{
                    backgroundImage: `url(${engImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "2.5rem"
                  }}
                >
                </Button>
                <Button
                  onClick={() => changeLanguage("ge")}
                  variant={language === "ge" ? ("contained" as "contained") : ("outlined" as "outlined")}
                  sx={{
                    backgroundImage: `url(${geImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "2.5rem"
                  }}
                >
                </Button>
              </Box>




        </Toolbar>
      </Container>
    </AppBar>
  )
}