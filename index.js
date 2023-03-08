// const mypage = (
//        <div>
//             <h1>Why Im exited to be learning React</h1>
//             <ul>
//                 <li>poh</li>
//                 <li>hz che</li>
//                 <li>wanna work and learn money</li>
//             </ul>
//         </div>
// )
// dont work
// // Function Mypage()=
// //     return(
// //         <div>
// //             <h1>Why Im exited to be learning React</h1>
// //             <ul>
// //                 <li>poh</li>
// //                 <li>hz che</li>
// //                 <li>wanna work and learn money</li>
// //             </ul>
// //         </div>
// //     )
//     ReactDom.render(mypage, document.getElementById("root"))
// const mypage= (
//   <div>
//     <h1>Why im exited to be learning react</h1>
//     <ul>
//       <li>chetotam</li>
//       <li>wanna work</li>
//     </ul>
//     <p>emmet10</p>
//   </div>
// )
function Mypage() {
  return(
    <div>
    <h1>Why im exited to be learning react</h1>
    <ol>
      <li>chetotam</li>
      <li>wanna work</li>
    </ol>
    <p>emmet10</p>
  </div>
  )
}
  

ReactDOM.render(<Mypage />, document.querySelector("#root"))