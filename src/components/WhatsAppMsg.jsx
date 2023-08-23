import React from "react";
import { BsWhatsapp } from "react-icons/bs";

const WhatsAppMsg = () => {
  return (
    <div className="bg-orange-600 p-3 animate-pulse ml-auto mr-4 rounded-full sticky w-fit right-0 bottom-10">
      <BsWhatsapp className="text-white text-3xl" />
    </div>
  );
};

export default WhatsAppMsg;
