function Header() {
  return(
    <header>
    <nav>
      <img src="./react-logo.png" width="70px"/>
    </nav>
  </header>
  )
}
function MainContent() {
  return(
    <div>
    <h1>Why im exited to be learning react</h1>
    <ol>
      <li>chetotam</li>
      <li>wanna work</li>
    </ol>
    </div>
  )

}
function Footer() {
  return(
  <footer>
  <small>© 20xx Krivko development. All rights reserved.</small>
  </footer>
  )
}
  
function Mypage() {
  return(
    <div>
      <Header />
      <MainContent />
      <Footer />
  </div>
  )
}


ReactDOM.render(<Mypage />, document.querySelector("#root"))
// ReactDOM.render(<Header />, document.querySelector("#root"))