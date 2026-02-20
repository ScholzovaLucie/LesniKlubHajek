import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: { main: "#3E6B3A" }, // tmavě zelená
    secondary: { main: "#F28C28" }, // oranžová CTA
    background: { default: "#faf1de" }, // béžová
  },
  shape: { borderRadius: 16 },
  typography: {
    fontFamily: "Nunito, Arial, sans-serif",
    h1: { fontWeight: 800 },
    h2: { fontWeight: 800 },
    button: { textTransform: "none", fontWeight: 700 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          background: "#C7D97B",
          color: "#2F4F1F",
          padding: "8px 18px",
          fontWeight: 700,
          "&:hover": {
            background: "#B5CC64",
          },
        },
      },
    },
  },
});
