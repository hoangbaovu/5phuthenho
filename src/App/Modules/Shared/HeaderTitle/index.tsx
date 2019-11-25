import React from 'react';
import './HeaderTitle.less';

type Props = {
  title: string,
  path?: string
}

export const HeaderTitle = ({ title, path = "/"}: Props) => {
  return (
    <h2 className="header-title">
      <a href={path}>{title}</a>
    </h2>
  )
}