import s from './Button.module.css';

const Button = ({ loadMore }) => {
  return (
    <button type="button" onClick={loadMore} className={s.Button}>
      load more
    </button>
  );
};

export default Button;
