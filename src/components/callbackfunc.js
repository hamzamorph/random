import React from "react";


export const callback = (setItems,setLoading,data,repeat) => {
       
    data = data.json();
    data.then(data => {
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
    })
  
}