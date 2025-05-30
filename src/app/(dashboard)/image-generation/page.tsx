import Configurations from "@/components/image-generation/Configurations";
import GeneratedItems from "@/components/image-generation/GeneratedItems";
import React from "react";

const ImageGeneration = () => {
  return (
    <section className="container mx-auto flex-1 xl:grid gap-4 xl:grid-cols-3 overflow-hidden">
      <Configurations />
      <div className="col-span-2 p-4 rounded-xl flex items-center justify-center h-fit">
        <GeneratedItems />
      </div>
    </section>
  );
};

export default ImageGeneration;
