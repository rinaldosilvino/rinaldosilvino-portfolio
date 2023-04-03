import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  StackSection,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectsAreaContent,
  ProjectAreaWrapperColumns,
} from "../home/style";
import { useNavigate } from "react-router-dom";
import { ProjectStack, ProjectStackTech } from "@/components/Project/style";
import { ProjetcsContainer, ProjectsCard } from "./style";
import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";


export const MyProjects = (): JSX.Element => {

  

    return (
      <main>
        <Header>
          <Container>
            <HeaderContent>
              <Text as="h1" type="heading1" color="grey5">
                Meus projetos{" "}
              </Text>
            </HeaderContent>
          </Container>
        </Header>
        <ProjectsArea id="projetos">
          <Container>
            <ProjectAreaWrapperColumns>
  
              <ProjectsAreaSocialMediaMessage>
                <ProjetcsContainer>
  
                <ProjectsCard>
                    <Button
                      type="primary"
                      target="_blank"
                      as="a"
                      href={`https://react-entrega-s1-hamburgueria-da-kenzie-rinaldosilvino.vercel.app/`}
                    >
                    Hamburgueria Kenzie_Burguer
                    </Button>
                  </ProjectsCard>
  
                  <ProjectsCard>
                    <Button
                      type="primary"
                      target="_blank"
                      as="a"
                      href={`https://react-entrega-s2-formulario-de-cadastro-rinaldosilvino.vercel.app/`}
                    >
                    Formulario_de_Cadastro-Kenzie_Hub
                    </Button>
                  </ProjectsCard>

                  <ProjectsCard>
                    <Button
                      type="primary"
                      target="_blank"
                      as="a"
                      href={`https://react-entrega-s1-nu-kenzie-rinaldosilvino.vercel.app/`}
                    >
                    nu_kenzie_bank
                    </Button>
                  </ProjectsCard>

                </ProjetcsContainer>
              </ProjectsAreaSocialMediaMessage>
              
            </ProjectAreaWrapperColumns>
          </Container>
        </ProjectsArea>
      </main>
    );
  };