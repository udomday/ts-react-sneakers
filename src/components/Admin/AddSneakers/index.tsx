import React, { ChangeEvent } from 'react';

import styles from './AddSneakers.module.scss';
import { createSneaker } from '../../../redux/slices/sneakers/slice';
import { useAppDispatch } from '../../../redux/store';

export type FileInputProps = {
  fileList: File[];
  onChange(fileList: FileList): void;
};

export const AddSneakers: React.FC = () => {
  const [title, setTitle] = React.useState<string>('');
  const [price, setPrice] = React.useState<string>('');
  const [photo, setPhoto] = React.useState<any>(null);
  const refFileInput = React.useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const createSneakers = () => {
    if (title.length && price.length && photo) {
      const sneaker = new FormData();
      sneaker.append('title', title);
      sneaker.append('price', price);
      sneaker.append('photo', photo);

      dispatch(createSneaker(sneaker));
      clearInput();
    } else {
      alert('Необходимо заполнить все поля, чтобы добавить товар');
    }
  };

  const clearInput = () => {
    const dt = new DataTransfer();
    setTitle('');
    setPrice('');
    if (refFileInput.current) {
      const dt = new DataTransfer();
      refFileInput.current.files = dt.files;
    }
    setPhoto(null);
  };

  return (
    <div className={styles.root}>
      <h2 className={styles.root_title}>Добавить кроссовки</h2>
      <div className={styles.root_main}>
        <input
          className={title.length && styles.input__success}
          placeholder="Название товара..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className={price.length && styles.input__success}
          placeholder="Цена товара..."
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <label className={photo && styles.input__success}>
          <input
            onChange={(e) =>
              setPhoto(e.target?.files?.[0] || alert('Что-то пошло не так... Попробуйте позже'))
            }
            ref={refFileInput}
            type="file"
          />
          {photo ? 'Фотография добавлена' : 'Добавить фотографию...'}
        </label>
        <span
          style={{ color: '#d94f4f' }}
          className={title.length && price.length && photo && styles.visible}>
          Необходимо заполнить все поля, чтобы добавить товар
        </span>
        <div className={styles.button_bar}>
          <button onClick={clearInput} className={styles.delete}>
            Отчистить
          </button>
          <button onClick={createSneakers}>Добавить товар</button>
        </div>
      </div>
    </div>
  );
};
