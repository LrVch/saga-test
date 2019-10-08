import './App.css';

import { Container, Grid } from 'semantic-ui-react';

import React from 'react';
import Users from './containers/Users/Users';

function App() {
  return (
    <Container columns={2}>
      <Grid>
        <Grid.Row>
          <Grid.Column width={6}>
            <Users/>
          </Grid.Column>
          <Grid.Column width={10}>2</Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}

export default App;
