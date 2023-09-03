import React from 'react';
import { useNavigate } from 'react-router-dom';

const array_bttn = [
  { title: 'Добавить обувь', href: 'addsneakers' },
  { title: 'Редактировать заказ', href: 'changesneakers' },
];

export const AdminBar: React.FC = () => {
  const [selectedBttn, setSelectedBttn] = React.useState<number>(-1);
  const navigate = useNavigate();

  const clickOnBttnBar = (index: number, href: string) => {
    setSelectedBttn(index);
    navigate(`/admin/${href}`);
  };

  return (
    <div className="admin_root__bar">
      <ul>
        {array_bttn.map((el: { title: string; href: string }, index: number) => (
          <li
            onClick={() => clickOnBttnBar(index, el.href)}
            className={selectedBttn === index ? 'active' : ''}
            key={index}>
            <h3>{el.title}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};
