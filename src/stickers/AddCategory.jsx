import React, { useState } from 'react';

const AddCategoryS = ({ setCategoryS }) => {

    const [value, setValue] = useState("");
    const [error, setError] = useState(false);

    const searchSticker = e => {
        e.preventDefault();
        if (value === "") {
            setError(true);
            return;
        }
        setError(false);
        setCategoryS(value);
        setValue("");
    }

    return ( 
        <>
            <form onSubmit={ searchSticker }>
                <input type="text" placeholder='Buscar...' 
                    onChange={e => setValue(e.target.value)}
                    value={value}
                />
            </form>
            { error ? <p className='error'>El campo no puede estar vacio...</p> : ""}
        </>
    );
}

export default AddCategoryS;