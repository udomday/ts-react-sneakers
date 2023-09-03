import React from 'react';

import styles from './Search.module.scss';

import input_icon from '../../../assets/input/input_icon.svg';
import clear_icon from '../../../assets/input/clear_icon.svg';

export const Search: React.FC = () => {
  const [value, setValue] = React.useState<string>();
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onClickClear = () => {
    setValue('');
    inputRef.current?.focus();
  };

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className={styles.root}>
      <input
        ref={inputRef}
        placeholder="Поиск обуви..."
        className={styles.input}
        value={value}
        onChange={(event) => onChangeInput(event)}
      />
      <img className={styles.icon} src={input_icon} alt="input_icon" />
      {value && (
        <img
          onClick={onClickClear}
          className={styles.clearIcon}
          src={clear_icon}
          alt="clear_icon"></img>
      )}
    </div>
  );
};
