import Loader from "./Loader";
import React from "react";

class Opp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        items: [],
        loading: true,
      };
    }
  
    componentDidMount() {
       this.repeat();
    }
  
    repeat() {
        this.setState({ loading: true });
      
      fetch("https://randomuser.me/api/")
        .then((results) => {
          return results.json();
        })
        .then((data) => {
          this.setState({ loading: false });

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
                  
                 
                  <button className="random-btn" onClick={() => this.repeat()}>
                    NEXT
                  </button>
                </div>
            );
          });
          this.setState({ items });
        });
    }
  
    render() {
      return (
            <div >
              <div >
                {this.state.loading ? <Loader /> : this.state.items}
                
              </div>
            </div>
      );
    }
  }
  export default Opp;
  