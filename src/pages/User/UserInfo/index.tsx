import React from "react";
import BreadCrumb from "Common/BreadCrumb";
import AccountInfo from "./AccountInfo";
import Tab from "Common/Components/Tab/Tab";
import OverviewTabs from "./OverviewTabs";

const userInfo = () => {

    document.title = "Account | Tailwick - React Admin & Dashboard Template";

    return (
        <React.Fragment>
            <BreadCrumb title='User Profile' pageTitle='User' />
            <Tab.Container defaultActiveKey="overviewTabs">
                <div className="mt-1 rounded-1 card">
                    <AccountInfo  className="card-body !px-2.5"/>
                </div>
                <Tab.Content className="tab-content">
                    <Tab.Pane eventKey="overviewTabs" id="overviewTabs">
                        <OverviewTabs />
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
        </React.Fragment>
    );
}

export default userInfo;