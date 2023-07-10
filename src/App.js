import React,{useState} from 'react';
import ToDoLists from './ToDoLists';

const App=()=>{

    const[inputList,setInputList]=useState("");
    const[Items,setItems] = useState([]);

    const itemEvent=(event)=>{
        setInputList(event.target.value);
    }

    const listOfItems=()=>{

        if(inputList != "")
        {
          setItems((oldItmes)=>{
            return [...oldItmes, inputList]
        });

        // setItems((oldItmes)=>{
            
        //     return [...oldItmes,inputList];
        // });
        setInputList("");
    }};

    const deleteItems =(id)=>{
        setItems((oldItmes)=>{
            return oldItmes.filter((arrElements,index)=>{
                return index!== id;
            });
        });
    }

    return(
        <>
            <div className='main_div'>
                <div className='center_div'>
                <br/>
                <h1>TodoList</h1>
                <br/>
                    
                    <input type='text' placeholder='Add Item' 
                        onChange={itemEvent}
                        value={inputList}
                    />
                    <button onClick={listOfItems}> + </button>

                    <ol>
                        

                            {Items.map((itemval,index)=>{
                                return(<ToDoLists 
                                key={index} 
                                id={index}
                                text={itemval}
                                onSelect={deleteItems}
                                />)
                            })}
                        
                    </ol>
                </div>
            </div>
        </>
   );
}
export default App;