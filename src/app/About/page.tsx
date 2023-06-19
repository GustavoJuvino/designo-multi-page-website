import React from 'react'
import ContainerAbout from "../components/About/Container-About"

const page = () => {
  return (
    <div className="mt-16">
      <ContainerAbout 
        type={1}
        title="About Us"
        text={`
          Founded in 2010, we are a creative agency that produces lasting
          results for our clients. We’ve partnered with many startups,
          corporations, and nonprofits alike to craft designs that make real
          impact. We’re always looking forward to creating brands, products,
          and digital experiences that connect with our clients’ audiences.
        `}
        src="image-about-hero"
      />
    </div>
  )
}

export default page