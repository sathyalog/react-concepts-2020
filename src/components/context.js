import React from 'react';

const assetContext = React.createContext();//Another way of passing value to components is React.createContext('Chandra Assets') and delete provider tag in App.js

const AssetProvider = assetContext.Provider;
const AssetConsumer = assetContext.Consumer;

export {AssetConsumer, AssetProvider}