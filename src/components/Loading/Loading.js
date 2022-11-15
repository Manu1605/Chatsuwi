import React from 'react'
import { ThreeDots } from 'react-loader-spinner'
const style = {
  main: 'h-screen w-full flex justify-center items-center'
}
function Loading() {
  return (
    <div className={style.main}>
      <ThreeDots 
        height="80" 
        width="80" 
        radius="9"
        color="#A570CA" 
        ariaLabel="three-dots-loading"
        visible={true}
        />
    </div>
  )
}

export default Loading