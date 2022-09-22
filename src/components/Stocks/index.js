import { Redirect, useParams, useHistory } from "react-router-dom";

const isLoggedIn = true;

function Stocks() {
    const history = useHistory();
    
  const handleClick = () => {
    window.alert("Sending info to the DB!");
    history.push("/");
  };


  if (!isLoggedIn) {
    return <Redirect to="/not-logged-in" />;
  } else {
    return (
      <div className="comp orange">
        <h1>Stocks Component</h1>

        <button onClick={handleClick}>Home</button>
      </div>
    );
  }
}

export default Stocks;
