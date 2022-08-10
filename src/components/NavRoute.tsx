import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import styled from 'styled-components';
import FocusScreen from '../screens/FocusScreen';
import ListScreen from '../screens/ListScreen';
import TaskContext from '../contexts/task-store';
import useLocalStorage from '../hooks/use-local-storage';
import { Task } from '../types';

const StyledRoot = styled.div`
  background-color: ${(props) => props.theme.palette.background};
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 3.5rem;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80rem;
  margin-bottom: 3.5rem;
  font-weight: ${(props) => props.theme.font.weight.bold};
  font-size: ${(props) => props.theme.font.size.large};
`;

const TabButton = styled(NavLink)`
  background-color: ${(props) => props.theme.palette.common.black};
  color: ${(props) => props.theme.palette.common.white};
  height: 5.2rem;
  width: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &:first-child {
    border-top-left-radius: ${(props) => props.theme.borderRadius};
    border-bottom-left-radius: ${(props) => props.theme.borderRadius};
  }
  &:last-child {
    border-top-right-radius: ${(props) => props.theme.borderRadius};
    border-bottom-right-radius: ${(props) => props.theme.borderRadius};
  }
  &.active {
    color: ${(props) => props.theme.palette.common.black};
    background-color: ${(props) => props.theme.palette.common.yellow};
  }
`;

type Props = {};
const NavRoute: React.FC<Props> = () => {
  const [tasks, setTasks] = useLocalStorage<Task[]>('tasks', []);
  return (
    <Router>
      <StyledRoot>
        <TaskContext.Provider value={[tasks, setTasks]}>
          <Layout>
            <Nav>
              <TabButton exact to="/" activeClassName="active">
                List
              </TabButton>

              <TabButton to="/focus" activeClassName="active">
                Focus
              </TabButton>
            </Nav>
            <br />
            <Switch>
              <Route exact path="/">
                <ListScreen />
              </Route>
              <Route path="/focus">
                <FocusScreen />
              </Route>
            </Switch>
          </Layout>
        </TaskContext.Provider>
      </StyledRoot>
    </Router>
  );
};

export default NavRoute;
