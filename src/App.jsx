import { PizzaMenu } from './components/Pizza';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  console.log('app-re-render');
  return (
    <>
      <PizzaMenu />
    </>
  );
}

export default App;
