import {
    Header,
    HeaderContent,
    HeaderButtonsArea,
    StackSection,
    StackCards,
    ProjectsArea,
    ProjectsAreaSocialMediaMessage,
    ProjectsAreaSocialMediaMessageAboutMe,
    ProjectsAreaContent,
    ProjectAreaWrapperColumns,
  } from "../home/style";

import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";


  export const AboutMe = (): JSX.Element => {
    return (
      <main>
        <Header>
          <Container>
            <HeaderContent>
              <Text as="h1" type="heading1" color="grey5">
                Sobre mim {" "}
              </Text>
              
            </HeaderContent>
          </Container>
        </Header>
        <ProjectsArea id="projetos">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessageAboutMe>
              <Text className="aboutMe" as="p" type="body1" color="grey2">
                Me chamo Rinaldo Silvino sou natural de Recife/PE, casado, pai de um menino e dois pets e possuo formação em educação física com especialização e mestrado (2008/2022) pela Universidade de Pernambuco (UPE). Posso dizer que minha conexão com a área de tecnologia começou de fato durante a pandemia, ao ver a necessidade das pessoas e a capacidade desse setor de criar soluções para vários problemas naquele período.
                Desde então, comecei a estudar por conta própria através de pesquisas e cursos gratuítos pela internet. 
                Atualmente, estou perto de concluir o curso de desenvolvimento web FullStack da Kenzie Academy, e assim buscar minha primeira vaga na área de tecnologia pois acredito no potencial para construção de uma carreira rentável, estável e com plenas condições de crescimento profissional e pessoal.
                Principais tecnologias abordadas: 
                Front End - HTML5, CSS3, JavaScript, React JS.
                Back End - Node JS, Postgres, TypeORM, Docker, Python, Django, Git, Github. 
              </Text>
              
            </ProjectsAreaSocialMediaMessageAboutMe>
            
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
    </main>
  );
};