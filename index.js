function Mypage() {
  return(
    <div>
       <header>
      <nav>
        <img src="./react-logo.png" width="70px"/>
      </nav>
    </header>
    <h1>Why im exited to be learning react</h1>
    <ol>
      <li>chetotam</li>
      <li>wanna work</li>
    </ol>
    <footer>
      <small>© 20xx Krivko development. All rights reserved.</small>
      </footer>
  </div>
  )
}
  

ReactDOM.render(<Mypage />, document.querySelector("#root"))