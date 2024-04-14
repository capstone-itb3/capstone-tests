import React, { useState } from 'react';
import User from './sub-comps/User';
import Editor from './sub-comps/Editor';

function Room() {
  const   [ users, setUser ] = useState ([
  {socket_id: 1, username: 'Romar'},
  {socket_id: 2, username: 'admin'},

  ]);

  return (
    <main className='editor-main'>
      <div className='top'>
        <h1>Room ID: <span></span></h1>
      </div>
      <hr></hr>
      <div className='bottom'>
        <aside>
          <div className='member-list'>
            <h2>Members</h2>
            <hr></hr>
            {users.map((user) => (
              <User key={user.socket_id} username={user.username}/>
            ))}
          </div>
          <div className='button-list'>
            <button style={{ backgroundColor: '#ff0000' }}>Leave Room</button>
          </div>
        </aside>
        <section>
            <Editor />
        </section>
      </div>
    </main>
  )
}

export default Room