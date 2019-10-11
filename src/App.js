import './App.css';
import 'react-semantic-toasts/styles/react-semantic-alert.css';

import { Container, Grid } from 'semantic-ui-react';

import Content from './containers/Content/Content';
import React from 'react';
import { SemanticToastContainer } from 'react-semantic-toasts';
import Users from './containers/Users/Users';

function App() {
  return (
    <>
      <Container className="full-height" columns={2}>
        <Grid className="full-height">
          <Grid.Row className="full-height">
            <Grid.Column className="full-height" width={6}>
              <Users usersOnPageCount={3} />
            </Grid.Column>
            <Grid.Column className="full-height" width={10}>
              <Content />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
      <SemanticToastContainer position="bottom-right" />
    </>
  );
}

export default App;
