import { PageContainer } from "../components/UI";
import { useRef, useState } from "react";
import Content from "../components/StackPageContent";
import SkillTree from "../components/SkillTree";
import useShouldRender from "../hooks/useShouldRender";
import styled from "styled-components";
import { NestedArray } from "../components/SkillTree";

const frontendSkills = [
  ["Basics", ["HTML", "CSS", "Javascript"]],
  [
    "Javascript",
    [
      ["React", ["Hooks", "Redux", "React testing library", "Storybook"]],
      ["Next", ["Server Side Rendering", "Vercel"]],
    ],
  ],
  ["CSS", ["SASS", "Less", "Styled-component", "Tailwind CSS"]],
  ["Tools", ["npm", "Wepback"]],
];

const backendSkills = [
  ["Javascript", ["NodeJS", "Next", "Express"]],
  ["Java", [["Spring", ["Spring Boot", "Spring Data", "Srping Security"]]]],
  ["Golang", ["microservices"]],
  ["Data Store", ["MongoDB", "PostgreSQL", "Redis", "Elasticsearch"]],
];

const devopsSkills = [
  ["Cloud", ["AWS", "IBM Cloud"]],
  ["Continer", ["Docker", "Kubernetes"]],
  ["CI/CD", ["Github Actions"]],
];

const WorksPage = () => {
  const [contentRendered, setContentRendered] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const shouldRenderContent = useShouldRender(ref);

  const handleContentRendered = async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    setContentRendered(true);
  };

  return (
    <StyledPageContainer ref={ref}>
      <ContentContainer>
        {shouldRenderContent && (
          <Content onRenderComplete={handleContentRendered} />
        )}
      </ContentContainer>
      {contentRendered && (
        <>
          <SkillTree
            skills={frontendSkills as NestedArray<string>}
            folder="Frontend"
          />
          <SkillTree
            skills={backendSkills as NestedArray<string>}
            folder="Backend"
          />
          <SkillTree
            skills={devopsSkills as NestedArray<string>}
            folder="Devops"
          />
        </>
      )}
    </StyledPageContainer>
  );
};

export default WorksPage;

const StyledPageContainer = styled(PageContainer)`
  min-height: 211vh;
`;

const ContentContainer = styled.div`
  height: 7rem;
`;
