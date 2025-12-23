"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Container from "@/components/shared/common/container";

export default function Navbar() {
  const pathname = usePathname();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    {
      label: "Product & services",
      type: "dropdown",
      items: [
        { label: "Small modal", href: "/products/small-modal" },
        { label: "Large modal", href: "/products/large-modal" },
      ],
    },
    { label: "Project gallery", href: "/gallery" },
    { label: "FAQs", href: "/faqs" },
  ];

  // Close  outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const closeMobileMenu = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <Container className="bg-black">
      <nav className="   py-3 relative">
        <div className="flex items-center justify-between h-25 ">
          {/* Logo */}
          <Link href="/" onClick={closeMobileMenu}>
            <Image src="/images/logo.png" alt="logo" width={180} height={50} />
          </Link>

          {/* Navigation */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) =>
              link.type === "dropdown" ? (
                <div key={link.label} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className={` text-sm uppercase flex items-center gap-1 transition cursor-pointer  ${
                      pathname.includes("small-modal") ||
                      pathname.includes("large-modal")
                        ? "text-white"
                        : "  hover:text-primary"
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        dropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {dropdownOpen && (
                    <div className="absolute left-1/2 uppercase z-40 -translate-x-1/2 mt-3 w-48 bg-black/95   py-4  ">
                      {link.items.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => setDropdownOpen(false)}
                          className="block px-4 text-sm py-2 text-white hover:bg-primary  transition"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href!}
                  className={`text-sm uppercase transition ${
                    pathname === link.href
                      ? "text-primary"
                      : "  hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          <div>
            <Link
              href={"/contact-us"}
              className="hidden lg:flex px-8.75 py-3 bg-primary text-[18px]"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden z-50 text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} color="white" />}
          </button>
        </div>

        {/* mobile bar  */}
        {/*   Overlay Menu */}
        <div
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${
            menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={closeMobileMenu}
        />

        <div
          className={`fixed top-0 right-0 h-full w-96 max-w-full bg-black/50 shadow-2xl z-40 transform transition-transform duration-500 ease-in-out lg:hidden ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Mobile Menu Content */}
          <div className="flex flex-col h-full">
            <div className="flex-1 overflow-y-auto px-8 pt-24 pb-8">
              <div className="space-y-6">
                {navLinks.map((link) =>
                  link.type === "dropdown" ? (
                    <div key={link.label}>
                      <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="flex items-center justify-between w-full text-left uppercase text-base font-medium text-white hover:text-primary transition-colors"
                      >
                        {link.label}
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-300 ${
                            dropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Mobile Dropdown Items */}
                      <div
                        className={`mt-3 ml-4 space-y-2 overflow-hidden transition-all duration-300 ${
                          dropdownOpen
                            ? "max-h-40 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        {link.items.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            onClick={closeMobileMenu}
                            className="block py-2 text-sm   hover:text-primary transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={link.label}
                      href={link.href!}
                      onClick={closeMobileMenu}
                      className={`block uppercase text-base font-medium transition-colors ${
                        pathname === link.href
                          ? "text-primary"
                          : "  hover:text-primary"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )
                )}
              </div>
            </div>

            <div className="px-8 pb-10">
              <Link
                href="/contact-us"
                onClick={closeMobileMenu}
                className="block w-full text-center px-8 py-4 bg-primary text-white text-lg hover:bg-primary/90 transition-all duration-200  "
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </Container>
  );
}
