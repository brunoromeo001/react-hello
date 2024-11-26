import { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import TextInput from "./components/TextInput";
import DateInput from "./components/DateInput";
import { getAgeFrom } from "./helpers/dateHelpers";
import getNewId from "./services/idService";

export default function App() {

  const [name, setName] = useState('Bruno');
  const [birthDate, setBirthDate] = useState('1991-02-02');

  useEffect(() => {
    console.log('Executando userEffect')
    document.title  =  name
  }, [name])

  function handleNameChange(newName) {

    setName(newName)
  }

  function handleBirthDateChange(newBirthDate) {

    setBirthDate(newBirthDate)
  }

  return (
    <>
      <Header size='large'>
        React Hello
      </Header>

      <Main>
        <TextInput
          labelDescription="Digite o seu nome:"
          inputValue={name}
          onInputChang={handleNameChange}
          id={getNewId()}
          autoFocus
        />
        <DateInput
          labelDescription="Digite sua data de nascimento"
          inputValue={birthDate}
          onInputChang={handleBirthDateChange}
          id={getNewId()}
        />
        <p>
          O seu nome é {name}, com {name.length} caracteres, e você possui {getAgeFrom(birthDate)} anos
        </p>
      </Main>

    </>
  );
}

