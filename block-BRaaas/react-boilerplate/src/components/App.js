import data from '../data.json';

function handleChange(event) {
  alert(`Hello React SyntheticBaseEvent`);
}

function handleChangeHelp(event) {
  alert(`To learn React use https://reactjs.org `);
  alert(`React and ReactDOM works together `);
  alert(`Babel helps in writing JSX `);
}

function handleChangeName(event, name) {
  alert(`Hello ${event.target.innerText}`);
  console.log(event.target.innerText);
}

function handleFruit(name) {
  alert(name);
}

function App() {
  return (
    <>
      <button onClick={(event) => handleChange(event)}>Click Me</button>
      <button onClick={(event) => handleChangeHelp(event)}>
        How can I help you?
      </button>
      <button onClick={(event, name) => handleChangeName(event, name)}>
        Arya
      </button>
      <button onClick={(event, name) => handleChangeName(event, name)}>
        John
      </button>
      <button onClick={(event, name) => handleChangeName(event, name)}>
        Bran
      </button>

      {data.map((fruit) => (
        <button key={fruit.id} onClick={() => handleFruit(fruit.value)}>
          {fruit.id}
        </button>
      ))}
    </>
  );
}

export default App;
