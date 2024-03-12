import useShouldRender from "../../hooks/useShouldRender";
import { useRef } from "react";
import WorkPageContent from "../../components/WorkPageContent";
import styled from "styled-components";
import { PageContainer } from "../../components/UI";

export interface Props {
  words: string[];
  image: string;
  reverse?: boolean;
}

const WorkPage: React.FC<Props> = ({
  words,
  image,
  reverse = false,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const shouldRenderContent = useShouldRender(ref);

  return (
    <WorkPageContainer ref={ref}>
      {shouldRenderContent && (
        <WorkPageContent words={words} image={image} reverse={reverse} />
      )}
    </WorkPageContainer>
  );
};

export default WorkPage;

const WorkPageContainer = styled(PageContainer)`
  min-height: 0;
  height: 65vh;

  &:first-of-type {
    min-height: 0;
    height: 65vh;
  }
`;
