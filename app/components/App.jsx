import React from 'react';
import Notes from './Notes.jsx';
import uuid from 'node-uuid';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    // bind `this` in addNote method to `App`
    this.addNote = this.addNote.bind(this);
    this.editNote = this.editNote.bind(this);
    this.findNote = this.findNote.bind(this);

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
        <Notes items={notes} onEdit={this.editNote}/>
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
  editNote(noteID, task) {
    const notes = this.state.notes;
    const noteIndex = this.findNote(noteID);

    if (noteIndex < 0) {
      return;
    }

    notes[noteIndex].task = task;

    this.setState({notes});
  }
  findNote(id) {
      const notes = this.state.notes;
      const noteIndex = notes.findIndex((note) => note.id === id);

      if (noteIndex < 0) {
        console.warn('Failed to find note', notes, id);
      }
      return noteIndex;
    }
}

