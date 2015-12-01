import React from 'react';
import Notes from './Notes.jsx';
import uuid from 'node-uuid';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    // bind `this` in addNote method to `App`
    this.addNote = this.addNote.bind(this);

    this.state = {
      notes: [
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
    };
  }
  render() {
    const notes = this.state.notes;
    return (
      <div>
        <button className="add-note" onClick={this.addNote}>+</button>
        <Notes items={notes}/>
      </div>
    );
  }
  addNote() {
    this.setState({
      notes: this.state.notes.concat([{
        id: uuid.v4(),
        task: "new task"
      }])
    });
  }
}

