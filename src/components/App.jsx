import ContactForm from './ContactForm';
import React from 'react';
import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList';
import Filter from './Filter';
import css from './App.module.css';

class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  componentDidMount() {
    const verifyState = JSON.parse(localStorage.getItem('contacts'));
    if (verifyState && verifyState.length) {
      this.setState({ contacts: verifyState });
    }
  }

  onSubmitForm = state => {
    const data = {
      id: nanoid(),
      ...state,
    };
    this.state.contacts.find(
      item => item.name.toLowerCase() === state.name.toLowerCase()
    )
      ? alert(`${state.name} is already in contacts`)
      : this.setState(prevState => {
          return {
            contacts: [data, ...prevState.contacts],
          };
        });
  };

  onFilterHandler = event => {
    this.setState({ filter: event.target.value });
  };

  onDeleteHandler = (event, id) => {
    event.preventDefault();
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts.filter(contact => contact.id !== id)],
      };
    });
  };

  render() {
    const normalizedFilter = this.state.filter.toLowerCase();
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h1 className={css['primary-title']}>Phonebook</h1>
        <ContactForm onSubmitForm={this.onSubmitForm} />
        <h2 className={css['secondary-title']}>Contacts</h2>
        <Filter
          filter={this.state.filter}
          onFilterHandler={this.onFilterHandler}
        />
        <ContactList
          contacts={filteredContacts}
          onDeleteHandler={this.onDeleteHandler}
        />
      </div>
    );
  }
}

export default App;
