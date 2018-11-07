import React from 'react';
import { connect } from 'react-redux';
import { Layout, Sidebar } from 'react-admin';
import AppBar from './lib/AppBar';

const CustomSidebar = props => <Sidebar size={200} {...props} />;
const CustomLayout = props => (
    <Layout appBar={AppBar} sidebar={CustomSidebar} {...props} />
);

const darkTheme = {
    palette: {
        type: 'dark', // Switching the dark mode on is a single property value change.
    },
};

const lightTheme = {
    palette: {
        secondary: {
            light: '#1769aa',
            main: '#2196f3',
            dark: '#4dabf5',
            contrastText: '#fff',
        },
    },
};

export default connect(
    state => ({
        theme: state.theme === 'dark' ? darkTheme : lightTheme,
    }),
    {}
)(CustomLayout);
