import "./styles.css";

export default function App() {
  const myStyle = {
    color: "red"
  };
  const d = new Date();
  console.log(d);
  var hours = d.getHours();
  var msg = "";
  if (0 <= hours && hours < 12) {
    msg = "Good morning!";
    myStyle.color = "red";
    console.log(msg);
  } else if (hours >= 12 && hours < 18) {
    myStyle.color = "green";
    msg = "Good afternoon!";
    console.log(msg);
  } else {
    myStyle.color = "blue";
    msg = "Good evening!";
    console.log(msg);
  }
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h1 style={myStyle} className="myHeading">
        {msg}
      </h1>
    </div>
  );
}
