// import React from 'react';

// import BarrelBlock from '../Components/BarrelBlock/BarrelBlock';
// import PlaceholdersBlock from '../Components/BarrelBlock/PlaceholdersBlock';
// import { fetchCards } from '../redux/actions/cards';
// import SortPopup from '../Components/SortPopup';
// import Categories from '../Components/Categories';
// import { useSelector, useDispatch } from 'react-redux';
// import { setCategory } from '../redux/actions/filters';
// import { setSortBy } from '../redux/actions/filters';
// import {addToCart} from '../redux/actions/cart'
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import barrel from '../assets/img/barel-golden.png';
import barrel2x from '../assets/img/barel-golden-2x.png';
import Button from '../Components/Button';
import { Categories, SortPopup, BarrelBlock, PlaceholdersBarrelBlock } from '../Components';

import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchCards } from '../redux/actions/cards';
import { addToCart } from '../redux/actions/cart';

const categoryNames = [ 'медные', 'цинковые', 'пластиковые', 'алюминиевые'];
const sortIems = [
  { name: 'размер', type: 'sizes', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавит', type: 'name', order: 'asc' },
];

function Home() {
  const dispatch = useDispatch();

  const items = useSelector(({ cards }) => cards.items);
  const cartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ cards }) => cards.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  console.log(cartItems);

  React.useEffect(() => {
    dispatch(fetchCards(sortBy, category));
  }, [category, sortBy]);
  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
    console.log(category);
    console.log(setCategory(index));
  }, []);
  const onSelectSort = React.useCallback((type) => {
    dispatch(setSortBy(type));
    console.log(sortBy);
  }, []);
  const onAddToCart = (obj) => {
    dispatch(addToCart(obj))
  }
  // const handleOnAddToCart= (obj) => {
  //   console.log(obj)
  // }

  return (
    <>
      <Categories
        activeCategory={category}
        onClickCategory={onSelectCategory}
        items={categoryNames}
      />
      <SortPopup activeSortCat={sortBy.type} items={sortIems} onClickSort={onSelectSort} />
      <section className="main">
        <div className="container">
          <div className="main__wrapper">
            <div className="main-descr animate__animated animate__fadeInUpBig">
              <span className="main-suptitle ">Ask you to do this task</span>
              <h2 className="main-title">In the good level</h2>
              <div className="main-text">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati doloremque
                  cumque laboriosam perferendis? Quam, iste. Voluptatem placeat corrupti a
                  doloremque, beatae ex, amet perferendis excepturi animi quisquam incidunt fuga
                  alias.
                </p>
              </div>
              <div className="main-buttons">
                <Button className="main-btn">Get started</Button>
                <Button className="main-btn" outline>
                  How to start
                </Button>
              </div>
            </div>
            <div className="main-image">
              <img
                className="animate__animated animate__rotateIn"
                src={barrel}
                srcSet={barrel2x}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className="cards">
        <div className="container">
          <h3 className="card-section-title ">
            Do Very well Tech Task <br />
            In Few Simple Steps
          </h3>
          <div className="cards-wrapper">
            {isLoaded
              ? items.map((obj) => (
                  <BarrelBlock
                    key={obj.id}
                    onAddCard={onAddToCart}
                    addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                    {...obj}
                    // name={obj.name}
                    // img={obj.img}
                    // descr={obj.description}
                    // price={obj.price}
                  />
                ))
              : Array(4)
                  .fill(0)
                  .map((_, index) => <PlaceholdersBarrelBlock key={index} />)}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
