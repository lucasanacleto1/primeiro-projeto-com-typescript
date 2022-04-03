import { useState } from "react";
import "./App.css";
import { Card } from "./components/Card/Index";
import { Input } from "./components/Input";

interface User {
  name: string;
  age: number;
  hobby: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [hobby, setHobby] = useState<string>("");

  const handleClick = () => {
    setUsers([...users, { name: name, age: age, hobby: hobby }]);
    setName("");
    setAge(0);
    setHobby("");
  };

  return (
    <div className="App">
      <header className="App-header">
        <Input
          placeholder="Digite aqui seu nome"
          label="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Digite aqui sua idade"
          label="Idade"
          onChange={(e) => setAge(Number(e.target.value))}
        />
        <Input
          placeholder="Digite aqui seu hobby"
          label="Hobby"
          value={hobby}
          onChange={(e) => setHobby(e.target.value)}
        />
        <br />
        <button onClick={handleClick}>Enviar</button>
        <ul>
          {users.map((user, index) => (
            <Card
              key={index}
              name={user.name}
              age={user.age}
              hobby={user.hobby}
            />
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
