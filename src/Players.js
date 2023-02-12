import React,{useState} from 'react'

const states = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", 
"Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", 
"Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya",
 "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", 
"Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"];
export default function Players() {
    const [error,setError]=useState('');
    const [players, setPlayers] = useState([{ id:'',
    name: '',
    age: '',
    role: '',
    state: ''
}]);
const[listall,setListall] = useState([])

  const handleAddPlayer = () => {
    setPlayers([...players, {  name: '',
    age: '',
    role: '',
    state: ''}]);
  };
  // Validation
  const validate = ()=>{
    if(players.name == "" ||players.age == "" ||players.role == "" ||players.state == ""){
      setError("Please fill all the fields")
      return false
    }
    setError('')
    return true
  }

  const handlePlayerChange = (e, index) => {
    const isValid = validate()
    if(isValid){
    const updatedPlayers = [...players];
    updatedPlayers[index][e.target.name] = e.target.value;
    setPlayers(updatedPlayers);
    }
  };

  const handleDeletePlayer = (index) => {
    const updatedPlayers = [...players];
    updatedPlayers.splice(index, 1);
    setPlayers(updatedPlayers);
    // setListall(players)
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setListall(players)
  };

  return (
    <div>
 <h1>Cricket Player Information</h1>
 <button className="addPlayers" onClick={handleAddPlayer}>Add Players +</button><br/>
 {players.map((player, index) => (
      <form className="playersForm">
          
        <input
          type="text"
          placeholder="Enter player name"
          required
          name="name"
          value={player.name}
          onChange={(e) => handlePlayerChange(e, index)}/>
          
          <input
            type="text"
            placeholder="Enter player age"
            name="age"
            value={player.age}
          onChange={(e) => handlePlayerChange(e, index)}/>
            
        <select
              name="role"
              value={player.role}
          onChange={(e) => handlePlayerChange(e, index)}
            >
            <option value="" disabled>
              Select role
            </option>
            <option value="Batsman">Batsman</option>
            <option value="Bowler">Bowler</option>
            <option value="Wicket Keeper">Wicket Keeper</option>
            <option value="All Rounder">All Rounder</option>
          </select><select
            name="state"
            value={player.state}
            onChange={(e) => handlePlayerChange(e, index)}
          >
            <option value="" disabled>
              Select state
            </option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
          <button type="button" className="deletebtn" onClick={() => handleDeletePlayer(index)}>
            Delete Player
          </button>
          
      </form>
 ))}
     
      <button className="Allvalue" onClick={handleSubmit}>Save All</button>
      <p className="error">{error}</p>
      <h3>List of Cricket Players</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Role</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          {listall.map((p, index) => (
            <tr key={index}>
              <td>{p.name}</td>
              <td>{p.age}</td>
              <td>{p.role}</td>
              <td>{p.state}</td>
            </tr>
          ))}
        </tbody>
        </table>

    </div>
  )
}
