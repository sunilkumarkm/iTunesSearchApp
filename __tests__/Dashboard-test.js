import React from 'react';
import {render, cleanup} from './utils/test-utils';
import DashboardScreen from "../app/components/Dashboard/DasboardScreen";

afterEach(() => {
    cleanup();
  });
  
const initialState = {
    dashboard:{
        loading: false,
        itemList:[]
    }
  };
  
  describe('Testing Dashboard Screen', () => {
    it('renders as expected', () => {
        const rendered = render(<DashboardScreen/>, {initialState});
    });
  });