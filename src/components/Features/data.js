import React from "react";
import {
  OnlinePayment,
  WishList,
  SccessfulPurchase,
  Receipt,
  OrderConfirmed,
  MobileApp,
} from "./svg";
export const data = [
  {
    title: "shopping online is fun",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero iure
         ut officia aliquam earum reiciendis accusamus accusantium
         temporibus? Vero animi molestiae recusandae doloremque deleniti
         obcaecati cumque mollitia autem distinctio dicta! Facilis dicta
         laboriosam expedita aspernatur numquam beatae est vel temporibus
         incidunt, necessitatibus iusto voluptate totam.`,
    svg: <SccessfulPurchase />,
  },
  {
    title: "secure online payment",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero iure
         ut officia aliquam earum reiciendis accusamus accusantium
         temporibus? Vero animi molestiae recusandae doloremque deleniti
         obcaecati cumque mollitia autem distinctio dicta! Facilis dicta
         laboriosam expedita aspernatur numquam beatae est vel temporibus
         incidunt, necessitatibus iusto voluptate totam.`,
    svg: <OnlinePayment />,
  },
  {
    title: "easily add to wishlist",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero iure
         ut officia aliquam earum reiciendis accusamus accusantium
         temporibus? Vero animi molestiae recusandae doloremque deleniti
         obcaecati cumque mollitia autem distinctio dicta! Facilis dicta
         laboriosam expedita aspernatur numquam beatae est vel temporibus
         incidunt, necessitatibus iusto voluptate totam.`,
    svg: <WishList />,
  },
  {
    title: "100% success rate",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero iure
         ut officia aliquam earum reiciendis accusamus accusantium
         temporibus? Vero animi molestiae recusandae doloremque deleniti
         obcaecati cumque mollitia autem distinctio dicta! Facilis dicta
         laboriosam expedita aspernatur numquam beatae est vel temporibus
         incidunt, necessitatibus iusto voluptate totam.`,
    svg: <OrderConfirmed />,
  },
  {
    title: "get receipt for each sale",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero iure
         ut officia aliquam earum reiciendis accusamus accusantium
         temporibus? Vero animi molestiae recusandae doloremque deleniti
         obcaecati cumque mollitia autem distinctio dicta! Facilis dicta
         laboriosam expedita aspernatur numquam beatae est vel temporibus
         incidunt, necessitatibus iusto voluptate totam.`,
    svg: <Receipt />,
  },
  {
    title: "mobil app comming soon...",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero iure
         ut officia aliquam earum reiciendis accusamus accusantium
         temporibus? Vero animi molestiae recusandae doloremque deleniti
         obcaecati cumque mollitia autem distinctio dicta! Facilis dicta
         laboriosam expedita aspernatur numquam beatae est vel temporibus
         incidunt, necessitatibus iusto voluptate totam.`,
    svg: <MobileApp />,
  },
];
