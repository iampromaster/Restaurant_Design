import styled from 'styled-components';
import { Link} from 'react-router-dom';
import {FaTImes} from 'react-icons/fa';

export const SidebarContainer = styled.aside`
  position:fixed;
  z-index:999;
  width:350px;
  height:100%;
  background: #ffc500;
  display:grid;
  align-items:center;
  top:0;
  transition:0.3s ease-in-out;
  right: ${({ isOpen }) => (isOpen ? '0' : '-100px')};

  @media screen and (max-width: 400px){
    width:100%;
  }
`;

export const CloseIcon = styled(FaTimes)`
  color:#000;
`
export const Icon = styled.div`
  position:absolute;
  top:1.2rem;
  right:1.5rem;
  background:transparent;
  border:transparent;
  font-size:2rem;
  cursor:pointer;
  outline:none;
`

export const SidebarMenu = styled.div`
  display:grid;
  grid-template-columns:1fr;
  grid-template-rows:repeat(3,80px);
`