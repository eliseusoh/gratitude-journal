import React from "react";

export default function EntryList({entries}){

    return(
        <ul className='entry-list'>
            {entries.length === 0 ? (
                <li>No entries yet - start by adding one! 🌱</li>
            ) : (
                entries.map((entry, index)=>(
                    <li key={index}>{entry}</li>
                ))
            )
            }
        </ul>
    )







}