"use client";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

import axios from "axios";
import PhoneInput from "react-phone-input-2";

import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  TextareaAutosize,
} from "@mui/material";
import { AlternateEmail, DateRange, LocalPhone } from "@mui/icons-material";

import "react-phone-input-2/lib/style.css";

import {
  ReachUs,
  NumberBox,
  PhoneIcon,
  ContactNumber,
  ContactWrapper,
} from "./style";

type Props = {};

function ContactPage({}: Props) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [validate, setValidate] = useState<boolean>(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errors, setErrors] = useState({
    name: false,
    phone: false,
    email: false,
    message: false,
  });
  const sendToTelegramBot = async (message: string) => {
    const botToken = "7997508632:AAFKuyfBTItJ_csI2kVFdtH8PIQILX3VACs";
    const chatId = "6131471337";

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
      await axios.post(url, {
        chat_id: chatId,
        text: message,
      });
      toast.success("Your message has been sent successfully!");
      toast.info("A guide will contact you shortly.");
    } catch (error) {
      console.error("Xatolik yuz berdi:", error);
    }
  };
  const handelEmailLink = () => {
    window.location.href = "mailto:olimjontolipov8@gmail.com";
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prevForm) => ({
      ...prevForm,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !phoneNumber.trim()) {
      toast.error("❌ Please fill out all the fields!");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      toast.error(
        "❌ The email format seems incorrect. Please check and try again."
      );
      return;
    }

    const message = `📩 Yangi xabar:\n👤 Ism: ${form.name}\n📧 Email: ${form.email}\n📞 Telefon: +${phoneNumber}\n💬 Xabar: ${form.message}`;

    await sendToTelegramBot(message);

    setForm({ name: "", phone: "", email: "", message: "" });
  };
  const handleValidChange = (
    value: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPhoneNumber(value);
    setValidate(validatePhoneNumber(value));
  };

  const validatePhoneNumber = (phoneNumber: string): boolean => {
    const phoneNumberPattern = /^\d{10}$/;
    return phoneNumberPattern.test(phoneNumber);
  };

  return (
    <Container maxWidth="xl">
      <ContactWrapper>
        <ContactNumber>
          <NumberBox>
            <PhoneIcon>
              <LocalPhone />
            </PhoneIcon>
            <Typography variant="body1">+998(99)927 22 11</Typography>
          </NumberBox>
          <NumberBox onClick={handelEmailLink} style={{ cursor: "pointer" }}>
            <PhoneIcon>
              <AlternateEmail />
            </PhoneIcon>
            <Typography variant="body1" sx={{ cursor: "pointer" }}>
              olimjontolipov8@gmail.com
            </Typography>
          </NumberBox>
          <NumberBox>
            <PhoneIcon>
              <DateRange />
            </PhoneIcon>
            <Typography variant="body1">24/7</Typography>
          </NumberBox>
        </ContactNumber>

        <ReachUs>
          <Box>
            <Typography variant="h1" fontSize={30} fontWeight={700}>
              Reach Us Anytime
            </Typography>
          </Box>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={form.name}
              error={errors.name}
              onChange={handleChange}
              helperText={errors.name ? "Ismni kiriting!" : ""}
            />

            <PhoneInput
              country={"us"}
              value={phoneNumber}
              placeholder="Phone number"
              onChange={handleValidChange}
              inputProps={{ required: true }}
            />

            <TextField
              fullWidth
              name="email"
              label="Email"
              value={form.email}
              error={errors.email}
              onChange={handleChange}
              helperText={errors.email ? "Emailni kiriting!" : ""}
            />

            <TextareaAutosize
              minRows={10}
              maxRows={10}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message..."
            />

            <Button type="submit" variant="contained">
              Send
            </Button>
          </form>
        </ReachUs>
      </ContactWrapper>
      <ToastContainer />
    </Container>
  );
}

export default ContactPage;
