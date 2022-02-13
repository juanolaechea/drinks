import React,{ useContext} from 'react';
import Drink from './Drink';

import { CombinationContext } from "../contexs/CombinationContex";

const ListDrinks = () => {


    const {query} = useContext(CombinationContext);

    console.log(query);

    return ( 

        <div className="row mt-5">

            {query.map( drink => (
              <Drink
                    key={drink.idDrink}
                    drink={drink}
              />
            ))}

        </div>

     );
}
 
export default ListDrinks;