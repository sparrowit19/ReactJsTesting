import React, { Fragment } from "react";
import { Route } from "react-router-dom";

// COMPONENTS


// Notifications

import NotificationsExamples from "./Notifications/";

// Tooltips & Popovers

import SettingsExamples from "./Settings/";

import AppHeader from "../../Layout/AppHeader/";
import AppSidebar from "../../Layout/AppSidebar/";
import AppFooter from "../../Layout/AppFooter/";

const Components = ({ match }) => (
   <Fragment>
      <AppHeader />
      <div className="app-main">
         <AppSidebar />
         <div className="app-main__outer">
            <div className="app-main__inner">
               {/* Notifications */}
               <Route
                  path={`${match.url}/notifications`}
                  component={NotificationsExamples}
               />

               {/* Notifications */}
               <Route
                  path={`${match.url}/settings`}
                  component={SettingsExamples}
               />
            </div>
            <AppFooter />
         </div>
      </div>
   </Fragment>
);

export default Components;
