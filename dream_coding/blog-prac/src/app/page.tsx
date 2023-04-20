import CarouselPosts from "@/components/CarouselPosts";
import FeaturedPosts from "@/components/FeaturedPosts";
import Image from "next/image";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      {/* @ts-expect-error ServerComponent */}
      <FeaturedPosts />
      {/* @ts-expect-error ServerComponent */}
      <CarouselPosts />
    </>
  );
}
