import React , {Component} from 'react';
import '../css/Pokecard.css';

const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

const Pokecard = ({name,id,type,exp}) => {
  let imgSrc=`${POKE_API}${id}.png`;
  return(
    <div className="Pokecard">
      <h1>{name}</h1>
      <img src={imgSrc} alt=""/>
      <div>Type:{type}</div>
      <div>Exp:{exp}</div>
    </div>  
  ); 
} 

export default Pokecard
