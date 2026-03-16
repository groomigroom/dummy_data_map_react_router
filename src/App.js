import './App.css';
import Header_part from "./component/Header_part";
import DayList from './component/DayList';
import Day from './component/Day';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header_part />
      <DayList />
      <Day />
    </div>
  );
}

export default App;
