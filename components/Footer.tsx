"use client"

import Link from "next/link"
import { Facebook, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#f8fbff] border-t border-[#BFEAF3]">

      {/* Soft Ambient Blue */}
      <div className="absolute -top-40 -left-40 w-[350px] h-[350px] bg-[#EAF8FC]/30 rounded-full blur-[120px]" />
      <div className="absolute -bottom-40 -right-40 w-[350px] h-[350px] bg-[#EAF8FC]/30 rounded-full blur-[120px]" />

      {/* Thin Divider */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#0391B6] to-transparent" />

      <div className="relative w-full max-w-[1600px] mx-auto px-5 sm:px-8 md:px-10 lg:px-16 xl:px-20 2xl:px-24 py-10 sm:py-12">

        {/* =====================================================
            TOP SECTION
        ====================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16 xl:gap-24">

          {/* ================= BRAND ================= */}
          <div className="space-y-4">

            <Link
              href="/"
              className="inline-block text-3xl sm:text-4xl font-serif font-semibold text-[#0391B6] tracking-wide"
            >
              Respion
            </Link>

            <p className="text-gray-600 text-sm leading-6 max-w-md">
              Buy CPAP machines, BiPAP machines, oxygen concentrators,
              CPAP masks and sleep apnea equipment online in India with
              fast delivery and trusted respiratory care support.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-5 pt-2">

              <a
                href="https://www.facebook.com/profile.php?id=61576509153350"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Respion Facebook"
                className="group"
              >
                <Facebook className="w-5 h-5 text-gray-500 group-hover:text-[#0391B6] group-hover:scale-110 transition-all duration-300" />
              </a>

              <a
                href="https://youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Respion YouTube"
                className="group"
              >
                <Youtube className="w-5 h-5 text-gray-500 group-hover:text-[#0391B6] group-hover:scale-110 transition-all duration-300" />
              </a>

              <a
                href="https://www.instagram.com/respion_official/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Respion Instagram"
                className="group"
              >
                <Instagram className="w-5 h-5 text-gray-500 group-hover:text-[#0391B6] group-hover:scale-110 transition-all duration-300" />
              </a>

            </div>
          </div>


          {/* ================= QUICK LINKS ================= */}
          <div>

            <h3 className="text-lg font-semibold text-[#0391B6] mb-4 tracking-wide">
              Quick Links
            </h3>

            <ul className="space-y-2 text-sm">

              <li>
                <Link
                  href="/about"
                  className="inline-block px-2 py-1.5 rounded-md text-gray-600 hover:text-[#0391B6] hover:bg-[#EAF8FC] transition-all duration-300"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/products/cpap-machine"
                  className="inline-block px-2 py-1.5 rounded-md text-gray-600 hover:text-[#0391B6] hover:bg-[#EAF8FC] transition-all duration-300"
                >
                  CPAP Machines
                </Link>
              </li>

              <li>
                <Link
                  href="/products/bipap-machine"
                  className="inline-block px-2 py-1.5 rounded-md text-gray-600 hover:text-[#0391B6] hover:bg-[#EAF8FC] transition-all duration-300"
                >
                  BiPAP Machines
                </Link>
              </li>

              <li>
                <Link
                  href="/category/mask"
                  className="inline-block px-2 py-1.5 rounded-md text-gray-600 hover:text-[#0391B6] hover:bg-[#EAF8FC] transition-all duration-300"
                >
                  CPAP Masks
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="inline-block px-2 py-1.5 rounded-md text-gray-600 hover:text-[#0391B6] hover:bg-[#EAF8FC] transition-all duration-300"
                >
                  Contact Us
                </Link>
              </li>

            </ul>
          </div>


          {/* ================= OUR COMPANY ================= */}
          <div>

            <h3 className="text-lg font-semibold text-[#0391B6] mb-4 tracking-wide">
              Our Company
            </h3>

            <ul className="space-y-2 text-sm">

              <li>
                <Link
                  href="/terms"
                  className="inline-block px-2 py-1.5 rounded-md text-gray-600 hover:text-[#0391B6] hover:bg-[#EAF8FC] transition-all duration-300"
                >
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link
                  href="/privacy"
                  className="inline-block px-2 py-1.5 rounded-md text-gray-600 hover:text-[#0391B6] hover:bg-[#EAF8FC] transition-all duration-300"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/shipping"
                  className="inline-block px-2 py-1.5 rounded-md text-gray-600 hover:text-[#0391B6] hover:bg-[#EAF8FC] transition-all duration-300"
                >
                  Shipping Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/return"
                  className="inline-block px-2 py-1.5 rounded-md text-gray-600 hover:text-[#0391B6] hover:bg-[#EAF8FC] transition-all duration-300"
                >
                  Return Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/blog"
                  className="inline-block px-2 py-1.5 rounded-md text-gray-600 hover:text-[#0391B6] hover:bg-[#EAF8FC] transition-all duration-300"
                >
                  Our Blogs
                </Link>
              </li>

            </ul>
          </div>

        </div>


        {/* =====================================================
            CONTACT SECTION
        ====================================================== */}
        <div className="mt-12 lg:mt-14 pt-8 border-t border-[#BFEAF3]/70">

          <h3 className="text-xl sm:text-2xl font-semibold text-[#0391B6] mb-7">
            Contact Us
          </h3>

          {/* Locations */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 xl:gap-x-16 gap-y-8">

            {/* ================= BANGALORE ================= */}
            <div>
              <p className="font-semibold text-black mb-1">
                Bangalore
              </p>

              <a
                href="tel:7077720500"
                className="block text-[#0391B6] font-medium mb-2 hover:underline"
              >
                7077720500
              </a>

              <p className="text-gray-700 leading-6">
                702, 13th Cross Rd, 1st Phase, J. P. Nagar,
                Bengaluru, Karnataka 560078
              </p>
            </div>


            {/* ================= ODISHA ================= */}
            <div>
              <p className="font-semibold text-black mb-1">
                Odisha
              </p>

              <a
                href="tel:9937000606"
                className="block text-[#0391B6] font-medium mb-2 hover:underline"
              >
                9937000606
              </a>

              <p className="text-gray-700 leading-6">
                Plot No 331 A, Saheed Nagar, Bhubaneswar,
                Odisha 751007
              </p>
            </div>


            {/* ================= PATNA ================= */}
            <div>
              <p className="font-semibold text-black mb-1">
                Patna
              </p>

              <a
                href="tel:9937127194"
                className="block text-[#0391B6] font-medium mb-2 hover:underline"
              >
                9937127194
              </a>

              <p className="text-gray-700 leading-6">
                Plot No - MH 750, Sandalpur Rd, Bajrangpuri,
                Patna, Bihar 800006
              </p>
            </div>


            {/* ================= KOLKATA ================= */}
            <div>
              <p className="font-semibold text-black mb-1">
                Kolkata
              </p>

              <a
                href="tel:7077718893"
                className="block text-[#0391B6] font-medium mb-2 hover:underline"
              >
                7077718893
              </a>

              <p className="text-gray-700 leading-6">
                1st Floor, 13/B, Flat No-3, Kalighat,
                Kolkata, West Bengal 700026
              </p>
            </div>


            {/* ================= RANCHI ================= */}
            <div>
              <p className="font-semibold text-black mb-1">
                Ranchi
              </p>

              <a
                href="tel:8598000606"
                className="block text-[#0391B6] font-medium mb-2 hover:underline"
              >
                8598000606
              </a>

              <p className="text-gray-700 leading-6">
                Plot No 114, Old A G Colony, Kadru,
                Ranchi, Jharkhand 834002
              </p>
            </div>


            {/* ================= GUWAHATI ================= */}
            <div>
              <p className="font-semibold text-black mb-1">
                Guwahati
              </p>

              <a
                href="tel:7077718891"
                className="block text-[#0391B6] font-medium mb-2 hover:underline"
              >
                7077718891
              </a>

              <p className="text-gray-700 leading-6">
                House No 5, MA Path, Baninagar,
                Guwahati, Assam 781008
              </p>
            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          BOTTOM BAR
      ====================================================== */}
      <div className="border-t border-[#BFEAF3] py-4 px-5 text-center text-xs sm:text-sm text-gray-500 bg-[#f3f8ff]">
        © 2025 Respion. All Rights Reserved.
      </div>

    </footer>
  )
}