import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilChart,
  UilSignOutAlt,
  UilPackage,
  UilUsdSquare,
  UilMoneyWithdrawal,
} from "@iconscout/react-unicons";

export const SidebarData = [
  {
    icons: UilEstate,
    heading: "Dashboard",
  },
  {
    icons: UilClipboardAlt,
    heading: "Orders",
  },
  {
    icons: UilUsersAlt,
    heading: "Customers",
  },
  {
    icons: UilPackage,
    heading: "Product",
  },
  {
    icons: UilChart,
    heading: "Analytics",
  },
];

export const CardsData = [
  {
    title: "Sales",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff, 0%,#c484f3 100%)",
      boxShadow: "10px 0px 20px 0px #5d2789",
    },
    bar: 70,
    value1: "2321",
    png: UilUsdSquare,
    series: {
      name: "Sales",
      data: [70, 65, 85, 90, 80, 75, 95],
    },
  },
  {
    title: "Expence",
    color: {
      backGround: "linear-gradient(180deg,#FFAF00, 0%,#FFAF00 100%)",
      boxShadow: "10px 0px 20px 0px #886a10",
    },
    bar: 75,
    value1: "1234",
    png: UilClipboardAlt,
    series: {
      name: "Sales",
      data: [70, 65, 85, 90, 80, 75, 95],
    },
  },
  {
    title: "Profit",
    color: {
      backGround: "linear-gradient(180deg, #ff919d, 0%,#fa6879 100%)",
      boxShadow: "10px 0px 20px 0px #ab2434",
    },
    bar: "80",
    value1: "52432",
    png: UilMoneyWithdrawal,
    series: {
      name: "Sales",
      data: [70, 65, 85, 90, 80, 75, 95],
    },
  },
];

import img1 from "../../../public/img1.png";
import img2 from "../../../public/img2.png";
import img3 from "../../../public/img3.png";

export const UpdatesData = [
  {
    img: img1,
    name: "Andrew Thomas",
    noti: "has ordered Apple smart watch 2500mh battery.",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "James Bond",
    noti: " has received Samsung gadget for charging battery.",
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "Iron Man",
    noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
    time: "2 hours ago",
  },
];
