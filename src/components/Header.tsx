import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,

} from "@mui/material"
import LanguageIcon from "@mui/icons-material/Language"

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
            <IconButton color="inherit" >
              <LanguageIcon />
            </IconButton>
            <Button
              color="inherit"
              onClick={() => changeLanguage("ru")}
              variant={language === "ru" ? ("contained" as "contained") : ("outlined" as "outlined")}
            >RU
            </Button>
            <Button
              color="inherit"
              onClick={() => changeLanguage("en")}
              variant={language === "en" ? ("contained" as "contained") : ("outlined" as "outlined")}
            >EN
            </Button>
            <Button
              color="inherit"
              onClick={() => changeLanguage("ge")}
              variant={language === "ge" ? ("contained" as "contained") : ("outlined" as "outlined")}
            >GE
            </Button>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  )
}