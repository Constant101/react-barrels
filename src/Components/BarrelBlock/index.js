import React from 'react';
import Button from '../Button';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import '../../assets/img/barrel-1.png';
import '../../assets/img/barrel-2.png';
import '../../assets/img/barrel-3.png';
import '../../assets/img/barrel-4.png';
import '../../assets/img/barel-1-2x.png';
import '../../assets/img/barel-2-2x.png';
import '../../assets/img/barel-3-2x.png';
import '../../assets/img/barel-4-2x.png';
import { addToCart } from '../../redux/actions/cart';

function BarrelBlock({ id, name, price, descr, img, img2x, sizes, types, onAddCard, addedCount }) {
  const [activeType, setActiveType] = React.useState(types[0]);
  const [activeSize, setActiveSize] = React.useState(0);
  const typeNames = ['double wall', 'common'];
  const sizeTypes = [40, 80, 100];
  const onSelectType = (index) => {
    setActiveType(index);
  };
  const onSelectSize = (index) => {
    setActiveSize(index);
  };
  const handleAddCard = () => {
    const obj = {
      id,
      name,
      price, 
      descr, 
      img, 
      img2x, 
      size: sizeTypes[activeSize], 
      type: typeNames[activeType],
    }
    onAddCard(obj)
  }
  console.log(activeType, activeSize);
  return (
    <div className="card-item animate__animated animate__fadeInUp ">
      <div className="card-title">
        <h4>{name}</h4>
        <span>{descr}</span>
      </div>
      <div className="card-img">
        <img src={img} srcSet={img + ' 1x, ' + img2x + ' 2x'} alt="" />
      </div>
      <ul>
        {sizeTypes.map((size, index) => (
          <li
            key={size}
            onClick={() => onSelectSize(index)}
            className={classNames({
              active: activeSize === index ? 'active' : '',
              disabled: !sizes.includes(size),
            })}>
            {size} .ltrs
          </li>
        ))}

        {typeNames.map((type, index) => (
          <li
            key={type}
            onClick={() => onSelectType(index)}
            className={classNames({
              active: activeType === index ? 'active' : '',
              disabled: !types.includes(index),
            })}>
            {type}
          </li>
        ))}
      </ul>
            <Button onClick={handleAddCard}  className="main-btn">Добавить {addedCount && <span>{addedCount}</span>} </Button>
      <p>
        Цена <span>{price} BTC</span>
      </p>
      <p>
      </p>
    </div>
  );
}

BarrelBlock.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  descr: PropTypes.string,
  types: PropTypes.arrayOf(PropTypes.number).isRequired,
  sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
  onAddCard: PropTypes.func,
};
BarrelBlock.defaultProps = {
  name: '---',
  price: 0,
  types: [],
  sizes: [],
};

export default BarrelBlock;
