import React from 'react';
import Image from "next/image";

const LeafBackground= () => {
  return (
    <Image 
      width={1006}
      height={594}
      alt="leaf-background"
      src="/assets/home/bg-pattern-leaf.svg"
      className="max-lg:hidden"    
    />
  )
}

export default LeafBackground;