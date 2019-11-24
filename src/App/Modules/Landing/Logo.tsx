import React from 'react';
import './less/Logo.less';

type Props = {
  title: string
  image: string
}

const Logo = ({title, image}: Props) => {
  return (
    <a href="/" className="Logo" >
      <img src={image} alt={title} />
    </a>
  )
};

export default Logo;