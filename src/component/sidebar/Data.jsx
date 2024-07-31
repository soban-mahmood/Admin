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
      boxShadow: "10px 0px 20px 0px #e0c6f5"
    },
    barValue:70,
     value:"2567",
     png:UilUsdSquare,
     series:{
        name: "Sales",
        data: [70, 65, 85, 90, 80, 75, 95]
     }
  },
  {
    title: "Expence",
    color: {
      backGround: "linear-gradient(180deg, #dbc978, 0%,#ac9c12 100%)",
      boxShadow: "10px 0px 20px 0px #e0c6f5"
    },
    barValue:75,
     value:"12567",
     png:UilClipboardAlt,
     series:{
        name: "Sales",
        data: [70, 65, 85, 90, 80, 75, 95]
     }
  },
  {
    title: "Profit",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff, 0%,#c484f3 100%)",
      boxShadow: "10px 0px 20px 0px #e0c6f5"
    },
    barValue:90,
     value:"2567",
     png:UilMoneyWithdrawal,
     series:{
        name: "Sales",
        data: [70, 65, 85, 90, 80, 75, 95]
     }
  },
];
