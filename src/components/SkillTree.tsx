import React from "react";
import styled from "styled-components";

export type NestedArray<T> = [T, NestedArray<T>[] | T[]];

interface TreeProps {
  folder: string;
  skills: NestedArray<string>;
}

interface SubtreeProps {
  subFolder: string;
  nodes: NestedArray<string>;
}

const SubSkillTree: React.FC<SubtreeProps> = ({
  subFolder,
  nodes,
}: SubtreeProps) => {
  const nestedFolder = Array.isArray(nodes[0]);

  return (
    <StyledListItem>
      {subFolder}
      <NestedStyledList>
        {!nestedFolder &&
          nodes.map((node) => (
            <StyledListItem key={`${subFolder}-${node}`}>{node}</StyledListItem>
          ))}
        {nestedFolder &&
          nodes.map((folderNode) => {
            const folderName = folderNode[0] as string;
            const folderNodes = folderNode[1] as NestedArray<string>;
            return (
              <SubSkillTree
                subFolder={folderName}
                nodes={folderNodes}
                key={folderName}
              />
            );
          })}
      </NestedStyledList>
    </StyledListItem>
  );
};

const SkillTree: React.FC<TreeProps> = ({ skills, folder }: TreeProps) => {
  return (
    <StyledList>
      <HeaderListItem>{folder}</HeaderListItem>
      {skills.map((element) => {
        const subFolder = element[0] as string;
        const nodes = element[1] as NestedArray<string>;
        return (
          <SubSkillTree subFolder={subFolder} nodes={nodes} key={subFolder} />
        );
      })}
    </StyledList>
  );
};

export default SkillTree;

const StyledList = styled.ul`
  text-align: left;
  list-style-position: inside;
  margin-bottom: 5vw;
  min-height: 50%;
`;

const NestedStyledList = styled.ul`
  margin: 0;
`;

const HeaderListItem = styled.li`
  list-style-type: none;
`;

const StyledListItem = styled.li`
  list-style-type: "├───";

  &:last-of-type {
    list-style-type: "└───";
  }

  & ul li {
    list-style-type: "│\\00a0\\00a0\\00a0├───";
  }

  & ul li:last-of-type {
    list-style-type: "│\\00a0\\00a0\\00a0└───";
  }

  &:last-of-type ul li:last-of-type {
    list-style-type: "\\00a0\\00a0\\00a0\\00a0└───";
  }

  &:last-of-type ul li {
    list-style-type: "\\00a0\\00a0\\00a0\\00a0├───";
  }

  & ul li ul li {
    list-style-type: "│\\00a0\\00a0\\00a0│\\00a0\\00a0\\00a0├───";
  }

  & ul li ul li:last-of-type {
    list-style-type: "│\\00a0\\00a0\\00a0│\\00a0\\00a0\\00a0└───";
  }

  & ul li:last-of-type ul li:last-of-type {
    list-style-type: "│\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0└───";
  }

  & ul li:last-of-type ul li {
    list-style-type: "│\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0├───";
  }

  &:last-of-type ul li:last-of-type ul li {
    list-style-type: "\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0├───";
  }

  &:last-of-type ul li:last-of-type ul li:last-of-type {
    list-style-type: "\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0└───";
  }
`;
