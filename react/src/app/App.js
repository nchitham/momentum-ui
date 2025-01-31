import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import Playground from './containers/Playground';
import KitchenSink from './containers/KitchenSink';
import {
  ListItem,
  Topbar,
  TopbarNav,
} from '@momentum-ui/react';

import logo from '@momentum-ui/core/images/momentum/momentum-horiz-color.svg';

const App = () => {
  const wordMark = <img src={logo} alt="Momentum Design" />;
  const navItems = (
    <>
      <ListItem
        customRefProp="innerRef"
        customAnchorNode={
          <NavLink to="/" activeClassName={'active'}>
            Kitchen Sink
          </NavLink>
        }
      />
      <ListItem
        customRefProp="innerRef"
        customAnchorNode={
          <NavLink to="/playground" activeClassName={'active'}>
            Playground
          </NavLink>
        }
      />
    </>
  );

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Topbar color="light" image={wordMark} brandAnchorElement={<NavLink to="/" />}>
        <TopbarNav>{navItems}</TopbarNav>
      </Topbar>
      <main>
        <Switch>
          <Route key={'Playground'} path="/playground" component={Playground} />
          <Route component={KitchenSink} />
        </Switch>
      </main>
    </div>
  );
};

export default App;
