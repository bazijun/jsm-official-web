"use client";

import { getClientType } from "@/util";
import "@/styles/ui.css";

export function ContactButtons() {
  const { isH5, isPC, isWX } = getClientType();
  const QQ = "574214190";
  const h5OpenQQHref = `mqqwpa://im/chat?chat_type=wpa&uin=${QQ}&version=1&src_type=web&web_src=oicqzone.com`;
  const pcOpenQQHref = `tencent://message/?uin=${QQ}&Site=jsmyssj.cn&Menu=yes`;
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
      <a href="https://u.wechat.com/MOqWAnvERoMo8TtacOMTgo8" className="contact-buttons">微信咨询</a>
    </div>
  );
}
