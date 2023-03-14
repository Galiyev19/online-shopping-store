import React from "react"
import TabsProfile from "./TabsProfile/TabsProfile";

const Profile = () => {


    return(
        <div className="d-flex flex-column w-100 py-3">
            <h1 className="fw-bold text-uppercase text-white">личный кабинет</h1>
            <div>
                <TabsProfile/>
            </div>
        </div>
    )
}

export default Profile;


