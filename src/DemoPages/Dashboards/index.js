import React, { Fragment } from "react";
import { Route } from "react-router-dom";

// DASHBOARDS
import BasicDashboard from "./Basic/";

import { isIOS } from "react-device-detect";
// Layout
import AppHeader from "../../Layout/AppHeader/";
import AppHeaderIOS from "../../Layout/AppHeaderIOS/";
import AppSidebar from "../../Layout/AppSidebar/";
import AppFooter from "../../Layout/AppFooter/";

const Dashboards = ({ match }) => (
   <Fragment>
      {isIOS ? <AppHeaderIOS/> : <AppHeader />}
      <div className="app-main">
         {isIOS ? (<Fragment/>) : <AppSidebar />}
         <div className="app-main__outer">
            <div className="app-main__inner">
               <Route path={`${match.url}/basic`} component={BasicDashboard} />
            </div>
            <AppFooter />
         </div>
      </div>
   </Fragment>
);

export default Dashboards;
