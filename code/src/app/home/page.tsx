import Link from "next/link";
type PageK = typeof import('../page')

export default function Blog() {
  return (
    <div style={{ height: "1000px" }}>
      <span style={{ fontSize: "50px" }}>如你所见</span>
      <Link href="/work">开始工作</Link>
    </div>
  );
}
