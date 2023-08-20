import { ApartmentOffer } from '../../types/offer';
import NeighborhoodCard from '../neighborhood-card/neighborhood-card';

type NeighborhoodOfferProps = {
  offers: ApartmentOffer[];
};
export default function NeighborhoodOfferList({
  offers,
}: NeighborhoodOfferProps): JSX.Element {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {offers.slice(0, 3).map((offer) => (
          <NeighborhoodCard offer={offer} key={offer.id} />
        ))}
      </div>
    </section>
  );
}
