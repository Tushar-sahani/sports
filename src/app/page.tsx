import Image from "next/image";
import Sports from "@/components/Sports";
import CollectionSpotlite from "@/components/CollectionSpotlite";
export default function Home() {
  return (
    <div className="bg-[#292B32] w-screen h-[1800px]">
      <Sports />
      <CollectionSpotlite />
    </div>
  );
}
