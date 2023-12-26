import { FaTh, FaRegChartBar, FaCommentAlt } from "react-icons/fa";
import { BiImageAdd } from "react-icons/bi";
import React from "react";

const menu = [
  {
    title: "Dashboard",
    icon: <FaTh size={24} />,
    path: "/dashboard",
  },
  {
    title: "Add Product",
    icon: <BiImageAdd size={25} />,
    path: "/add-product",
  },
  {
    title: "Account",
    icon: <FaRegChartBar size={24} />,
    children: [
      {
        title: "Profile",
        path: "/profile",
      },
      {
        title: "Edit Profile",
        path: "/edit-profile",
      },
    ],
  },
  {
    title: "Report Bug",
    icon: <FaCommentAlt size={24} />,
    path: "/contact-us",
  },
];

export default menu;
