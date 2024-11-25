import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import TextInput from "./components/TextInput";
import DateInput from "./components/DateInput";

export default function App() {
  console.log('Teste no console do navegador');
  const [name, setName] = useState('Bruno');
  const [birthDate, setBirthDate] = useState('1991-02-02');

  function handleNameChange(newName) {

    setName(newName)
  }

  function handleBirthDateChange(newBirthDate) {

    setBirthDate(newBirthDate)
  }

  return (
    <>
      <Header size='large'>
        Componente Header - React Hello
      </Header>

      <Main>
        <TextInput
          labelDescription="Digite o seu nome:"
          inputValue={name}
          onInputChang={handleNameChange}
        />
        <DateInput
          labelDescription="Digite sua data de nascimento"
          inputValue={birthDate}
          onInputChang={handleBirthDateChange}
        />
        <p>
          O seu nome é {name}, com {name.length} caracteres, e você possui 38 anos
        </p>
      </Main>

    </>
  );
}

