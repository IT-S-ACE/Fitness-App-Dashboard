import React, { createContext, useContext, useState } from 'react';


const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [adminToken, setAdminToken] = useState(localStorage.getItem('adminToken') || '');
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState('#03C9D7');
  const [currentMode, setCurrentMode] = useState('Light');
  const [themeSettings, setThemeSettings] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  
  const [coachID, setCoachID] = useState(localStorage.getItem('coachId') || null); // Updated

  const [monthlySalees, setMonthlySales ] = useState(localStorage.getItem('salesNum') || 0); // Updated

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem('themeMode', e.target.value);
  };

  const setToken = (token) => {
    setAdminToken(token);
    localStorage.setItem('adminToken', token);
  };

  const setStorCoachID = (ID) => {
    setCoachID(ID);
    localStorage.setItem('coachId', ID);
  };

  const setSalesNumber = (salesNumb) => {
    setMonthlySales(salesNumb);
    localStorage.setItem('salesNum', salesNumb);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem('colorMode', color);
  };

  const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });
  
  
  const handleClick2 = (clicked) => setIsClicked({...initialState, [clicked]: false })
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider value={{setSalesNumber , monthlySalees ,setStorCoachID,coachID, setCoachID ,handleClick2 , setToken , adminToken , setAdminToken , currentColor, currentMode, activeMenu, screenSize, setScreenSize, handleClick, isClicked, initialState, setIsClicked, setActiveMenu, setCurrentColor, setCurrentMode, setMode, setColor, themeSettings, setThemeSettings }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
