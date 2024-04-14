import React from 'react'

function JoinRoom() {
  return (
    <main className='join-main'>
      <h1>Join Room</h1>
      <input type='text' className='room-text' placeholder='Enter room id'></input>
      <input type='text' className='room-text' placeholder='Enter username'></input>

      <button className='submit'>Join Room</button>
      <p className='room-footer'>Want to create a new room instead? <span>Click here.</span></p>
    </main>
  )
}

export default JoinRoom