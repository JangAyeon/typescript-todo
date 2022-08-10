import React, { ChangeEvent, useState } from 'react';
import useTaskStore from '../hooks/use-task-store';
import { Task } from '../types';
import styled from 'styled-components';
import TextButton from '../components/TextButton';
import Spacer from '../components/Spacer';
import DeleteIcon from '../assets/deleteIcon';
import IconButton from '../components/IconButton';
import CheckBox from '../components/CheckBox';
import applyMediaQuery from "../styles/mediaQuery";

const StyledRoot = styled.div`
  display: flex;

  flex: 0 1 46rem;
  flex-direction: column;
  align-items: center;
  //align-items: stretch;

`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  width: 65rem;
  background-color: ${(props) => props.theme.palette.common.grey};
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 4.5rem 2.4rem;
  ${applyMediaQuery("mobile")} {
   width: 30rem;
  }
`;

const ListItem = styled.label`
  display: flex;
  align-items: center;
  font-size: ${(props) => props.theme.font.size.regular};
  padding: 0.4rem 0rem;
  //margin-bottom: 0.8rem;
  button {
    svg {
      fill: ${(props) => props.theme.palette.common.yellow};
    }
  }
`;

const DeleteButton = styled(IconButton)`
  visibility: hidden;
  ${ListItem}:hover & {
    visibility: visible;
    cursor: pointer;
  }
`;

const Input = styled.input`
  padding: 2rem 2.4rem;
  background-color: ${(props) => props.theme.palette.common.black};
  border: none;
  color: ${(props) => props.theme.palette.primary.grey};
  border-radius: ${(props) => props.theme.borderRadius};
`;

type Props = {};
const ListScreen: React.FC<Props> = () => {
  const { addTask, tasks, setTasks, updateTaskCompletion } = useTaskStore();
  //const value = useContext(TaskContext);
  const [newTaskLabel, setNewTaskLabel] = useState('');

  const handleNewTaskLabel = (event: ChangeEvent<HTMLInputElement>) => {
    //console.log('handleNewTaskLabel event.target.value', event.target.value);
    setNewTaskLabel(event.target.value);
  };

  const submitNewTaskLabel = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //console.log('submitNewTaskLabel tasks: ', tasks);
    if (newTaskLabel !== '') {
      addTask({ label: newTaskLabel });
      setNewTaskLabel('');
    } else {
      alert('Enter Todo');
    }
  };

  const handleTaskCompleteChange =
    (task: Task) => (event: ChangeEvent<HTMLInputElement>) => {
      updateTaskCompletion(task.id, event.target.checked);
      //console.log('handleCompleteChange', handledTask);

      console.log(tasks);
    };

  const handleClearClick = () => {
    setTasks((tasks: Task[]) => tasks.filter((task) => !task.isComplete));
  };

  const handleTaskDelete = (handledTask: Task) => () => {
    setTasks((tasks: Task[]) =>
      tasks.filter((task) => task.id !== handledTask.id)
    );
  };

  return (
    <StyledRoot>
      <List>
        {tasks.map((task: Task) => (
          <ListItem key={task.id}>
            <CheckBox
              checked={task.isComplete}
              onChange={handleTaskCompleteChange(task)}
            />
            <Spacer width={24} />
            {task.label}
            <Spacer flex={1} />
            <DeleteButton onClick={handleTaskDelete(task)}>
              <DeleteIcon />
            </DeleteButton>
          </ListItem>
        ))}
      </List>
      <Spacer height={30} />
      <form onSubmit={submitNewTaskLabel}>
        <Input
          placeholder="Add a task"
          value={newTaskLabel}
          onChange={handleNewTaskLabel}
        />
      </form>
      <Spacer height={45} />
      <TextButton style={{ alignSelf: 'center' }} onClick={handleClearClick}>
        {' '}
        Clear Completed
      </TextButton>
    </StyledRoot>
  );
};

export default ListScreen;
