
import React, { useState } from "react";

function TaskHandler() {

    const [textos, setTextos] = useState("")
  
    return(
      <div>
          <br></br>
        <input type="Text" placeholder="Type something" onChange={e => setTextos(e.target.value)}>
          
        </input>
        <p>
            {textos}
        </p>
      </div>
    )
  }

  export default TaskHandler;