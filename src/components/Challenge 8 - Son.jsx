import {memo} from 'react'

// eslint-disable-next-line react/display-name, react/prop-types
export const Son = memo(({numero, increment}) => {
    console.log('again reloaded...');
    return(
        <button
            className='btn btn-primary mr-3'
            onClick={() => {increment(numero) }}
        >
            { numero }
        </button>
    )
});