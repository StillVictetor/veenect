import React from "react";
import { Bot } from "lucide-react";
import "../styles/whatsapp-chat.css";

const phone = "2347035731997"; 
const message = "Hello VEENECT! I would like to inquire about your services.";
const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
  message
)}`;

const Chat = () => (
  <a
    href={whatsappUrl}
    className="whatsapp-chat-float"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
  >
    <Bot size={32} />
  </a>
);

export default Chat;
