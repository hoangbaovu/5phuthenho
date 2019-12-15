import React from 'react';
import styled from 'styled-components';

type Props = {
  isLoader: boolean,
}

const LoaderContainer = styled.div`
  align-items: center;
  background: #fff;
  content: "";
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  left: 0;
  opacity: 0;
  overflow: hidden;
  position: fixed;
  top: 0;
  transition: all .6s ease-in-out;
  width: 100%;
  z-index: 999999999;

  &.active {
    opacity: 1;
  }

  &.remove {
    visibility: hidden;
  }
`;

const LoaderLogo = styled.div`
  background: url(${require('../../assets/logo_loader.png')}) no-repeat;
  width: 300px;
  height: 300px;
`;

const LoaderDescription = styled.h2`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 1.6em;
`;

const Loader = ({ isLoader }: Props) => {
  return (
    <LoaderContainer className={`${isLoader ? 'active' : 'remove'}`}>
      <LoaderLogo />
      <LoaderDescription>Chờ em 5 phút ...❤!</LoaderDescription>
    </LoaderContainer>
  )
}

export default Loader;