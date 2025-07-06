import {Box, Container, IconButton, Stack, Typography} from "@mui/material"
import InstagramIcon from "@mui/icons-material/Instagram"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import EmailIcon from "@mui/icons-material/Email"
import PhoneIcon from "@mui/icons-material/Phone"


interface FooterProps {
  t: Record<string, string>
}


export default function Footer ({t}: FooterProps) {
  return (
    <Box id="contact" component="footer" sx={{backgroundColor: "primary.dark"}}>
      <Container>
        <Box py={4}  >
          <Typography variant="h4" align="center" py={4}>
            {t["contact"]}
          </Typography>
          <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" >
            <PhoneIcon fontSize="medium" />
            <Typography fontSize="1.3rem">+995 591 06 30 29</Typography>
          </Stack>
          <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" >
            <EmailIcon fontSize="medium" />
            <Typography fontSize="1.3rem">info@alpinist.ge</Typography>
          </Stack>
          <Typography variant="h5" align="center" py={4}>{t["social"]}</Typography>
          <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" >
            <IconButton
              component="a"
              href="https://www.instagram.com/alpgroupge?igsh=MXZtZW1ieWFzZWJjaA=="
              target="_blank"
              rel="noopener"
            >
              <InstagramIcon fontSize="large"/>
            </IconButton>
            <IconButton
              component="a"
              href="https://wa.me/995591063029"
              target="_blank"
              rel="noopener"
            >
              <WhatsAppIcon fontSize="large"/>
            </IconButton>

          </Stack>
        </Box>
      </Container>
    </Box>





  )

}