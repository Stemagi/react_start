function Mypage() {
  return(
    <div>
    <h1>Why im exited to be learning react</h1>
    <h2>
      <nav>
        <img src="./react-logo.png" width="70px"/>
      </nav>
    </h2>
    <ol>
      <li>chetotam</li>
      <li>wanna work</li>
    </ol>
    <p>© 20xx Krivko development. All rights reserved.</p>
  </div>
  )
}
  

ReactDOM.render(<Mypage />, document.querySelector("#root"))