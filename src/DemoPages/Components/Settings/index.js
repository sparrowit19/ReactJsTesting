import React, {Fragment} from 'react';

import PageTitle from '../../../Layout/AppMain/PageTitle';


export default class SettingsExamples extends React.Component {

    render() {
        return (
            <Fragment>
                <PageTitle
                    heading="Settings"
                    subheading="Settings demo."
                    icon="pe-7s-glasses icon-gradient bg-love-kiss"
                />
            </Fragment>
        );
    }
}