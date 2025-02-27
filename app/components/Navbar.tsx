"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import TranslateIcon from "@mui/icons-material/Translate";

const Navbar = () => {
  const router = useRouter();
  const locale = useLocale();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageAnchorEl, setLanguageAnchorEl] = useState<null | HTMLElement>(null);

  const handleLanguageMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setLanguageAnchorEl(event.currentTarget);
  };

  const handleLanguageMenuClose = () => {
    setLanguageAnchorEl(null);
  };

  const changeLanguage = (lang: string) => {
    router.push(`/${lang}`);
    handleLanguageMenuClose();
  };

  return (
    <AppBar position="static" className="bg-blue-800 shadow-md">
      {/* Top Contact Bar */}
      <div className="hidden md:flex justify-end items-center py-3 px-4 bg-blue-900 text-white space-x-6 text-sm">
        <div className="flex items-center space-x-1">
          <PhoneIcon fontSize="small" />
          <span>+88 01842781978</span>
        </div>
        <div className="flex items-center space-x-1">
          <PhoneIcon fontSize="small" />
          <span>+88 01842781978</span>
        </div>
        <div className="flex items-center space-x-1">
          <EmailIcon fontSize="small" />
          <span>talat@birdsofeden.me</span>
        </div>

        {/* Language Selector */}
        <div>
          <IconButton onClick={handleLanguageMenuOpen} className="text-white">
            <TranslateIcon />
          </IconButton>
          <Menu anchorEl={languageAnchorEl} open={Boolean(languageAnchorEl)} onClose={handleLanguageMenuClose}>
            <MenuItem onClick={() => changeLanguage("en")}>English</MenuItem>
            <MenuItem onClick={() => changeLanguage("bn")}>Bengali</MenuItem>
            <MenuItem onClick={() => changeLanguage("ur")}>Urdu</MenuItem>
            <MenuItem onClick={() => changeLanguage("hi")}>Hindi</MenuItem>
          </Menu>
        </div>
      </div>

      {/* Main Navbar */}
      <Toolbar className="flex justify-between items-center px-4 py-4">
        {/* Logo and Title */}
        <Link href="/" className="flex flex-col">
          <Typography variant="h4" className="text-white font-bold">
            Birds Of Eden
          </Typography>
          <Typography variant="caption" className="text-gray-300 text-sm">
            LICENCE AND TRAINING CENTRE
          </Typography>
        </Link>

        {/* Navigation Links for Desktop */}
        <div className="hidden md:flex space-x-6 text-lg">
          <Link href="/" className="text-white hover:text-yellow-300">
            Home
          </Link>
          <Link href="/course" className="text-white hover:text-yellow-300">
            Course
          </Link>
          <Link href="/blogs" className="text-white hover:text-yellow-300">
            Blog
          </Link>
          <Link href="/about-us" className="text-white hover:text-yellow-300">
            About Us
          </Link>
          <Link href="/contacts" className="text-white hover:text-yellow-300">
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <IconButton edge="start" color="inherit" aria-label="menu" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <MenuIcon />
        </IconButton>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-24 left-0 w-full bg-blue-800 text-white py-4 space-y-4">
            <Link href="/" className="block text-white hover:text-yellow-300 px-4" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <Link href="/course" className="block text-white hover:text-yellow-300 px-4" onClick={() => setMobileMenuOpen(false)}>
              Course
            </Link>
            <Link href="/blogs" className="block text-white hover:text-yellow-300 px-4" onClick={() => setMobileMenuOpen(false)}>
              Blog
            </Link>
            <Link href="/about-us" className="block text-white hover:text-yellow-300 px-4" onClick={() => setMobileMenuOpen(false)}>
              About Us
            </Link>
            <Link href="/contacts" className="block text-white hover:text-yellow-300 px-4" onClick={() => setMobileMenuOpen(false)}>
              Contact Us
            </Link>
          </div>
        )}

        {/* Login and Sign Up Buttons */}
        <div className="hidden md:flex space-x-4">
          <Button variant="outlined" className="border-white text-white hover:bg-white hover:text-blue-800 text-lg rounded-lg px-4">
            Login
          </Button>
          <Button variant="contained" className="bg-emerald-700 text-white text-lg hover:bg-emerald-800 rounded-lg px-4">
            Sign Up
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
