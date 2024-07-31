import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilChart,
  UilSignOutAlt,
  UilPackage,
  UilUsdSquare,
  UilMoneyWithdrawal
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
      boxShadow: "10px 0px 20px 0px #5d2789"
    },
    bar:70,
     value1:"2321",
     png:UilUsdSquare,
     series:{
        name: "Sales",
        data: [70, 65, 85, 90, 80, 75, 95]
     }
  },
  {
    title: "Expence",
    color: {
      backGround: "linear-gradient(180deg, #e3c231, 0%,#f8e111 100%)",
      boxShadow: "10px 0px 20px 0px #886a10"
    },
    bar:75,
    value1:"1234",
     png:UilClipboardAlt,
     series:{
        name: "Sales",
        data: [70, 65, 85, 90, 80, 75, 95]
     }
  },
  {
    title: "Profit",
    color: {
      backGround: "linear-gradient(180deg, #ff919d, 0%,#fa6879 100%)",
      boxShadow: "10px 0px 20px 0px #ab2434"
    },
    bar:'80',
    value1:"52432",
     png:UilMoneyWithdrawal,
     series:{
        name: "Sales",
        data: [70, 65, 85, 90, 80, 75, 95]
     }
  },
];
