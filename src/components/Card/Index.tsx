import "./style.css";

interface User {
  name: string;
  age: number;
  hobby: string;
}

export const Card = ({ name, age, hobby }: User) => {
  return (
    <div className="container">
      <p>Nome: {name}</p>
      <p>Idade: {age}</p>
      <p>Hobby: {hobby}</p>
    </div>
  );
};
