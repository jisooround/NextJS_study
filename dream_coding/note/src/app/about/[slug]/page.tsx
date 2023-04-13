import { notFound } from "next/navigation";
import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

const page = ({ params }: Props) => {
  if (params.slug === "nothing") {
    notFound();
  }
  return <div>{params.slug} page</div>;
};

export default page;
