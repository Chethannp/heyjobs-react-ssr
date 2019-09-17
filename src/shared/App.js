import React from "react";
import routes from "../routes/routes";
import { Route, Switch } from "react-router-dom";
import NoMatch from "./components/NoMatchBlockComp";
import styled from "styled-components";
import GlobalStyle from "../styled-components/GlobalStyle";
import HeaderBlockComp from "./components/HeaderBlockComp";

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 40px;
  padding: 0 10px;
`;

const App = () => {
  return (
    <div>
      <HeaderBlockComp />
      <AppContainer>
        <Switch>
          {routes.map(({ path, exact, component: C, ...rest }) => (
            <Route
              key={path}
              path={path}
              exact={exact}
              render={props => <C {...props} {...rest} />}
            />
          ))}
          <Route render={props => <NoMatch {...props} />} />
        </Switch>
        <GlobalStyle />
      </AppContainer>
    </div>
  );
};

export default App;
