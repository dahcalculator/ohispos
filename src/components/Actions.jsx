const Actions =({text, icon}) =>{
    return(
      <div className='actions group'>
       {icon}
        <span className='actions-tips group-hover:scale-100 '>
          {text}
        </span>
      </div>
    )
  }

  export default Actions



