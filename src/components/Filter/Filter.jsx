import css from './Filter.module.css';

const Filter = ({ filter, onFilterHandler }) => {
  return (
    <label className={css.form__text}>
      Find contacts by Name
      <input
        className={css.form__input}
        type="text"
        onChange={onFilterHandler}
        value={filter}
      />
    </label>
  );
};

export default Filter;
