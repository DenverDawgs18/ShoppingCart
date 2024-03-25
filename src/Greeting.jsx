function Greeting(){
    return <h1>&quot; Yo what's up amigos &quot;</h1>
}
function Food(){
    return <a href="https://playvalorant.com" target="_blank" rel= "noopener noreferrer"><h1>My favorite food is sushi!</h1></a>
}
function Test(){
    return <div>
        <h1>Test title</h1>
    <ol className="test-list">
        <li />List item 1
        <li />List item 2
        <li />List item 3
    </ol>
    <svg>
    <circle cx="25" cy="75" r="20" stroke="green" strokeWidth="2" />
    </svg>
    <form><input type="text" /></form>
</div>
}
function Bio() {
    return (
    <>
      <div className="intro">
        <h1>Welcome to my website!</h1>
      </div>
      <p className="summary">
        You can find my thoughts here.
        <br /><br />
        <b>And <i>pictures</i></b> of scientists!
        </p>
    </>
    );
  }
export {Food, Greeting, Test};