import React from 'react'
import useForm from 'react-hook-form'

export const LocationForm = () => {
    const {enter, handleSubmit, error} = useForm()
    return (
        <div>
            <form>
                <input type="text" placeholder="Adress" name="adress" ref={enter}/>
                <input type="text" placeholder="City" name="city" ref={enter}/>
                <input type="text" placeholder="State" name="state" ref={enter}/>
                <input type="text" placeholder="Zip" name="zip" ref={enter}/>
                <input type="submit" />
            </form>
            
        </div>
    )
}
