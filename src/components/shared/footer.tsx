import { Facebook, Instagram, MessageCircle } from "lucide-react";
import Container from "./common/container";
import { WhatsAppIcon } from "@/svg/icons";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const navigationColumns = [
    {
      title: "General",
      links: [
        { label: "About", href: "#" },
        { label: "Terms & Conditions", href: "#" },
        { label: "Privacy Policy", href: "#" },
      ],
    },
    {
      title: "Quick Links",
      links: [
        { label: "Inspiration", href: "#" },
        { label: "Contact Us", href: "#" },
        { label: "FAQs", href: "#" },
      ],
    },
    {
      title: "Products",
      links: [
        { label: "Mini Pod", href: "#" },
        { label: "Standard Pod", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: WhatsAppIcon, href: "#", label: "WhatsApp" },
  ];

  return (
    <footer className="bg-black">
      <Container className="pt-12 font-outfit">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row justify-between  gap-[34px] pb-12 border-b">
          {/* Left Section - Logo and Contact */}
          <div className="  ">
            {/* Logo */}
          <Link href="/"  >
            <Image src="/images/logo.png" alt="logo" width={180} height={50} />
          </Link>

            {/* Contact Info */}
            <div className="space-y-6 text-sm my-7">
              <div className="flex flex-wrap gap-5 text-sm">
                <p>01628632140</p>
                <p>sales@paulmark.co.uk</p>
              </div>
              <p className="text-sm leading-relaxed">
                Stubbings Nursery Henley Rd, Maidenhead{" "}
                <br className="hidden md:flex" />
                SL6 6QL Appointment Only
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="  hover:text-primary transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-6 h-6" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right Section - Navigation Columns */}
          <div className="  flex flex-wrap justify-between gap-16 lg:gap-[78px]">
            {navigationColumns.map((column) => (
              <div key={column.title} className="">
                <h3 className="text-primary   text-sm mb-6">
                  {column.title}
                </h3>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="  text-sm hover:text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 text-center h-[74px]">
          <p className="text-[15px]">
            © 2025 FERRANO. All rights reserved. |
          </p>
        </div>
      </Container>
    </footer>
  );
}
