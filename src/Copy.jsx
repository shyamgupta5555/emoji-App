import React, { useState } from "react"    
export function MyApp() {
    const [copySuccess, setCopySuccess] = useState(null);
    
    const copyToClipBoard = async copyMe => {
       try {
           await navigator.clipboard.writeText(copyMe);
           setCopySuccess('Copied!');
       } 
       catch (err) {
           setCopySuccess('Failed to copy!');
       }
    };
    return (
        <button onClick={(e) => copyToClipBoard("what you want to copy goes here")} >
           My button
        </button>    
       )
    }
    