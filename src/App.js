import './App.css';

import { Container, Grid } from 'semantic-ui-react';

import Content from './containers/Content/Content';
import React from 'react';
import Users from './containers/Users/Users';

function App() {
  return (
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
  );
}

export default App;
