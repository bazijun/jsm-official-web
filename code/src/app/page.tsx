import { ContactButtons } from "@/ui/ContactButtons";
import Image from "next/image";
export default function Home() {
  return (
    <main className="min-h-screen">
      <nav className="w-full bg-white md:pt-0 px-6 shadow-lg relative z-20 border-b border-gray-400">
        <div className="container mx-auto md:flex justify-between items-center text-sm md:text-md md:justify-start">
          <header className="w-full text-center md:p-0">
            <a className="py-3 w-full text-lg text-center md:text-left md:w-auto text-gray-600 no-underline flex justify-center md:justify-start items-center">
              成都金双茂印刷设计
            </a>
          </header>
          <div className="w-full md:w-1/2 text-center md:text-left py-4 flex flex-wrap justify-center items-stretch md:justify-end md:items-start">
            <a
              href="#"
              className="px-2 md:pl-0 md:mr-3 md:pr-3 text-gray-700 no-underline md:border-r border-gray-400"
            >
              首页
            </a>
            <a
              href="#"
              className="px-2 md:pl-0 md:mr-3 md:pr-3 text-gray-700 no-underline md:border-r border-gray-400"
            >
              资讯
            </a>
            <a
              href="#"
              className="px-2 md:pl-0 md:mr-3 md:pr-3 text-gray-700 no-underline md:border-r border-gray-400"
            >
              关于
            </a>
          </div>
        </div>
      </nav>
      <div
        className="w-full py-24 px-6 bg-cover bg-no-repeat bg-center relative z-10"
        style={{
          backgroundImage: `url('https://cdn.bazijun.top/img/6458c2fd4142bf31c11d8792.png')`,
        }}
      >
        <div className="container max-w-4xl mx-auto text-center">
          <h1 className="text-3xl lg:text-7xl mb-4 font-bold uppercase italic text-white">
            成都老字号印刷设计
          </h1>
          <p className="text-lg lg:text-3xl md:text-lg text-center font-bold uppercase italic text-white ">
            还有你想要的一切
          </p>
          <ContactButtons />
        </div>
      </div>
      <div className="h-[60vh]" />
      <div className="w-full px-6 py-12 text-left bg-gray-300 text-gray-700 leading-normal">
        <div className="container max-w-4xl mx-auto flex justify-center flex-wrap md:flex-no-wrap">
          <div className="w-full md:w-1-3 text-center">
            <h3 className="text-3xl mb-8 text-black leading-tight">敬请期待！</h3>
          </div>
        </div>
      </div>
      <footer className="w-full bg-white px-6 border-t">
        <div className="container mx-auto max-w-4xl py-3 flex flex-wrap md:flex-no-wrap justify-between items-center text-sm">
          <div className="flex gap-1 items-center">
            <Image
              src="https://cdn.bazijun.top/img/police_beian.png"
              alt="警徽"
              className="dark:invert"
              width={16}
              height={16}
              priority
            />
            <a href="http://beian.miit.gov.cn/" className="hover:underline">
              蜀ICP备2023012930号
            </a>
          </div>
          <div className="md:p-0 text-center md:text-right text-xs">
            <a
              href="tel:13908178322"
              className="text-black no-underline hover:underline ml-4"
            >
              联系我们：13908178322
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
