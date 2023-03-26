import css from './Contact.module.css';

const ContactElement = ({ id, name, number, onDeleteHandler }) => {
  return (
    <li className={css.item}>
      <span>{name}:</span>
      <span>{number}</span>
      <button
        className={css.button}
        onClick={event => onDeleteHandler(event, id)}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactElement;
