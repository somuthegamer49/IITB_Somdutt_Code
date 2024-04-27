import {React,Fragment,useState} from 'react'

const Form = (props) => {

    let[cardinfo,setcardinfo]=useState(JSON.parse(localStorage.getItem('cards'))||[])
    let[list,setlist]=useState('List1')
    let[title,settitle]=useState('')
    let[desc,setdesc]=useState('')
    let[titleerr,settitleerr]=useState(false)
    let[descerr,setdescerr]=useState(false)

  const getList=(e)=>{
    setlist(e.target.value)
  }
  const getTitle=(e)=>{
    let check='0123456789'
    if(e.target.value!==null){
        for(let i=0; i<String(e.target.value).length; i++){
            let st="";
            st+=String(e.target.value).charAt(i);
            if(!check.includes(st)){
                settitle(e.target.value)
                settitleerr(false)
            }
            else{
                settitleerr(true)
            }
        }
    }
  }
  const getDesc=(e)=>{
    if(e.target.value!==null && e.target.value.length<26){
        setdesc(e.target.value)
        setdescerr(false)
    }
    else{
        setdescerr(true)
    }
  }

  const saveCard = ()=>{
    console.log(cardinfo.push({list:list,title:title,desc:desc}))
    localStorage.setItem('cards',JSON.stringify(cardinfo))
    props.getformState(true)
    window.location="https://somuthegamer49.github.io/IITB_Somdutt_Acharya"
  }
  const saveCard2 = ()=>{
    let arr = JSON.parse(localStorage.getItem('cards'))
    for(let i=0; i<arr.length; i++){
        if(i===props.eindex){
            arr[i].list=list
            arr[i].desc=desc
            arr[i].title=title
            localStorage.setItem('cards',JSON.stringify(arr))
        }
    }
    props.getformStateedit(true)
    window.location="https://somuthegamer49.github.io/IITB_Somdutt_Acharya"
  }
  const delCard = ()=>{
    let arr = JSON.parse(localStorage.getItem('cards'))
    for(let i=0; i<arr.length; i++){
        if(i===props.eindex){
            arr.splice(props.eindex,1)
            localStorage.setItem('cards',JSON.stringify(arr))
        }
    }
    props.getformStateedit(true)
    window.location="https://somuthegamer49.github.io/IITB_Somdutt_Acharya"
  }
  const closeForm = ()=>{
    props.getformState(true)
    props.getformStateedit(true)
  }
  return (
    <Fragment>
    {(props.formState||props.formStateedit)&&<div className="popup">
    <div>
        <div>
            <select defaultValue={props.formStateedit?props.ecard.list:null} onChange={(e)=>getList(e)} className="lists" name="" id="">
                <option value="List1">List1</option>
                <option value="List2">List2</option>
                <option value="List3">List3</option>
                
            </select>
        </div>
        <div>
            <input onChange={(e)=>getTitle(e)} defaultValue={props.formStateedit?props.ecard.title:null} className="title" type="text" placeholder="Enter Title"/>{titleerr?<span style={{color:'red'}}>Cannot contain Numbers or left blank</span>:null}
        </div>
        <div>
            <textarea onChange={(e)=>getDesc(e)} defaultValue={props.formStateedit?props.ecard.desc:null} className="desc" name="" id="" cols="30" rows="5" placeholder="Enter Description"></textarea>{descerr?<span style={{color:'red'}}>Allowed from 1 to 25 characters</span>:null}
        </div>
        <div>
            <button type="button" className="btn btn-outline-warning" onClick={()=>closeForm()}>Close</button>
            <button disabled={title===''||desc===''||titleerr||descerr?true:false} type="button" className="btn btn-outline-success" onClick={props.formState?()=>saveCard():props.formStateedit?()=>saveCard2():null}>Save</button>
            <button type="button" className="btn btn-outline-danger" onClick={props.formStateedit?()=>delCard():null}>Delete</button>
        </div>
    </div>
</div>}
    </Fragment>
  )
}

export default Form