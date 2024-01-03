import Header from './components/Header'
import SearchBar from './components/SearchBar'
import List from './components/List'
import { useState, useEffect } from 'react';
import './assets/css/style.css'

// Alternatives
const data = require('./dummy.json'); 


const App = () =>{

  // To store API response
  const [repo, setRepo] = useState([]);
  const [filteredUser, setFilteredUser] = useState();

  // Call GITHUB API
  useEffect(() => {
    const githubAPI = async () => { 
      // const res = await fetch("https://api.github.com/users/hng011/repos");
      const res = await fetch("https://api.com");
      // Handle any err messages
      res.status === 200 ? 
      setRepo(await res.json()) 
      : 
      // If there's an error, dummy data will be the backup
      setRepo(data);
      console.log(`Status ${res.status}`);
    };
    githubAPI().catch(e => setRepo(data));

  }, []);

  // Filtering
  const handleFilter = (event) => {
    const val = event.target.value;
    setFilteredUser(repo.filter(u => (u.name.toLowerCase()).includes(val.toLowerCase())));
  };

  // For searching
  const showdata = filteredUser !== undefined ? filteredUser : repo;

  return (

    repo.length === 0 ? 
      <div>Loading...</div>
      
      :

      <div className="flex flex-col justify-center items-center m-5 border-4 border-black-500">
        
        <Header name="Hans" />

        <SearchBar filterFunc={handleFilter} />

        <List data={showdata}/>

      </div>
  )
};

export default App;

