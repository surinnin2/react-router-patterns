import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './Nav';
import ColorPage from "./ColorPage"
import AddColorForm from './AddColorForm';
import React, { useEffect, useState } from 'react';

function App() {
  const [colorList, updateColorList] = useState([])

  //funciton to be passed to AddColorForm
  const addColor = newColor => {
    updateColorList(colors => [ ...colors, newColor ])  
  }
 
  //checks if colorList is empty for first render, every new render after first should alert user
  useEffect(() => {
    if (colorList.length !== 0) {
      alert("Color Added")
    }
    }, [colorList])

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/colors" >
            <Nav colors={colorList} /> 
        </Route>
        <Route exact path="/colors/add">
            <AddColorForm addColor={addColor} />
        </Route>
        <Route path="/colors/:color" >
          <ColorPage colors={colorList}/>
        </Route>
        <Redirect to="/colors" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
