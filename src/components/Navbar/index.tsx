import { useState } from "react";
import useMedia from "use-media";
import { userData } from "@/utils/userData";

import {
  Navbar as NavbarWrapper,
  LogoTipo,
  LogoTipoImage,
  LogoTipoText,
  NavbarLinks,
  NavbarMobileArea,
} from "./style";

import { FaGithub, FaLinkedinIn, FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Button } from "@/styles/Buttons";
import { Container } from "@/styles/Global";
import { useNavigate } from "react-router-dom";

export interface MenuButtonOpen {
  open: Boolean;
  setOpen: (value: Boolean) => void;
}

export const NavBar = (): JSX.Element => {
  const isWide = useMedia({ maxWidth: "991px" });
  const navigate = useNavigate();
  document.title = userData.nameUser;

  const [open, setOpen] = useState(false);

  const OpenMenu = () => {
    setOpen(!open);
  };

  const acessHome =() =>{
    navigate("/home")
  }

  return (
    <NavbarWrapper>
      <Container>
        <NavbarMobileArea>
          <LogoTipo  onClick={()=>acessHome()}>
            <LogoTipoImage
              src={`https://github.com/${userData.githubUser}.png`}
              alt={userData.nameUser}
              title={userData.nameUser}
              width={"48px"}
              height={"48px"}
            />
            <LogoTipoText>{userData.nameUser}</LogoTipoText>
          </LogoTipo>
          
          {isWide && (
            <Button
              type="icon"
              onClick={OpenMenu}
              aria-label={!open ? "Abrir Menu" : "Fechar Menu"}
            >
              {!open ? <FaBars /> : <IoClose />}
            </Button>
          )}
        </NavbarMobileArea>
        {isWide ? open && <NavLinks /> : <NavLinks />}
      </Container>
    </NavbarWrapper>
  );
};

export const NavLinks = (): JSX.Element => {
  const navigate = useNavigate();
  const acessProject =() =>{
    navigate("/myprojects")
  }
  const acessAboutMe =() =>{
    navigate("/aboutme")
  }

  return (
    <NavbarLinks>
      <LogoTipo>        
      </LogoTipo>
      
      <Button
          type="secondary"
          as="a"
          target="_blank"
          onClick={()=>acessProject()}
        >
          Projetos
      </Button>
      <Button
          type="secondary"
          as="a"
          target="_blank"
          onClick={()=>acessAboutMe()}
        >
          Sobre mim
      </Button>
      {userData.whatsappNumber && (
        <Button
          type="primary"
          as="a"
          target="_blank"
          href={`https://api.whatsapp.com/send?phone=+55${userData.whatsappNumber}&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20portf%C3%B3lio%20na%20internet%2C%20gostaria%20de%20conhecer%20melhor%20seus%20servi%C3%A7os`}
        >
          Falar no whatsapp
        </Button>
      )}

      {userData.githubUser && (
        <Button
          type="icon"
          target="_blank"
          as="a"
          aria-label="Github"
          href={`https://github.com/${userData.githubUser}`}
        >
          <FaGithub />
        </Button>
      )}

      {userData.linkedinUser && (
        <Button
          type="icon"
          target="_blank"
          as="a"
          aria-label="LinkedIn"
          href={`https://www.linkedin.com/in/${userData.linkedinUser}`}
        >
          <FaLinkedinIn />
        </Button>
      )}
    </NavbarLinks>
  );
};
