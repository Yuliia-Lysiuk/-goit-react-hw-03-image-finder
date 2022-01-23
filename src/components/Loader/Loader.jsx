import './Loader.css';
import { TailSpin } from 'react-loader-spinner';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Loader = () => {
  return (
    <div className="Oval">
            <TailSpin color="#00BFFF" height={80} width={80} />
          </div>
  );
};

export default Loader;