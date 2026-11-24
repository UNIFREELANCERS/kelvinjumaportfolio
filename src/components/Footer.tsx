import React from "react";
import { ArrowUpRight, Linkedin } from "lucide-react";
import CustomeText from "./ui/CustomeText";
import Link from "next/link";
import EmailContactForm from "./ui/EmailContactForm";

const Footer = () => {
    const navigation: { label: string; href: string; external?: boolean }[] = [
        { label: "Home", href: "/#home" },
        { label: "About", href: "/#about" },
        { label: "Service", href: "/#service" },
        { label: "Resume", href: "/resume.pdf", external: true },
        { label: "Certifications", href: "/#certifications" },
        { label: "Project", href: "/#project" },
        { label: "Contact", href: "/#contact" },
    ];
    const iconsAndUrl = [
        { icon: Linkedin, url: "https://www.linkedin.com/in/kelvin-j-867488383/" },
    ];

    const contact = [
        { label: "+254 746 917 160", href: "tel:+254746917160" },
        { label: "juma@unifreelancersafrica.org", href: "mailto:juma@unifreelancersafrica.org" },
        { label: "Nairobi, Kenya", href: "https://maps.google.com/?q=Nairobi%2C%20Kenya" },
    ];

    return (
        <footer className="w-full min-h-[400px] lg:h-[685px] px-4 sm:px-6 lg:px-[71px] py-[30px] sm:py-[35px] lg:py-[40px] flex flex-col bg-[#272727] rounded-t-2xl sm:rounded-t-3xl text-white justify-between">

            {/* Top Section */}
            <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-6">
                <h1 className="font-semibold leading-tight text-[32px] sm:text-[40px] lg:text-[48px] xl:text-[64px] text-[#FCFCFD] text-center lg:text-left">
                    Let&apos;s Connect There
                </h1>
                <Link href="mailto:juma@unifreelancersafrica.org" className="group flex items-center justify-center gap-2 w-full sm:w-[180px] lg:w-[202px] h-[50px] sm:h-[56px] lg:h-[62px] px-4 sm:px-5 py-2 sm:py-2.5 text-white text-base sm:text-lg font-semibold rounded-full bg-[#FD853A] cursor-pointer hover:bg-[#e46e24] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                    Hire Kelvin
                    <ArrowUpRight
                        size={24}
                        className="sm:w-7 sm:h-7 lg:w-8 lg:h-8 transition-transform duration-300 group-hover:rotate-45"
                    />
                </Link>
            </div>

            <div className="border border-[#475467] w-full mt-6 md:mt-0"></div>

            {/* Navigation Links */}
            <div className="flex flex-col lg:flex-row justify-between w-full max-w-[1298px] h-auto lg:h-[239px] gap-8 lg:gap-0 mt-8 md:mt-0">

                <div className="w-full lg:w-[635px] h-full flex flex-col items-start justify-start gap-6 lg:gap-10">
                    <Link href="/#home" aria-label="Kelvin home" className="flex gap-3 sm:gap-4 items-center flex-shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                        <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-[#FD853A] rounded-full flex items-center justify-center mb-1">
                            <svg width="20" height="20" className="sm:w-6 sm:h-6 lg:w-6 lg:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <text x="4" y="18" fontSize="12" className="sm:text-sm lg:text-base" fontWeight="bold" fill="white">KJ</text>
                            </svg>
                        </div>
                        <span className="font-bold text-base sm:text-lg tracking-wide">KELVIN</span>
                    </Link>
                    <p className="w-full h-auto lg:h-[61px] text-[16px] sm:text-[18px] lg:text-[20px] text-[#FCFCFD]">Kelvin Oluoch Juma is a Nairobi-based full-stack web developer, data engineer, AI evaluator, professional AI practitioner, freelance IT professional, and Founder and Team Lead of UNI Freelancers Africa.</p>
                    <div className="flex gap-2 sm:gap-2.5">
                        {iconsAndUrl.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <Link
                                    key={idx}
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Kelvin's LinkedIn profile"
                                    className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10  rounded-full flex hover:scale-110 transition-transform bg-[#333333] hover:bg-[#444444] items-center justify-center"
                                >
                                    <Icon size={16} className="sm:w-5 sm:h-5 lg:w-5 lg:h-5 text-[#FD853A]" />
                                </Link>
                            );
                        })}
                    </div>
                </div>

                <div className="flex flex-col gap-5 lg:gap-7">
                    <CustomeText title="Navigation" className="text-[18px] sm:text-[19px] lg:text-[20px] font-semibold text-[#FD853A]" />
                    <div className="flex flex-col gap-3 lg:gap-5">
                        {navigation.map((item) => (
                            <Link href={item.href} key={item.label} target={item.external ? "_blank" : undefined} rel={item.external ? "noopener noreferrer" : undefined} className="text-[#FCFCFD] text-[14px] sm:text-[15px] lg:text-[16px] hover:text-[#FD853A] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-5 lg:gap-7">
                    <CustomeText title="Contact" className="text-[18px] sm:text-[19px] lg:text-[20px] font-semibold text-[#FD853A]" />
                    <div className="flex flex-col gap-3 lg:gap-5">
                        {contact.map((item) => (
                            <Link key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined} className="text-[#FCFCFD] text-[14px] sm:text-[15px] lg:text-[16px] hover:text-[#FD853A] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-5 lg:gap-7 w-full lg:w-[304px] items-start">
                    <CustomeText
                        title="Get the latest information"
                        className="text-[18px] sm:text-[19px] lg:text-[20px] font-semibold text-[#FD853A]"
                    />
                    <EmailContactForm variant="updates" />
                </div>
            </div>

            <div className="border border-[#475467] w-full mt-8 lg:mt-16"></div>

            <div className="flex flex-col sm:flex-row w-full max-w-[1298px] h-auto lg:h-[26px] items-start justify-between gap-4 sm:gap-0 mt-6 md:mt-0">
                <p className="w-full sm:w-[415px] h-auto lg:h-[26px] text-[16px] sm:text-[18px] lg:text-[20px] text-white text-center sm:text-left">Copyright© Kelvin Oluoch Juma. All Rights Reserved.</p>
                <Link href="/privacy" className="w-full sm:w-fit h-auto lg:h-[26px] text-[16px] sm:text-[18px] lg:text-[20px] text-white text-center sm:text-right hover:text-[#FD853A] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Privacy Policy</Link>
            </div>
        </footer>
    );
};

export default Footer;
