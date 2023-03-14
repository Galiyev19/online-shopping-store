import React from 'react'
import { useAuthState } from "react-firebase-hooks/auth"
import auth from "../../../../FireBase/FIreBase"

const TabsItemProfile = () => {

    const [user] = useAuthState(auth)
    console.log(user)

    return(
        <div className="d-flex flex-column">
            <span className="text-white fs-3">UserName: {user.displayName}</span>
            <span className="text-white fs-3">Email: {user.email}</span>
        </div>
    )
}

export default TabsItemProfile;