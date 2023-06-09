"use client";

import { getClientType } from "@/util";
import "@/styles/ui.css";
import Image from "next/image";
import { Modal } from "antd";

export function ContactButtons() {
  const { isH5, isPC, isWX } = getClientType();
  const QQ = "574214190";
  const h5OpenQQHref = `mqqwpa://im/chat?chat_type=wpa&uin=${QQ}&version=1&src_type=web&web_src=oicqzone.com`;
  const pcOpenQQHref = `tencent://message/?uin=${QQ}&Site=jsmyssj.cn&Menu=yes`;
  const wxCardOpen = () => {
    Modal.confirm({
      title: isWX ? "长按图片添加好友开始咨询" : "扫一扫开始咨询",
      maskClosable: true,
      closable: true,
      content: (
        <Image
          src="/qrcode.jpg"
          alt="微信二维码"
          width={500}
          height={500}
          priority
          style={{ marginLeft: 20 }}
        />
      ),
      icon: null,
      footer: null,
    });
  };
  return (
    <div className="flex gap-3 w-full justify-center">
      {!isPC && (
        <a href="tel:13908178322" className="contact-buttons">
          电话咨询
        </a>
      )}
      {!isWX && (
        <a href={isH5 ? h5OpenQQHref : pcOpenQQHref} className="contact-buttons">
          QQ咨询
        </a>
      )}
      <a onClick={wxCardOpen} className="contact-buttons cursor-pointer">
        微信咨询
      </a>
    </div>
  );
}
