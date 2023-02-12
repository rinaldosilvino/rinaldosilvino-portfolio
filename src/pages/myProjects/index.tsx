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
                      href={`https://github.com/rinaldosilvino/m6-sprint3-fullstack-cadastro_de_clientes`}
                    >
                    Cadastro de clientes
                    </Button>
  
                  </ProjectsCard>
  
                  <ProjectsCard>
                    <Button
                      type="primary"
                      target="_blank"
                      as="a"
                      href={`https://github.com/rinaldosilvino/m6-sprint2-desafio_backend`}
                    >
                    Leitor de arquivos CNAB
                    </Button>
                  </ProjectsCard>
  
                  <ProjectsCard>
                    <Button
                      type="primary"
                      target="_blank"
                      as="a"
                      href={`https://github.com/rinaldosilvino/m6-sprint1-frontend-calculadora_de_antecipacao`}
                    >
                    Calculadora de antecipação
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