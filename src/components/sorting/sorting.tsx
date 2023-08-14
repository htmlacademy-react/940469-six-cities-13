import { useAppDispatch } from '../../hooks';
import { sorting } from '../../const';
import { changeSorting } from '../../store/action';
import cn from 'classnames';
import { useState } from 'react';

type SortingProps = {
  activeSorting: string;
};

export default function Sorting({ activeSorting }: SortingProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [toggle, setToggle] = useState(false);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => setToggle(!toggle)}
      >
        {activeSorting}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={cn('places__options places__options--custom', {
          'places__options--opened': toggle,
        })}
      >
        {sorting.map((sort) => (
          <li
            key={sort}
            className={cn('places__option', {
              'places__option--active': activeSorting === sort,
            })}
            tabIndex={0}
            onClick={() => dispatch(changeSorting(sort))}
          >
            {sort}
          </li>
        ))}
      </ul>
    </form>
  );
}
