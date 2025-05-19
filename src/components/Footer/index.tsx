"use client";

import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import CallIcon from "@mui/icons-material/Call";
import {
  FooterWr,
  FooterBottom,
  FooterContact,
  FooterLogo,
  FooterQuickLinks,
  FooterSocial,
  FooterContainer,
} from "./style";

import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Link from "next/link";

function Footer() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const openLink = (url: string) => {
    window.open(url, "_blank");
  };
  return (
    <FooterWr>
      <FooterContainer maxWidth="xl">
        <FooterLogo>
          <img width={100} src="./FooterBlackLogo.png" alt="logo" />
        </FooterLogo>

        <FooterQuickLinks>
          <Typography variant="h6">Quick Links</Typography>
          <Link href="/">Home</Link>
          <Link href="about">About</Link>
          <Link href="/tours">Tours</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">Conract</Link>
          <Link href="/happy-clients">Happy-Clients</Link>
        </FooterQuickLinks>

        <FooterContact>
          <Typography variant="h6">
            <CallIcon /> To More Inquiry
          </Typography>
          <Box marginBottom={3}>
            <a href="tel:+998999272211">+998(99)927-22-11</a>
          </Box>

          <Typography variant="h6">
            <TelegramIcon /> Send Mail
          </Typography>
          <Box flexDirection={"column"} display="flex" gap={1}>
            <a href="mailto:olimjontolipov8@gmail.com">
              olimjontolipov8@gmail.com
            </a>
            <a href="mailto:berdiyevsanat5@gmail.com">
              berdiyevsanat5@gmail.com
            </a>
          </Box>
        </FooterContact>

        <FooterSocial>
          <Typography variant="h6">We Are Here</Typography>
          <div
            className="social-item"
            onClick={() =>
              openLink("https://api.whatsapp.com/send/?phone=998999272211")
            }
          >
            <WhatsAppIcon />
            <Typography>WhatsApp</Typography>
          </div>
          <div
            className="social-item"
            onClick={() => openLink("https://www.instagram.com/olimjon_guide/")}
          >
            <InstagramIcon />
            <Typography>Instagram</Typography>
          </div>
          <div
            className="social-item"
            onClick={() =>
              openLink("https://www.youtube.com/@Uzbekistan.tourism")
            }
          >
            <YouTubeIcon />
            <Typography>YouTube</Typography>
          </div>
          <div className="social-item">
            <TelegramIcon />
            <Link href="https://t.me/tolipov_olimjon">Telegram</Link>
          </div>
        </FooterSocial>
      </FooterContainer>

      <FooterBottom>
        © Copyright 2024 | Developed by{" "}
        <a href="mailto:toshxujayivshuhrat7@gmail.com">Shuxrat Toshxujayev</a>
      </FooterBottom>
    </FooterWr>
  );
}

export default Footer;
