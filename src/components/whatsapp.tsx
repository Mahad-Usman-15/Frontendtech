import { FaWhatsapp } from "react-icons/fa";

export default function Whatsapp(){
    return(
        <div className="fixed bottom-4 left-4 z-50">
          <div className="relative group">
            <a
              href="https://wa.me/9233345678"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact us on WhatsApp"
            >
              <FaWhatsapp className="w-12 h-12 p-2  rounded-full shadow-lg fill-green-500 text-green-700 transition-colors duration-200" />
            </a>
          </div>
        </div>
    )
}