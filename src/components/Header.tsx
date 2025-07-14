import {
  AppBar,
  Box,
  Button, Collapse,
  Container,
  IconButton,
  Toolbar,
  Typography,

} from "@mui/material"
import LanguageIcon from "@mui/icons-material/Language"
import {useState} from "react"
import rusImg from "../assets/images/flags/Flag_of_the_Russian_Federation.svg.png"
import engImg from "../assets/images/flags/flag-eng@2x.png"
import geImg from "../assets/images/flags/Flag_of_Georgia.svg.png"

interface HeaderProps {
  language: string
  changeLanguage: (lang: string) => void
  t: Record<string, string>
}

export default function Header ({language, changeLanguage, t}: HeaderProps) {
  const [showLangButtons, setShowLangButtons] = useState(false)


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
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <Typography variant="h6"  sx={{ fontWeight: 700 }}>
            {t["headTitle"]}
          </Typography>

          <Box>
            <Button color="inherit" href="#services">{t["types"]}</Button>
            <Button color="inherit" href="#examples">{t["examples"]}</Button>
            <Button color="inherit" href="#about">{t["aboutTitle"]}</Button>
            <Button color="inherit" href="#contact">{t["contact"]}</Button>
            <Button color="inherit" href="#order">{t["formTitle"]}</Button>
          </Box>

          <Box sx={{display: "flex", alignItems: "center", gap: 1, py: "0.5rem"}}>
            <IconButton
              color="inherit"
              onClick={() => setShowLangButtons(prev => !prev)}
            >
              <LanguageIcon />
            </IconButton>

            <Collapse in={showLangButtons} orientation="horizontal">
              <Box sx={{display: "flex", gap:1}}>
                <Button
                  onClick={() => changeLanguage("ru")}
                  variant={language === "ru" ? ("contained" as "contained") : ("outlined" as "outlined")}
                  sx={{
                    backgroundImage: `url(${rusImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    color: "black",
                    textShadow: "0 0 3px rgba(0, 0, 0, 0.15)",
                    fontWeight: 900,
                    fontSize: "1.3rem",
                    p: "0.1rem"
                  }}
                >RU
                </Button>
                <Button
                  onClick={() => changeLanguage("en")}
                  variant={language === "en" ? ("contained" as "contained") : ("outlined" as "outlined")}
                  sx={{
                    backgroundImage: `url(${engImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    color: "black",
                    textShadow: "0 0 3px rgba(0, 0, 0, 0.15)",
                    fontWeight: 900,
                    fontSize: "1.3rem",
                    p: "0.1rem"
                  }}
                >EN
                </Button>
                <Button
                  onClick={() => changeLanguage("ge")}
                  variant={language === "ge" ? ("contained" as "contained") : ("outlined" as "outlined")}
                  sx={{
                    backgroundImage: `url(${geImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    color: "black",
                    textShadow: "0 0 3px rgba(0, 0, 0, 0.15)",
                    fontWeight: 900,
                    fontSize: "1.3rem",
                    p: "0.1rem"
                  }}
                >GE
                </Button>
              </Box>
            </Collapse>

          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  )
}