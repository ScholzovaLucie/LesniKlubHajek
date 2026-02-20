"use client";

import {
  AppBar,
  Toolbar,
  Button,
  Stack,
  Box,
  IconButton,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const MenuButtons = () => (
    <Stack direction="column" spacing={2} sx={{ p: 3 }}>
      <Button component={Link} href="/">
        Úvod
      </Button>
      <Button component={Link} href="/o-nas">
        O nás
      </Button>
      <Button component={Link} href="/aktuality">
        Aktuality
      </Button>
      <Button component={Link} href="/cenik">
        Ceník
      </Button>
      <Button component={Link} href="/fotogalerie">
        Fotogalerie
      </Button>
      <Button component={Link} href="/kontakt">
        Kontakt
      </Button>
    </Stack>
  );

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: "rgba(250, 241, 222, 0.7)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
          color: "#2F4F1F",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box
            component={Link}
            href="/"
            sx={{ textDecoration: "none", color: "inherit", fontWeight: 800 }}
          >
            Lesní klub Hájek
          </Box>

          {/* Desktop menu */}
          <Stack
            direction="row"
            spacing={2}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <Button component={Link} href="/">
              Úvod
            </Button>
            <Button component={Link} href="/o-nas">
              O nás
            </Button>
            <Button component={Link} href="/cenik">
              Ceník
            </Button>
            <Button component={Link} href="/kontakt">
              Kontakt
            </Button>
          </Stack>

          {/* Mobil */}
          <IconButton
            sx={{ display: { md: "none" } }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <MenuButtons />
      </Drawer>
    </>
  );
}
