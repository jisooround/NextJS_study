import { getNonFeaturedPosts } from "@/service/posts";
import React from "react";
import MulitCarousel from "./MulitCarousel";
import PostCard from "./PostCard";

type Props = {};

const CarouselPosts = async (props: Props) => {
  const posts = await getNonFeaturedPosts();

  return (
    <section className="my-4">
      <h2 className="text-2xl font-bold my-2">You May Like</h2>
      <MulitCarousel>
        {posts.map((post) => (
          <PostCard key={post.path} post={post} />
        ))}
      </MulitCarousel>
    </section>
  );
};

export default CarouselPosts;
