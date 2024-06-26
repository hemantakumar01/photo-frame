"use client";
import { useAppSelector } from "@/app/redux/store";
import CartItem from "@/components/CartItem";
import { Button } from "@/components/ui/button";
import Script from "next/script";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  const cartReducer = useAppSelector((state) => state.cartSlice);

  const createOrderId = async () => {
    try {
      const response = await fetch("/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: parseFloat("100") * 100,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      return data.orderId;
    } catch (error) {
      console.error("There was a problem with your fetch operation:", error);
    }
  };

  const processPayment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const orderId: string = await createOrderId();
      const options = {
        key: process.env.key_id,
        amount: parseFloat("100") * 100,
        currency: "INR",
        name: "name",
        description: "description",
        order_id: orderId,
        handler: async function (response: any) {
          const data = {
            orderCreationId: orderId,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
          };

          const result = await fetch("/api/verify", {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
          });
          const res = await result.json();
          if (res.isOk) alert("payment succeed");
          else {
            alert(res.message);
          }
        },
        prefill: {
          name: "jhnguifjngfg",
          email: "hemantakumarpaswan@gmail.com",
        },
        theme: {
          color: "#3399cc",
        },
      };
      const paymentObject = new (window as any).Razorpay(options);
      paymentObject.on("payment.failed", function (response: any) {
        alert(response.error.description);
      });
      paymentObject.open();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />
      <div className="rounded p-4 max-w-5xl mx-auto bg-[#f6faff] space-y-4">
        <div className="text-base md:text-xl font-semibold">
          Review Your Order
        </div>
        <form onSubmit={processPayment}>
          <div className="flex flex-col md:flex-row gap-8 p-2 md:p-6">
            <div className="flex-1 border-y-2">
              <div className="flex flex-col gap-2 items-start justify-between">
                {cartReducer?.cart.map((item, idx) => (
                  <CartItem key={idx} {...item} />
                ))}
              </div>
            </div>
            <div className="border-2 p-7 md:w-[340px] space-y-3">
              <h3 className=" font-light">Order Summerey</h3>
              <div className="flex text-sm items-center justify-between">
                <span>subtotal(1 item)*</span>
                <span>₹{cartReducer.total}</span>
              </div>
              <div className="flex items-center text-sm justify-between">
                <span>Shipping</span>
                <span>₹0</span>
              </div>
              <hr />
              <div className="flex  font-bold items-center justify-between">
                <span>Order Total</span>
                <span>₹{cartReducer.total}</span>
              </div>
            </div>
          </div>
          <div className="text-right md:mr-6">
            <Button className="w-full md:w-fit" type="submit">
              Make Payment
            </Button>
          </div>
          <div className="flex items-center justify-center gap-4">
            <img
              src="/svg/vissa.png"
              className="h-[30px] md:h-[40px] "
              alt=""
            />
            <img
              src="/svg/rupay.png"
              className="h-[40px] md:h-[50px] "
              alt=""
            />
            <img
              src="/svg/razorpay.png"
              className="h-[40px] md:h-[50px] "
              alt=""
            />
            <img src="/svg/walet.jpg" className="h-[20px] md:h-[30px]" alt="" />
          </div>
        </form>
      </div>
    </>
  );
};

export default Page;
