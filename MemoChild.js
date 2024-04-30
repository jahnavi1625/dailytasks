import React from 'react'

const MemoChild = ({callback}) => {

const memocallback=()=>{
    return callback;
}

  return (
    <div>
      <h1>MemoChild: {memocallback}</h1>
    </div>
  )
}

export default MemoChild
