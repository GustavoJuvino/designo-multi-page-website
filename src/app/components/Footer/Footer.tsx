import React from 'react'
import CardFooter from "./CardFooter";

interface FooterProps { "card": boolean }

const Footer: React.FC<FooterProps> = ({ card }) => {
  return (
    <footer>
      {card && <CardFooter/> }
      teste
    </footer>
  )
}

export default Footer;