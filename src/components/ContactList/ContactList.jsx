import ContactElement from './ContactElement';
import css from './Contact.module.css';

const ContactList = ({ contacts, onDeleteHandler }) => {
  return (
    <ul className={css.list}>
      {contacts.map(contact => (
        <ContactElement
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          onDeleteHandler={onDeleteHandler}
        />
      ))}
    </ul>
  );
};

export default ContactList;
