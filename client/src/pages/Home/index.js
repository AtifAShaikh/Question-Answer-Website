import React, { useState, useEffect } from "react";
import './style.css';
import HomeNav from './HomeComponents/HomeNav';
import HomeBody from './HomeComponents/HomeBody';


function Home() {

  const [homePageState, setHomePageState] = useState({
    filter: '',
    user_info: {name: 'test'},
    master_questions: {},
  });

    
  

  

  useEffect(() => {
    //Display the value in the console. Initially it is empty.
    // console.log(loginInputState);
    //useEffect will trigger when the state changes.
    // loaduser();
    fetch('/api/users/getuser/info', {
      method: 'GET',
      // body: JSON.stringify({}),
      // headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
      // console.log(response);
      return response.json();
    }).then((data)=>{
      setHomePageState({
        ...homePageState,
        user_info: data,
      })
    })
      // console.log(homePageState);
  }, []);

 

    const updateFilter = (e) => {
      // let newFilter = e.target.innerHTML.split(' ')[1];
      let newFilter = e.target.innerHTML;
      setHomePageState({
        ...homePageState,
        filter: newFilter,
      });
    }

    const resetFilter = (e) => {
      setHomePageState({
        ...homePageState,
        filter: '',
      });
    }

    return (
      <div className="mainBody">
          <HomeNav></HomeNav>
          <HomeBody filter={updateFilter} user={homePageState.user_info} currentFilter={homePageState.filter} reset={resetFilter}></HomeBody>
      </div>
    );
  }


export default Home;