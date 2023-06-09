import { E } from "@/ui/ContactButtons";

type paramsType = {
  params: Record<string, string>;
  searchParams: Record<string, string>;
};
export default function PostId(params: paramsType) {
  return (
    <div style={{ marginLeft: 30 }}>
      {" "}
      params: {JSON.stringify(params)} <E />
    </div>
  );
}
