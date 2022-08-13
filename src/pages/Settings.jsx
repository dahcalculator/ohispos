import React from 'react'

const Settings = () => {
  return (
    <div className='w-full h-full'>
        <div>company data</div>
        <form action="" method="post">
        <div className="col">
             <label htmlFor="companyName">company Name</label> 
             <input className='formInput' type="text" name="companyName" id="companyName" />
        </div>   
        <div className="col">
             <label htmlFor="tax-ID">Tax-ID</label> 
             <input className='formInput' type="text" name="tax-ID" id="tax-ID" />
        </div>   
       
        </form>
    </div>
  )
}

export default Settings