"use client";

import React, { useEffect } from "react";

import Link from "next/link";

import {
  Call,
  YouTube,
  Telegram,
  WhatsApp,
  Instagram,
} from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

import {
  FooterWr,
  FooterLogo,
  FooterSocial,
  FooterBottom,
  FooterContact,
  FooterContainer,
  FooterQuickLinks,
} from "./style";

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
          <Link href="/happyClients">Happy-Clients</Link>
        </FooterQuickLinks>

        <FooterContact>
          <Typography variant="h6">
            <Call /> To More Inquiry
          </Typography>
          <Box marginBottom={3}>
            <a href="tel:+998999272211">+998(99)927-22-11</a>
          </Box>

          <Typography variant="h6">
            <Telegram /> Send Mail
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
            <WhatsApp />
            <Typography>WhatsApp</Typography>
          </div>
          <div
            className="social-item"
            onClick={() => openLink("https://www.instagram.com/olimjon_guide/")}
          >
            <Instagram />
            <Typography>Instagram</Typography>
          </div>
          <div
            className="social-item"
            onClick={() =>
              openLink("https://www.youtube.com/@Uzbekistan.tourism")
            }
          >
            <YouTube />
            <Typography>YouTube</Typography>
          </div>
          <div className="social-item">
            <Telegram />
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
