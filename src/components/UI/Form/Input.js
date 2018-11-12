import classes from './Input.css';
import React from '../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react';

const Input = (props) =>{
    let InputElement=null;
    const inputClasses = [classes.InputElement];
   
   
    if(props.invalid && props.shouldValidate && props.touched){
        inputClasses.push(classes.Invalid);
    }
    switch(props.elementType){
         case ('input'):
          InputElement = <input  
          className={inputClasses.join(' ')}
           {...props.elementConfig} 
           onChange={props.changed}/>;
          break;

         case ('textarea'):
          InputElement = <textarea 
          className={inputClasses.join(' ')}
           {...props.elementConfig}
            value={props.value}
            onChange={props.changed}/>;
          break;
           
          case ('select'):
          InputElement = (<select 
            className={inputClasses.join(' ')}
            {...props.elementConfig}
             value={props.value}  onChange={props.changed} >
             {props.elementConfig.options.map((option)=>(
                 <option key={option.value} value={option.value}>
                 {option.displayValue}
                 </option>))}
                 </select>
                 
          );
          break;

           default:   InputElement = <input 
           className={inputClasses.join(' ')}
             {...props.elementConfig} 
                  value={props.value}
                  onChange={props.changed} />;  
                         }

return (
    <div className={classes.Input }>
           {InputElement}
    </div>
);
}

export default Input;