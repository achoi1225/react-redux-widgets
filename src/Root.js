import React from 'react';
import Clock from './Clock';
import Folder from './Folder';
import Weather from './Weather';


function Root() {
  const folders = [
    {title: 'one', content: 'I am the first'},
    {title: 'two', content: 'Second folder here'},
    {title: 'three', content: 'Third folder here'}
  ];
  return (
    <div>
      <Clock />
      <Folder folders={folders}/>
      <Weather />
    </div>
  );
}

export default Root;
