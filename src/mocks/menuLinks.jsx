import { FaHeart } from "react-icons/fa";
import { IoLibrary, IoHomeSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { MdContactSupport } from "react-icons/md";
import { FaStore } from "react-icons/fa";

const menuLinks = [
  {
    icon: <IoHomeSharp />,
    link: "/",
    text: "Home",
  },
  {
    icon: <FaStore />,
    link: "/store",
    text: "Store",
  },
  {
    icon: <IoLibrary />,
    link: "/library",
    text: "Library",
  },
  {
    icon: <FaHeart />,
    link: "/wishlist",
    text: "Wishlist",
  },
  {
    icon: <FaShoppingCart />,
    link: "/cart",
    text: "Cart",
  },
  {
    icon: <MdContactSupport />,
    link: "/contacts",
    text: "Contacts",
  },
];

export default menuLinks;
