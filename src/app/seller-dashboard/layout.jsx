"use client";
import React, { useEffect, useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import {
  AiOutlineBorderInner,
  AiOutlineDashboard,
  AiOutlineUnorderedList,
} from "react-icons/ai";
// import "./MainLayOut.css";
import { RiCouponLine } from "react-icons/ri";
// import "react-toastify/dist/ReactToastify.css";

import { FaClipboardList } from "react-icons/fa";
import { Layout, Menu } from "antd";

import { useSelector } from "react-redux";

import {
  MdOutlineLocalOffer,
  MdOutlineProductionQuantityLimits,
} from "react-icons/md";
import { FiShoppingBag } from "react-icons/fi";
import { HiOutlineReceiptRefund } from "react-icons/hi";
import { GrAdd } from "react-icons/gr";
import {
  BsChatLeftText,
  BsFillChatRightDotsFill,
  BsFillChatTextFill,
} from "react-icons/bs";
import { IoNotifications } from "react-icons/io5";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
const { Sider, Content } = Layout;

const MainLayout = ({ children }) => {
  //   const { seller } = useSelector((state) => state.seller);
  const [collapsed, setCollapsed] = useState(true);
  const colorBgContainer = "#D61355";

  const router = useRouter();

  const pathname = location.pathname;
  const [activeKey, setActiveKey] = useState("");
  const menuItems = [
    {
      key: "/seller-dashboard",
      icon: <AiOutlineDashboard className="fs-4" />,
      label: "Dashboard",
    },
    {
      key: "orders",
      icon: <AiOutlineUnorderedList className="fs-4" />,
      label: "Orders",
      children: [
        {
          key: "/seller-dashboard/all-orders",
          icon: <AiOutlineUnorderedList className="fs-4" />,
          label: "All Orders",
        },
        {
          key: "/seller-dashboard/order-refunds",
          icon: <HiOutlineReceiptRefund className="fs-4" />,
          label: "Refund Orders",
        },
      ],
    },

    {
      key: "Products",
      icon: <MdOutlineProductionQuantityLimits className="fs-4" />,
      label: "Products",
      children: [
        {
          key: "/seller-dashboard/all-Products",
          icon: <MdOutlineProductionQuantityLimits className="fs-4" />,
          label: "All Products",
        },
        {
          key: "/seller-dashboard/add-Product",
          icon: <AiOutlineBorderInner className="fs-4" />,
          label: "Add Product",
        },
      ],
    },
    {
      key: "Events",
      icon: <MdOutlineLocalOffer className="fs-4" />,
      label: "Events",
      children: [
        {
          key: "/seller-dashboard/all-Events",
          icon: <MdOutlineLocalOffer className="fs-4" />,
          label: "All Events",
        },
        {
          key: "/seller-dashboard/add-Event",
          icon: <GrAdd className="fs-4" />,
          label: "Add Event",
        },
      ],
    },
    {
      key: "Chat",
      icon: <BsChatLeftText className="fs-4" />,
      label: "Chat",
      children: [
        {
          key: "/seller-dashboard/admin-Chat",
          icon: <BsFillChatRightDotsFill className="fs-4" />,
          label: "Admin Chat",
        },
        {
          key: "/seller-dashboard/user-Chat",
          icon: <BsFillChatTextFill className="fs-4" />,
          label: "User Chat",
        },
      ],
    },
    {
      key: "/seller-dashboard/coupon",
      icon: <RiCouponLine className="fs-4" />,
      label: "Coupons",
    },
    {
      key: "/seller-dashboard/withdraw-money",
      icon: <FaClipboardList className="fs-4" />,
      label: "Withdraw Money",
    },
    {
      key: "/seller-dashboard/settings",
      icon: <FaClipboardList className="fs-4" />,
      label: "Setting",
    },
  ];
  useEffect(() => {
    const localStorageActiveKey = localStorage.getItem("activeKey");
    if (localStorageActiveKey) {
      setActiveKey(localStorageActiveKey);
    } else {
      localStorage.removeItem("activeKey");
    }
  }, []);

  return (
    <Layout onContextMenu={(e) => e.preventDefault()}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="h-screen"
      >
        <div className="logo  bg-[#D61355] py-[5px] border-r-2">
          <Link href="/">
            <h2 className="text-white fs-5 text-center py-3 mb-0">
              {collapsed ? (
                <span className="sm-logo text-[19px]">R D</span>
              ) : (
                <span className="lg-logo text-[19px]">Raj-Dhola</span>
              )}
            </h2>
          </Link>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[pathname]}
          selectedKeys={[activeKey]}
          onClick={({ key }) => {
            router.push(key);
            setActiveKey(key);
          }}
          onmouseenter={(event) => {
            setActiveKey(event.key);
          }}
          items={menuItems.map((item) => ({
            ...item,
            key: item.key,
            onMouseEnter: () => {
              item.className = "ant-menu-item-selected";
            },
            onMouseLeave: () => {
              item.className = "";
            },
          }))}
        />
      </Sider>
      <Layout className="site-layout">
        <Layout.Header
          className="flex justify-between items-center  px-8"
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger pl-4 text-[26px] text-white cursor-pointer ",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          <div className="pr-8 flex items-center">
            <Link
              href="/seller_DashBoard/coupon"
              className="800px:block hidden"
            >
              <RiCouponLine
                color="#FFFFFF"
                size={30}
                className="mx-5 cursor-pointer"
              />
            </Link>
            <Link
              href="/seller_DashBoard/all-Events"
              className="800px:block hidden"
            >
              <MdOutlineLocalOffer
                color="#FFFFFF"
                size={30}
                className="mx-5 cursor-pointer"
              />
            </Link>
            <Link
              href="/seller_DashBoard/all-Products"
              className="800px:block hidden"
            >
              <FiShoppingBag
                color="#FFFFFF"
                size={30}
                className="mx-5 cursor-pointer"
              />
            </Link>
            <Link
              href="/seller_DashBoard/all-orders"
              className="800px:block hidden"
            >
              <AiOutlineUnorderedList
                color="#FFFFFF"
                size={30}
                className="mx-5 cursor-pointer"
              />
            </Link>
            <Link href="#" className="">
              <IoNotifications
                color="#FFFFFF"
                size={30}
                className="mx-5 cursor-pointer"
              />
            </Link>
            <Link href={`/shop`}>
              <Image
                src={``}
                alt=""
                className="w-[40px] h-[40px] rounded-full object-cover"
              />
            </Link>
          </div>
        </Layout.Header>
        <Content
          style={{
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
