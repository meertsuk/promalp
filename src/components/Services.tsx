import {Box, Card, CardContent, CardMedia, Container, Typography} from "@mui/material";


interface ServicesProps {
  t: Record<string, string>
}

interface Service {
  key: string,
  image: string
}

const services: Service[] = [
  {key: "wash", image: "../src/assets/images/servicesImages/cleaning.png"},
  {key: "mountAd", image: "../src/assets/images/servicesImages/ad.png"},
  {key: "mountAc", image: "../src/assets/images/servicesImages/ac.png"},
  {key: "paint", image: "../src/assets/images/servicesImages/brush.png"},
  {key: "etc", image: "../src/assets/images/servicesImages/etc1.png"},
]

export default function Services ({t}: ServicesProps) {
  return (
    <Box
      sx={{
        backgroundColor: "#c3d5de"
      }}
      py={10}
      id='services'
    >
      <Container>
        <Typography
          variant="h3"
          align="center"
          sx={{
            paddingTop: "2rem",
            marginBottom: "2rem",
          }}
        >
          {t["types"]}
        </Typography>
      </Container>
      <Container
          sx={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            gap: 4,
            alignItems: "center",
          }}
        >
        <>
          {services.map((service) => (
            <Box key={service.key} >
              <Card
                onClick={ () => {
                  const orderForm = document.getElementById("order")
                  orderForm?.scrollIntoView({behavior: "smooth"})
                  }
                }
                sx={{
                  backgroundColor: "#F6F6F6",
                  width: "300px",
                  height: "300px",
                  boxShadow: 6,
                  borderRadius: "1rem",
                  transition: "all 0.3s ease",
                  '&:hover': {
                    cursor: "pointer",
                    scale: 1.1,
                  }
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  width="200"
                  image={service.image}
                  alt={t[service.key]}
                  sx={{
                    objectFit: "contain"
                  }}
                />
                <CardContent>
                  <Typography
                    sx={{
                      fontSize: "1.5rem",
                      textAlign: "center",
                      fontWeight: "bold",
                    }}
                  >
                    {t[service.key]}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </>
      </Container>

    </Box>
  )
}