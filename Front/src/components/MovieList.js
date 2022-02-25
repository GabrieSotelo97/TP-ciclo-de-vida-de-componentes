import React from 'react'

export default function MovieList(props) {
    return (
        <>
        
            
            <tfoot>
                <tr>
                    <th>{props.id}</th>
                    <th>{props.title}</th>
                    <th>{props.rating}</th>
                    <th>{props.awards}</th>
                    <th>{props.length}</th>
                </tr>
            </tfoot>
            
        
        </>
    )
}
