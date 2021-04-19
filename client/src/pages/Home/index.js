import React, { useState, useEffect } from "react";
import './style.css';
import HomeNav from './HomeComponents/HomeNav';
import HomeBody from './HomeComponents/HomeBody';


function Home() {

  const [homePageState, setHomePageState] = useState({
    filter: '',
  });

  useEffect(() => {
    //Display the value in the console. Initially it is empty.
    // console.log(loginInputState);
    //useEffect will trigger when the state changes.
    console.log(homePageState);
  }, [homePageState]);

    const updateFilter = (e) => {
      let newFilter = e.target.innerHTML.split(' ')[1];
      setHomePageState({
        ...homePageState,
        filter: newFilter,
      })
    }

    return (
      <div className="mainBody">
          <HomeNav></HomeNav>
          <HomeBody filter={updateFilter}></HomeBody>
      </div>
    );
  }


export default Home;