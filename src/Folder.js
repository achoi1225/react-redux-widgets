import React from 'react';
import {BrowserRouter, Switch, Route, NavLink} from 'react-router-dom';

const Folder = ({folders}) => {
  return (
    <BrowserRouter>
      <div className="folders">
        <h1>Tabs</h1>
        <div className='tabs'>
          <ul className='tab-header'>
            {folders.map((folder, idx) => {
              return (
              <li key={idx}>
                <NavLink to={`/tabs/${folder.title}`}>{folder.title}</NavLink>
              </li>
              )
            })}
          </ul>
          <Switch>
            {folders.map((folder, idx) => {
              return (
              <Route key={folder.title} exact path={
                idx === 0 ?
                [`/tabs/${folder.title}`, '/'] :
                `/tabs/${folder.title}`}>
                <div className="tab-content">
                  {folder.content}
                </div>
              </Route>
              )
            })}
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Folder
