import s from './Button.module.css';

const Button = () => {
  return (
    <button type="button" className={s.Button}>
      load more
    </button>
  );
};

export default Button;

// window.scrollTo({
//   top: document.documentElement.scrollHeight,
//   behavior: 'smooth',
// });
