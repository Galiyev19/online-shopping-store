import React from "react"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import TabsItemProfile from "./TabsItem/TabsItemProfile";
import Order from "../../Order/Order"


const TabsProfile = () => {

    return (
        <Tabs
            defaultActiveKey="home"
            id="fill-tab-example"
            className="mb-3 text-white"
            fill
        >
            <Tab eventKey="home" title="Профиль" className="text-white">
                <div>
                    <TabsItemProfile/>
                </div>
            </Tab>
            <Tab eventKey="profile" title="История заказов" className="text-white">
                <div>
                    <Order/>
                </div>
            </Tab>
        </Tabs>
    )
}

export default TabsProfile;