import { Box, Container, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ background: "#3E6B3A", color: "white", mt: 8 }}>
      <Container sx={{ py: 4 }}>
        <Typography fontWeight={700}>Lesní klub Hájek</Typography>
        <Typography>737 787 061</Typography>
        <Typography>lesniklubhajek.cz</Typography>

        <Typography sx={{ mt: 2, opacity: 0.7 }}>
          © {new Date().getFullYear()} Lesní klub Hájek
        </Typography>
      </Container>
    </Box>
  );
}
