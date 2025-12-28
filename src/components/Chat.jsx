import React, { useState } from "react";
import { Bot, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import "../styles/whatsapp-chat.css";

const phone = "2347035731997";
const message = "Hello VEENECT! I would like to inquire about your services.";
const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
  message
)}`;

export default function Chat() {
  // keep the message visible until the user explicitly closes it with X
  const [visible, setVisible] = useState(true);

  function dismissOnce() {
    setVisible(false);
  }

  return (
    <>
      {/* wrapper holds floating button and bubble */}
      <div className="whatsapp-chat-wrapper" aria-live="polite">
        {/* message bubble (desktop) or banner (mobile) */}
        {visible && (
          <div className="whatsapp-chat-message" role="status">
            <button
              className="chat-close-btn"
              aria-label="Close chat message"
              onClick={dismissOnce}
            >
              <X size={14} />
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="chat-message-link"
            >
              <strong>Hi! 👋</strong>
              <span className="chat-sub">Need help? Tap to chat.</span>
            </a>
          </div>
        )}

        <a
          href={whatsappUrl}
          className="whatsapp-chat-float"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp size={28} />
        </a>
      </div>
    </>
  );
}
