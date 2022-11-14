import PhishingOutlinedIcon from "@mui/icons-material/PhishingOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import SupervisorAccountOutlinedIcon from "@mui/icons-material/SupervisorAccountOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import DesktopWindowsSharpIcon from "@mui/icons-material/DesktopWindowsSharp";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";

const data = [
  {
    path: "/invitCode",
    items: "Invite Codes",
    icon: <PhishingOutlinedIcon fontSize="x-small" />,
  },
  {
    path: "/waitingList",
    items: "Waiting Lists",
    icon: <AccessTimeOutlinedIcon fontSize="x-small" />,
  },
  {
    path: "/users",
    items: "Users",
    icon: <SupervisorAccountOutlinedIcon fontSize="x-small" />,
  },
  {
    path: "/platforms",
    items: "Platforms",
    icon: <ShoppingBagOutlinedIcon fontSize="x-small" />,
  },
  {
    path: "/boardingScreen",
    items: "Boarding Screens",
    icon: <DesktopWindowsSharpIcon fontSize="x-small" />,
  },
  {
    path: "/taskTypes",
    items: "Task Types",
    icon: <CheckBoxOutlinedIcon fontSize="x-small" />,
  },
  {
    path: "/retailers",
    items: "Retailers",
    icon: <AddBoxOutlinedIcon fontSize="x-small" />,
  },
];
export default data;
