import Loader from "./Loader";
import {callback} from "./callbackfunc";
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
        .then((data) => callback(setItems,setLoading,data,repeat));
    }

    return (
        <div >
          <div >
            {loading ? <Loader /> : items}
          </div>
        </div>
  );
      
}

  