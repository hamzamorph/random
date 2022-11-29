import Loader from "./Loader";
import React from "react";
import { useState, useEffect } from "react";

export const Opp = () => {
    const [items,setItems] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
       repeat();
    },[]);

    const repeat = () => {
        setLoading(true);
      
      fetch("https://randomuser.me/api/")
        .then((results) => {
          return results.json();
        })
        .then((data) => {
            setLoading(false);

          let items = data.results.map((item) => {
            return ( 
                <div key={item.id}>
                  <h2> {item.name.first}</h2>
                  <img
                    src={item.picture.large}
                    className="profile-pic"
                    alt="profile-img"
                  />
  
                    <h2> {item.location.country}</h2>
                  
                 
                  <button className="random-btn" onClick={repeat}>
                    NEXT
                  </button>
                </div>
            );
          });
          setItems(items);
        });
    }

    return (
        <div >
          <div >
            {loading ? <Loader /> : items}
          </div>
        </div>
  );
      
}

  