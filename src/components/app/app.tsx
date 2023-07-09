import DrawMainScreen from '../../pages/main-screen/main-screen';

type AppScreenProps = {
  rentalOffers: number;
}

function App({rentalOffers}: AppScreenProps): JSX.Element {
  return (
    <DrawMainScreen rentalOffers = {rentalOffers}/>
  );
}

export default App;
