import React from 'react';
import Notes from './Note.jsx';
import uuid from 'node-uuid';

const notes = [
  {
    id: uuid.v4(),
    task: 'Learn Webpack'
  },
  {
    id: uuid.v4(),
    task: 'Learn React'
  },
  {
    id: uuid.v4(),
    task: 'Go laundry'
  }
]

export default class App extends React.Component {
  render() {
    return (
      <Notes items={notes}/>
    )
  }
}

