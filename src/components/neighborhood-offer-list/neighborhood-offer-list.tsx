import { ApartmentOffer } from '../../types/offer';
import NeighborhoodCard from '../neighborhood-card/neighborhood-card';

type NeighborhoodOfferProps = {
  offers: ApartmentOffer[];
};
export default function NeighborhoodOfferList({
  offers,
}: NeighborhoodOfferProps): JSX.Element {
  return (
    <div className="near-places__list places__list">
      {offers.slice(0, 3).map((offer) => (
        <NeighborhoodCard offer={offer} key={offer.id} />
      ))}
    </div>
  );
}
