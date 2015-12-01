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

  renderNote(note) {
    return (
      <li className="note" key={note.id}>
        <Note task={note.task}/>
      </li>
    )
  }
}