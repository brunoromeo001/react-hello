import { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import TextInput from "./components/TextInput";
import DateInput from "./components/DateInput";
import { getAgeFrom } from "./helpers/dateHelpers";
import getNewId from "./services/idService";
import Timer from "./components/Timer";
import CheckboxInput from "./components/CheckboxInput";

export default function App() {

  const [name, setName] = useState('Bruno');
  const [birthDate, setBirthDate] = useState('1991-02-02');
  const [showTimer, setShowTimer] = useState(false);

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

  function toogleShowTimer() {

    setShowTimer(currentShowTimer => !currentShowTimer)
  }

  return (
    <>
      <Header size='large'>
        React Hello
      </Header>
      <Main>
        {
          showTimer && (
            <div className="text-right mt-1">
              <Timer />
            </div>
          )
        }

        <CheckboxInput
          labelDescription="Mostrar timer"
          onCheckboxChange={toogleShowTimer}
          id={getNewId()}
        />
        <TextInput
          labelDescription="Digite o seu nome:"
          inputValue={name}
          onInputChange={handleNameChange}
          id={getNewId()}
          autoFocus
        />
        <DateInput
          labelDescription="Digite sua data de nascimento"
          inputValue={birthDate}
          onInputChange={handleBirthDateChange}
          id={getNewId()}
        />
        <p>
          O seu nome é {name}, com {name.length} caracteres, e você possui {getAgeFrom(birthDate)} anos
        </p>
      </Main>

    </>
  );
}

