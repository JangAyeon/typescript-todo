import React from 'react';
import TextButton from '../components/TextButton';
import useTaskStore from '../hooks/use-task-store';
import styled from 'styled-components';
import Button from '../components/Button';
import Spacer from '../components/Spacer';
import applyMediaQuery from "../styles/mediaQuery";

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  // flex: 1;
`;

const Task = styled.div`
  display: flex;
  // flex: 1;
  height:50rem;
  width: 50rem;
  justify-content: center;
  align-items: center;
  padding-bottom: 4.5rem;
  font-size: ${(props) => props.theme.font.size.large};
  font-weight: ${(props) => props.theme.font.weight.bold};
  ${applyMediaQuery("mobile")} {
   width: 30rem;
   height: 30rem;
  }
`;

type Props = {};
const FocusScreen: React.FC<Props> = () => {
  const {
    focusedTask: task,
    updateTaskCompletion,
    shuffleFocusedTask,
  } = useTaskStore();
  //const task = tasks.filter((task) => !task.isComplete)[0];
  const handleMarkComplete = () => {
    if (task) {
      updateTaskCompletion(task.id, true);
    }
  };

  return task ? (
    <StyledRoot>
      <Task>{task.label}</Task>
      <Button onClick={handleMarkComplete}>Mark Completed</Button>
      <Spacer height={45} />
      <TextButton onClick={shuffleFocusedTask}>Skip Task</TextButton>
    </StyledRoot>
  ) : (
    <StyledRoot>No More Incomplete Task!!</StyledRoot>
  );
};

export default FocusScreen;
