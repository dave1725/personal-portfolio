import Image from "next/image";
import Background from "./background/page";
import Navbar from "./navbar/page";

export default function Home() {
  return (
    <>
      <Background />
      <Navbar />
    </>
  );
}
