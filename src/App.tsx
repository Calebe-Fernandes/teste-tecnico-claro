import { Form, Header, Input } from './components';
import './app.scss';

function App() {
  return (
    <div className="d-flex align-items-center justify-content-center px-5 pt-5">
      <div className="content-wrapper">
        <Header/>
        <Form/>
      </div>
    </div>
  );
}

export default App;
