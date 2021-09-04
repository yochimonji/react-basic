import { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState('');
  const [id, setId] = useState('yochimonji');
  const ids = ['yochimonji', 'deatiger', 'gaearon', 'aws', 'google', 'facebook'];
  const gettRandomId = () => {
    const _id = ids[Math.floor(Math.random() * ids.length)];
    setId(_id);
  }

  useEffect(() => {
    fetch(`https://api.github.com/users/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setName(data.name);
      })
      .catch(error => {
        console.log(error);
      })
  }, [id]);

  return (
    <div>
      <p>{id}の、GitHub上の名前は{name}です。</p>
      <button onClick={gettRandomId}>IDを変更</button>
    </div>
  );
}

export default App;
