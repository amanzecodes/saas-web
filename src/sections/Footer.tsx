import logoImage from "@/assets/images/logo.svg";
import Image from "next/image";
const footerLinks = [
    { href: "#", label: "Contact" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms & Conditions" },
];

export default function Footer() {
    return (
        <section className="py-16">
            <div className="container">
                <div className="flex flex-col md:flex-row md:justify-between items-center gap-6">
                    <div>
                        <Image src={logoImage} alt="Layer Logo" />
                    </div>
                    <div>
                        <nav className="flex gap-6">
                            {footerLinks.map((link, index) => (
                                <a href={link.href} className="text-white/50 text-sm hover:text-white" key={index}>{link.label}</a>
                            ))}
                        </nav>
                    </div>
                </div>
                <div className="mt-8 text-center text-white/50 text-sm">
                    <p>Developed with 💗 by <a href="https://github.com/amanzecodes" target="blank" className="hover:text-white duration-500 transition">Amanze Bruno</a></p>
                </div>
            </div>
        </section>
    );
}
