import products from "../../utils/products"

export const reducer = (state, action) =>{
    switch(action.type){
        case 'Add_To_Card':{
            // let res = state.cardItems.map((value)=> value.id === action.payload.id ? {...state, cardItems: [...state.cardItems, count:{...cardItems.count, count : value.count }]} :
            // {...state, cardItems: [...state.cardItems, action.payload.product]})
           return  {...state, cardItems: [...state.cardItems, action.payload.product]}
        }
        
        // Search
        case 'SEARCH': {
            let res= products.filter((product)=>product.title.toLowerCase().includes(action.payload.value.toLowerCase()))
        return {...state, data:res}
        }
        // Filter
        case 'FILTER' :{
            let res 
            if(action.payload.value==='high'){
                res = state.data.sort((a,b)=>b.price-a.price)
            }else if(action.payload.value === 'low'){
                res = state.data.sort((a, b)=>a.price-b.price)
            }else if(action.payload.value==='default'){
                res = state.data
            }
            return {...state, data: res}
        }
        case 'Delete': {
            let res = state.cardItems.filter((value)=> value.id !== action.payload.id)
            return {...state, cardItems: res};
        }
        case "Plus":{
            let res = state.cardItems.map((value)=> value.id === action.payload.id ? {...value, count: value.count + 1} : value )
            return {...state, cardItems: res}
        }
        case "Minus":{
            let res = state.cardItems.map((value)=>value.id === action.payload.id && value.count>1 ? {...value, count: value.count - 1} : value)
            return {...state , cardItems: res}
        }
        default: 
             return state;
    }
}