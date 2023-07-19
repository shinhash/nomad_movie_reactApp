import React from "react";
import PropTypes from "prop-types";
//import logo from './logo.svg';
import './App.css';

/*
function Potato({item, arrTemp}){
  console.log(arrTemp);
  return <h1>this tag is {item} potato</h1>;
}
*/


const animalArr = [
  {name:"cat", age:4, wight:12, id:1},
  {name:"dog", age:3, wight:8, id:2},
  {name:"panda", age:9, wight:95, id:3},
];

function AnimalFn({name, age}){
  return <h1>this animal is {name} and age is {age}</h1>;
}

/*
function animalMap(animal){
  return <AnimalFn name={animal.name} key={animal.id} age={animal.age}/>;
}
*/

function App() {
  
  return (
    <div className="App">
      {/*
      <Potato item="redbull" arrTemp={animalArr} />
      */}
      {animalArr.map((animal) => (
        <AnimalFn key={animal.id} name={animal.name} age={animal.age}/>
      ))}
      {/* map return 의 함수처리 */}
      {/*
      { animalArr.map(animalMap)}
    */}
    </div>
  );
}

AnimalFn.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

export default App;
