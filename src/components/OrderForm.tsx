import {Box, Button, Modal, TextField, Typography,} from "@mui/material";
import {useState} from "react";
import orderImg from "../assets/images/IMG_7842.jpg"

interface OrderFormProps {
  t: Record<string, string>
}

export default function OrderForm ({t}: OrderFormProps) {
  const [open, setOpen] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }


  return (
    <Box
      id="order"
      sx={{
        backgroundImage: `url(${orderImg})`,
        backgroundSize: "cover",
        py: "5rem",
      }}
    >
      <Box

        sx={{
          maxWidth: "600px",
          margin: "0 auto",
          padding: "2rem",
          backgroundColor: "#fff",
          borderRadius: "1rem",
          boxShadow: 6,
          display: "flex",
          flexDirection: "column",
          gap: 4,
          opacity: 0.9

        }}

      >

        <Typography variant="h4" align="center">
          {t["formTitle"]}
        </Typography>

        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            alignItems: "center",
          }}
        >

          <TextField
            label={t["name"]}
            name="name"
            id="name"
            variant="outlined"
            required
            fullWidth
            placeholder="John Smith"
          />
          <TextField
            label={t["city"]}
            name="city"
            id="city"
            variant="outlined"
            required
            fullWidth
            placeholder="Tbilisi"
          />
          <TextField
            label={t["address"]}
            name="address"
            id="address"
            variant="outlined"
            fullWidth
            placeholder="Chavchavadze st., №1"
          />
          <TextField
            label={t["phone"]}
            name="phone"
            id="phone"
            variant="outlined"
            required
            fullWidth
            placeholder="+995 555-12-34-56"

          />
          <TextField
            label="E-mail"
            name="email"
            id="email"
            variant="outlined"
            required
            fullWidth
            placeholder="you@email.com"
          />
          <TextField
            label={t["description"]}
            name="description"
            id="description"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
          />
          <Button variant="contained" type="submit" color="primary" sx={{width: "100%"}}>
            {t["send"]}
          </Button>
        </form>

        <Modal open={open} onClose={handleClose} >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "350px",
              height: "350px",
              backgroundColor: "#C3D5DE",
              borderRadius: "1rem",
              boxShadow: 6,
              display: "flex",
              flexDirection: "column",
              gap: 4,
              justifyContent: "space-around",
              alignItems: "center",

            }}>

            <Typography variant="h4" align="center" sx={{ padding: "0.5rem"}}>
              {t["modal"]}
            </Typography>
            <Button onClick={handleClose}
                    variant="contained"

                    sx={{
                      width: "40%",
                      fontSize: "1.2rem",
                      backgroundColor: "primary.main",
                      color: "primary.contrastText",
                      "&:hover": {
                        backgroundColor: "primary.dark",
                      }
                    }}
            >
              {t["close"]}
            </Button>
          </Box>

        </Modal>

      </Box>
    </Box>
  )
}