
import Image from "next/image";
import mobile_icon from "../../public/social-media-marketing-950hCqIEYw.png"
import insta_icon from "../../public/skill-icons_instagram.svg"
import WhatsApp_icon from "../../public/logos_whatsapp-icon.svg"
// components/SocialConnections.js
export default function SocialConnections() {
  return (
    <div className="max-w-2xl flex flex-col items-center gap-6 mx-auto py-12 lg:py-4 px-4">
      <Image
        src={mobile_icon}
        alt="Mobile icon image"
        loading="lazy"
        width={300}
        height={100}
        style={{ width: "auto", height: "auto" }}
      />

      <div className="space-y-4">
        <button className="w-auto flex items-center justify-center space-x-3 py-2.5 px-20  sm:px-[100px] border border-blue-500 rounded-lg hover:bg-gray-50">
          <Image
            src={insta_icon}
            alt="Insta icon image"
            loading="lazy"
            width={20}
            height={20}
            style={{ width: "auto", height: "auto" }}
          />
          <span>Connect Instagram</span>
        </button>
        <button className="w-auto flex items-center justify-center space-x-3 py-2 px-20 sm:px-24 border border-blue-500 rounded-lg hover:bg-gray-50">
          <Image
            src={WhatsApp_icon}
            alt="Insta icon image"
            loading="lazy"
            width={25}
            height={25}
            style={{ width: "auto", height: "auto" }}
          />
          <span>Connect WhatsApp</span>
        </button>
      </div>
    </div>
  );
}
