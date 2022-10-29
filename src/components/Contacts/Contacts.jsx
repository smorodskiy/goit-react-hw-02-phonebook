import React from 'react';
import { Component } from 'react';
import { nanoid } from 'nanoid';

// Check types of props
import PropTypes from 'prop-types';

class Contacts extends Component {
  render() {
    const { contacts, handleOnDeleteUser } = this.props;
    return (
      <ul>
        {contacts.map(contact => {
          return (
            <li key={contact.id}>
              <span>{contact.name}</span>
              <button user={contact.name} onClick={handleOnDeleteUser}>Delete</button>
            </li>
          );
        })}
      </ul>
    );
  }
}

export { Contacts };

// Types
Contacts.propTypes = {
  // message: PropTypes.string,
};
