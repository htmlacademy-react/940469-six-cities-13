import { Link } from 'react-router-dom';
import { cities } from '../../const';
import { useAppDispatch } from '../../hooks';
import { changeCity } from '../../store/action';
import cn from 'classnames';
import { memo } from 'react';

type MainTabsProps = {
  activeCity: string;
};

function MainTabs({ activeCity }: MainTabsProps): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => (
            <li className="locations__item" key={city}>
              <Link
                onClick={() => dispatch(changeCity(city))}
                className={cn('locations__item-link tabs__item', {
                  'tabs__item--active': activeCity === city,
                })}
                to="/"
              >
                <span>{city}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default memo(MainTabs);
