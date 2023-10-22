
import { createSlice ,configureStore} from '@reduxjs/toolkit';
// import { createStore } from 'redux';
const initialCounterState={counter:0 ,setCounter:true}; 
const counterSlice=createSlice({
    name:'counter',
    initialState:initialCounterState,
    reducers:{
        increment(state){
           state.counter=state.counter+5;
        },
        decrement(state){
            state.counter=state.counter-5;
        },
        increase(state,action){
            state.counter=state.counter+action.payload;
        },
        toggleCounter(state){
            state.setCounter=!state.setCounter;
        }

    }
});
// const counterReducer=(state=initialState,action)=>{
    
//     if(action.type==='increment')
//     return{
//         counter:state.counter + 5 ,
//         setCounter:state.setCounter
//     }
//     else  if(action.type==='incrementBy10')
//     return{
//         counter:state.counter + action.amount,
//         setCounter:state.setCounter
//     }
//     else if(action.type==='decrement'){
//         return{
//             counter:state.counter - 5,
//             setCounter:state.setCounter
//         }
//     }

//     else if(action.type==='toggle'){
//         return{
//             counter:state.counter,
//             setCounter:!state.setCounter
//         }
//     }
//     return state;
// }
// const store=createStore(counterReducer);
const initialAuthState={
    isAuthenticated:false,
};
const authSlice=createSlice({
    name:'authentication',
    initialState:initialAuthState,
    reducers:{
        
        login(state){
            state.isAuthenticated=true;
        },
        logout(state){
            state.isAuthenticated=false;
        },
    }


});

const store=configureStore({
    reducer:{ counter:counterSlice.reducer , auth:authSlice.reducer },
});
export const counterActions=counterSlice.actions;
export const authActions=authSlice.actions;

export default store;
