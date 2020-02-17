import { cloneElement } from 'react';
import { IRoutes } from '../index';

/**
 * Render Routes with all element 
 * @param component 
 * @param routes 
 */

export const renderRoute = (component: any, routes: IRoutes[]) => routes.map(route =>  cloneElement(component, {key: route.path, ...route}));