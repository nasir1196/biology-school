import React from 'react'

const Some = () => {
  return (
      <div style={{height:"90vh"}}>
          <div style={{background:"#e3ad33", width:"80%", padding:"2rem", height:"30vh", borderRadius:"0.6rem", margin:"0 auto", display:"flex", alignItems:"center", justifyContent:'center' }}>
              <div>
                  <input style={{outline:'none', padding:"10px", borderRadius:'0.8rem 0rem 0rem 0.8rem',border:"2px solid green"}}  type="search" name="search" id="search" />
              <button style={{ padding:"10px", borderRadius:'0rem 0.8rem 0.8rem 0rem', border:"2px solid green"}} type="submit">
                  Join Now
              </button>
              </div>
        </div>
    </div>
  )
}

export default Some