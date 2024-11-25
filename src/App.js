import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
  console.log('Teste no console do navegador');
  const state = useState('Bruno');

  const [name, setName] = useState('Bruno');

  function handleNameChange(event) {
    const newName = event.currentTarget.value

    setName(newName)
  }

  return (
    <>
      <Header size='large'>
        Componente Header - React Hello
      </Header>

      <Main>
        <div className="flex flex-col my-4">
          <label 
            className="text-sm mb-1" 
            htmlFor="inputName"
          >
            Digite o seu nome: 

          </label>
          <input
            id="inputName"
            type='text'
            className="border"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <p>
          O seu nome é {name}, com {name.length} caracteres, e você possui 38 anos
        </p>
      </Main>

    </>
  );
}

