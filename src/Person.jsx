import { useState } from "react";
export default function Person() {
  const [person, setPerson] = useState({age: 100,  });
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')

  const handleIncreaseAge = () => {
    const newPerson = { ...person, age: person.age + 1 };
    setPerson(newPerson);
  };
  const handleFirstName = (e) => {
    setFirstname(e.target.value)
  }
  const handleLastName = (e) => {
    setLastname(e.target.value)
  }
  const fullName = firstname + " " + lastname;

  return (
    <>
      <h1>{fullName}</h1>
      <h2>{person.age}</h2>
      <input type="text" placeholder="firstname" onChange={handleFirstName}/>
      <input type="text" placeholder="lastname" onChange={handleLastName}/>
      <button onClick={handleIncreaseAge}>Increase age</button>
    </>
  );
}