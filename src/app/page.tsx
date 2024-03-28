import Image from "next/image";
import Sports from "@/components/Sports";
import CollectionSpotlite from "@/components/CollectionSpotlite";
export default function Home() {
  return (
    <div className="bg-[#292B32] w-full">
      <Sports />
      <CollectionSpotlite />
    </div>
  );
}
