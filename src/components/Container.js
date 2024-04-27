import { React, Fragment, useState } from "react";

const Container = (props) => {
  let [cards, setcards] = useState(JSON.parse(localStorage.getItem("cards"))||null);
  let [formState, setformState] = useState(false);
  let [formStateedit, setformStateedit] = useState(false);
  const addCard = () => {
    props.getformState(formState);
    setformState(!formState);
  };

  const editCard=  (item,index)=>{
    props.getCard(item,index)
    props.getformStateedit(formStateedit);
    setformStateedit(!formStateedit);
  }
  let list1=document.getElementsByClassName('list1')
  let list2=document.getElementsByClassName('list2')
  let list3=document.getElementsByClassName('list3')

  const dragCard= (e,index)=>{
    e.preventDefault()
  
    let newPosition = {
        x : e.clientX,
        y : e.clientY
    }
    if(e.target.nodeName==='DIV'){
    if(newPosition.x===0 && newPosition.y===0){
        list1[0].addEventListener('dragleave',()=>{
            let arr = JSON.parse(localStorage.getItem('cards'))
            for(let i=0; i<arr.length; i++){
                if(i===index){
                    arr[i].list='List1'
                    arr.push(arr[i])
                    arr.splice(index,1)
                    localStorage.setItem('cards',JSON.stringify(arr))
                    list1[0].append(e.target)
                    window.location="https://somuthegamer49.github.io/IITB_Somdutt_Acharya"
                    return
                }
            }
           
        },false)
        list2[0].addEventListener('dragleave',()=>{
            let arr = JSON.parse(localStorage.getItem('cards'))
            console.log(arr)
            for(let i=0; i<arr.length; i++){
                if(i===index){
                    arr[i].list='List2'
                    arr.push(arr[i])
                    arr.splice(index,1)
                    localStorage.setItem('cards',JSON.stringify(arr))
                    list2[0].append(e.target)
                    window.location="https://somuthegamer49.github.io/IITB_Somdutt_Acharya"
                    return
                }
            }
        },false)
        list3[0].addEventListener('dragleave',()=>{
            let arr = JSON.parse(localStorage.getItem('cards'))
            for(let i=0; i<arr.length; i++){
                if(i===index){
                    arr[i].list='List3'
                    arr.push(arr[i])
                    arr.splice(index,1)
                    localStorage.setItem('cards',JSON.stringify(arr))
                    list3[0].append(e.target)
                    window.location="https://somuthegamer49.github.io/IITB_Somdutt_Acharya"
                    return
                }
            }
        },false)
        return
    }
}
  }
  return (
    <Fragment>
      <svg
        onClick={() => addCard()}
        className="addcard"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        style={{ marginLeft: "5rem", marginTop: "1rem" }}
      >
        <path d="M11.75 4.5a.75.75 0 0 1 .75.75V11h5.75a.75.75 0 0 1 0 1.5H12.5v5.75a.75.75 0 0 1-1.5 0V12.5H5.25a.75.75 0 0 1 0-1.5H11V5.25a.75.75 0 0 1 .75-.75Z"></path>
      </svg>
      <div className="container">
      <div className="list1">
        {cards!==null?cards.map((item,index) => {
          if (item.list === "List1") {
            return(
              <div draggable={true} onDrag={(e)=>dragCard(e,index)} onClick={()=>editCard(item,index)} className="card">
                <h2 style={{ textAlign: "center" }}>{item.title}</h2>
                <p style={{ textAlign: "center" }}>{item.desc}</p>
              </div>
           )
          }
        }):null?"No Cards Present":null}
        </div>
        <div className="list2">
        {cards!==null?cards.map((item,index) => {
          if (item.list === "List2") {
            return(
              <div draggable={true} onDrag={(e)=>dragCard(e,index)} onClick={()=>editCard(item,index)} className="card">
                <h2 style={{ textAlign: "center" }}>{item.title}</h2>
                <p style={{ textAlign: "center" }}>{item.desc}</p>
              </div>
           )
          }
        }):null?"No Cards Present":null}
        </div>
        <div className="list3">
        {cards!==null?cards.map((item,index) => {
          if (item.list === "List3") {
            return(
              <div draggable={true} onDrag={(e)=>dragCard(e,index)} onClick={()=>editCard(item,index)} className="card">
                <h2 style={{ textAlign: "center" }}>{item.title}</h2>
                <p style={{ textAlign: "center" }}>{item.desc}</p>
              </div>
           )
          }
        }):null?"No Cards Present":null}
        </div>
      </div>
    </Fragment>
  );
};

export default Container;
