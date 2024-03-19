// 'use client' specifies that this component/page needs to loaded client side

'use client';

// can use useState ONLY in client side
import { useState } from 'react';

// function removed and put here from page.js
export default function LikeButton() {
     
    // setting up state
    const [likes, setLikes] = useState(0);
    
    // handling click functionality
    function handleClick() {
        setLikes(likes + 1);
        console.log("wow")
      }
 
    // "final" return that returns the BUTTON itself
    return <button onClick={handleClick}>Like ({likes})</button>    
}