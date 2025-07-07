import {useState, useEffect} from "react"
import { Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material"
import Header from "./components/Header.tsx"
import Services from "./components/Services.tsx"
import Examples from "./components/Examples.tsx"
import Footer from "./components/Footer.tsx"
import OrderForm from "./components/OrderForm.tsx"
import About from "./components/About.tsx"
import Hero from "./components/Hero.tsx"
import {translations} from "./translations.ts"

const theme = createTheme({
  typography: {
    fontFamily: "Roboto, sans-serif",
  }
})


export default function App () {
  const [language, setLanguage] = useState("ru")
  const t = translations[language as keyof typeof translations]

  useEffect(() => {
    const savedLanguage: string =  localStorage.getItem("language") || "ru"
    setLanguage(savedLanguage)
  }, [])


  function changeLanguage(lang: string) {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth={false} disableGutters>
        <Header language={language} changeLanguage={changeLanguage} t={t} />
        <Hero t={t} />
        <Services t={t} />
        <Examples t={t} />
        <About t={t} />
        <OrderForm t={t} />
        <Footer t={t} />
      </Container>
    </ThemeProvider>
  )
}