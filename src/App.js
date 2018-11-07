import React from 'react';
import { Admin, Resource } from 'react-admin';

// 标准的页面 (根据数据库做标准化crud操作界面,的猜测,ListGuesser非常有意思,注意看控制台)
import { ListGuesser } from 'react-admin';

import jsonServerProvider from 'ra-data-json-server';
import { PostList, PostEdit, PostCreate } from './page/posts';
import { spidersList,  spidersEdit } from './page/spiders';

import {TagEdit, TagList,TagShow} from './page/tags'
import MyLayout from './lib/MyLayout';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';

//扩展路由
import customRoutes from './routes';
import themeReducer from './themeReducer';

//默认页面
import Dashboard from './Dashboard';

//登录数据验证
import authProvider from './authProvider';

// import dataProvider from './lib/dataProvider';

import simpleRestProvider from 'ra-data-simple-rest';
// 中文支持
import cnMessages from './i18n/cn';
// const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

// 支持切换语言
const i18nProvider = locale => {
    console.log(i18nProvider);
    if (locale === 'en') {
        return import('./i18n/en').then(messages => messages.default);
    }
    // Always fallback on english
    return cnMessages;
};

/**
 * admin是 react-admin应用程序的根组件
 */
const App = () => (
    <Admin   
        locale="cn"
        appLayout={MyLayout} 
        dashboard={Dashboard} 
        authProvider={authProvider} 
        dataProvider= {simpleRestProvider('http://localhost:3000/api')}
        // 路由
        customRoutes={customRoutes}
        // 主题
        customReducers={{ theme: themeReducer }}
        // 字体
        i18nProvider={i18nProvider}
    >
        {/*嵌套 组件 */}

        <Resource name="spiders" list={spidersList}   options={{ label: '爬虫内容管理' }}   icon={UserIcon}  edit={spidersEdit} />
          {/*        
        // <Resource name="comments" list={ListGuesser}  options={{ label: '评论' }}   /> */}
         <Resource name="spiderstags"  list={ListGuesser}  options={{ label: '内容标签管理' }}   /> 
         <Resource name="spiderstags" list={TagList}  show={TagShow}  edit={TagEdit} options={{ label: '内容标签管理' }}   /> 
         <Resource name="tabs2" list={ListGuesser}  options={{ label: '爬虫管理' }}   /> 
         <Resource name="tabs3" list={ListGuesser}  options={{ label: 'api用户管理' }}   /> 
         <Resource name="tabs4" list={ListGuesser}  options={{ label: '接口数据' }}   /> 
         {/* <Resource name="tags" {...tags} />, */}
    </Admin>
);

export default App;

