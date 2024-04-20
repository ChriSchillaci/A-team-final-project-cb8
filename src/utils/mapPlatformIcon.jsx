import { FaPlaystation, FaXbox, FaWindows, FaApple, FaLinux   } from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { IoLogoAndroid } from "react-icons/io";

export const mapPlatformIcon = platformName => {
    
    if (platformName === "PC") {
      return <FaWindows />;
    }
    
    else if (platformName === "PlayStation") { 
      return <FaPlaystation />;
    }
    
    else if (platformName === "Xbox") {
      return <FaXbox />;
    } 
    
    else if (platformName === "Nintendo") {
      return <SiNintendo />;
    }
    
    else if (platformName === "Apple Macintosh") {
      return <FaApple />;
    }

    else if (platformName === "iOS") {
      return <MdPhoneIphone />;
    }

    else if (platformName === "Linux") {
      return <FaLinux />;
    }

    else if (platformName === "Android") {
      return <IoLogoAndroid />;
    }
    
    else {
      return platformName; 
    }
  };

