"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import {
  Box,
  Menu,
  Stack,
  Button,
  Divider,
  Toolbar,
  MenuItem,
  Container,
  Typography,
  IconButton,
} from "@mui/material";
import CallIcon from "@mui/icons-material/Call";

import { HeaderStyle } from "./header.style";

function Header() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showHeader, setShowHeader] = useState(true);
  const [anchorElNav, setAnchorElNav] = useState<null>(null);

  const pathname = usePathname();

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const pages = [
    "Home",
    "About",
    "Tours",
    "Gallery",
    "Contact",
    "Happy-clients",
  ];

  return (
    <HeaderStyle
      style={{
        top: showHeader ? 0 : "-80px",
        transition: "top 0.3s ease-in-out",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Image
            width={80}
            height={50}
            alt="Logo image"
            src="/images/logoImage/Logo.png"
          />
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              color="inherit"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              aria-controls="menu-appbar"
            >
              ☰
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={() => setAnchorElNav(null)}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => setAnchorElNav(null)}>
                  <Typography>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, index) => {
              const pagePath =
                index === 0
                  ? "/"
                  : `/${page.toLowerCase().replace(/\s+/g, "-")}`;
              const isActive = pathname === pagePath;

              return (
                <Link href={pagePath} key={page} className="link">
                  <Button
                    className="pageBtn"
                    sx={{
                      color: isActive ? "#FF9800" : "#2c2b39",
                      borderBottom: isActive ? "2px solid #FF9800" : "none",
                    }}
                  >
                    {page}
                  </Button>
                </Link>
              );
            })}
          </Box>

          <Stack direction="row" alignItems="center" gap={1}>
            <Link href="https://api.whatsapp.com/send/?phone=998999272211">
              <CallIcon className="callIcon" />
            </Link>
            <Divider orientation="vertical" flexItem className="divider" />
            <Box>
              <Link
                className="questionLink"
                href="https://api.whatsapp.com/send/?phone=998999272211"
              >
                To More Inquiry
              </Link>
              <Link
                className="questionPhone"
                href="https://api.whatsapp.com/send/?phone=998999272211&text&type=phone_number&app_absent=0"
              >
                +998(99)927-22-11
              </Link>
            </Box>
          </Stack>
        </Toolbar>
      </Container>
    </HeaderStyle>
  );
}
export default Header;
