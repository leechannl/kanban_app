/**
 * Created by mm on 12/1/15.
 */
import React from 'react';
import Note from './Note.jsx'

export default class Notes extends React.Component {
  render() {
    return (
      <ul className="notes">
        {this.props.items.map(this.renderNote)}
      </ul>
    )
  }

  // We are using an experimental feature known as property
  // initializer here. It allows us to bind the method `this`
  // to point at our *App* instance.
  //
  // Alternatively we could `bind` at `constructor` using
  // a line such as this.addNote = this.addNote.bind(this);
  renderNote = (note) => {
    return (
      <li className="note" key={note.id}>
        <Note task={note.task} onEdit={this.props.onEdit.bind(null, note.id)}/>
      </li>
    )
  }
}