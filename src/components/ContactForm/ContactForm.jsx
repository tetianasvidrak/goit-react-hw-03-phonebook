import React from 'react';
import css from './ContactForm.module.css';

class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  onChangeInput = event => {
    const inputNameAttribute = event.target.name;
    const value = event.target.value;
    this.setState({ [inputNameAttribute]: value });
  };

  onSubmitHandler = event => {
    event.preventDefault();
    this.props.onSubmitForm(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form
        className={css.form__data}
        onSubmit={event => this.onSubmitHandler(event)}
      >
        <label className={css.form__text}>
          Name
          <input
            className={css.form__input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.onChangeInput}
            value={this.state.name}
          />
        </label>
        <label className={css.form__text}>
          Number
          <input
            className={css.form__input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.onChangeInput}
            value={this.state.number}
          />
        </label>
        <button className={css.form__button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
