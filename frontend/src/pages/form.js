import React, { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";

export const Form = () => {
    const { handleSubmit, user, setUser } = UserAuth();

    useEffect(() =>{
        // console.log(user)
    }, [user])

  return (
    <div>
        <h1>FORM</h1>
        <form onSubmit={handleSubmit}>
            <div className="form-field">
                <label htmlFor="name">Name</label>
                <input type="text" value={user.name} placeholder="Aron Smith"
                    onChange = {(e)=>setUser({...user, name : e.target.value})}
                />
            </div>

            <div className="form-field">
                <label htmlFor="address">Address</label>
                <input type="text" value={user.address} placeholder="House-23, RK Puram, Delhi, India"
                    onChange = {(e)=>setUser({...user, address : e.target.value})}
                />
            </div>

            <div className="form-field">
                <input type="radio" value='male' checked={user.gender === "male"}
                    onChange={(e)=>setUser({...user, gender: e.target.value})}
                />
                <label htmlFor="male">Male</label>
                <input type="radio" value='female' checked={user.gender === "female"}
                    onChange={(e)=>setUser({...user, gender: e.target.value})}
                />
                <label htmlFor="female">Female</label>
            </div>

            <div className="form-field">
                <label for="sport">Select a Sport</label>
                <select value={user.sport} onChange={e => setUser({...user, sport:e.target.value})}>
                    <option value="base">Select</option>
                    <option value="cri">Cricket</option>
                    <option value="fb">Football</option>
                    <option value="ms">Motor-Sport</option>
                    <option value="none">Not a fan of support</option>
                </select>
            </div>

            <div className="form-field">
                <input type="checkbox" checked={user.skill} value={user.skill}
                    onChange = {()=>setUser({...user, skill : !user.skill})}
                />
                <label for="vehicle1">Yes i know MERN technology.</label>
            </div>
            <button type="submit">Submit</button> 
        </form>
    </div>
  )
}
