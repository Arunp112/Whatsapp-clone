import { MdCall } from "react-icons/md";
import { LuMessageSquareMore } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { FaBoxArchive } from "react-icons/fa6";
import { MdDonutLarge } from "react-icons/md";

export const sidebarIconPrimary = [
  {
    id: 1,
    icon: LuMessageSquareMore,
  },
  {
    id: 2,
    icon: MdCall,
  },
  {
    id: 3,
    icon: MdDonutLarge,
  },
] || [];

export const sidebarIconSecondary = [
  {
    id: 1,
    icon: FaRegStar,
  },
  {
    id: 2,
    icon: FaBoxArchive,
  },
  {
    id: 3,
    icon: IoSettingsOutline,
  },
] || [];
