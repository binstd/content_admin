// in src/MyMenu.js
import React from 'react';
import { connect } from 'react-redux';
import { MenuItemLink, getResources } from 'react-admin';
import { withRouter } from 'react-router-dom';
// import PostIcon from '@material-ui/icons/Book';
// import UserIcon from '@material-ui/icons/Group';
// import Responsive from '../layout/Responsive';

const MyMenu = ({ resources, onMenuClick, logout }) => (
    // icon={UserIcon} 
    <div>
        {resources.map(resource => (
            <MenuItemLink key={resource.name} options={resource.options}  to={`/${resource.name}`}   primaryText={resource.options.label} onClick={onMenuClick} />
        ))}
            <MenuItemLink to="/custom-route" primaryText="自定义页面" onClick={onMenuClick} />
        
    </div>
);

const mapStateToProps = state => ({
    resources: getResources(state),
});
console.log('resources:',mapStateToProps.resources);
export default withRouter(connect(mapStateToProps)(MyMenu));