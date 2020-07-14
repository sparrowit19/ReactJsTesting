import React, {Fragment} from 'react';

import {connect} from 'react-redux';

import MetisMenu from 'react-metismenu';

import {ComponentsNav} from '../AppNav/NavItems';

class Header extends React.Component {
    render() {
        let {
            headerBackgroundColor,
            enableMobileMenuSmall,
            enableHeaderShadow
        } = this.props;
        return (
            <Fragment>
                <MetisMenu content={ComponentsNav} activeLinkFromLocation className="horizon-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    enableHeaderShadow: state.ThemeOptions.enableHeaderShadow,
    closedSmallerSidebar: state.ThemeOptions.closedSmallerSidebar,
    headerBackgroundColor: state.ThemeOptions.headerBackgroundColor,
    enableMobileMenuSmall: state.ThemeOptions.enableMobileMenuSmall,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Header);