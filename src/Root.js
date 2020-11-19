import React from 'react';
import Auto from './Auto';
import Clock from './Clock';
import Folder from './Folder';
import Weather from './Weather';


function Root() {
  const folders = [
    {title: 'one', content: 'I am the first'},
    {title: 'two', content: 'Second folder here'},
    {title: 'three', content: 'Third folder here'}
  ];

  const names = [
    'Suzy',
    'Andrew',
    'Scott',
    'Jay'
  ];

  return (
    <div>
      <Clock />
      <Folder folders={folders}/>
      <Weather />
      <Auto names={names}/>
    </div>
  );
}

export default Root;
