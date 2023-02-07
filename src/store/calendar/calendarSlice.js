import { createSlice } from '@reduxjs/toolkit';
//import { addHours } from 'date-fns';

//const tempEvents = {
//    _id: new  Date().getTime(),
//    title: 'titulo prueba',
//    notes: 'nota de prueba',
//    start: new Date(),
//    end: addHours( new Date(), 3 ),
//    bgColor: '#fafafa',
//    user:{
//        _id: '123',
//        name: 'Alberto'
//    }
//}

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        isLoadingEvents: true, 
        events: [ 
            //tempEvents 
        ],
        activeEvent: null,
    },
    reducers: {
        onSetActiveEvent: (state, { payload } ) => {
            state.activeEvent = payload
        },
        onAddNewEvent: ( state, { payload} )=>{
            state.events.push( payload );
            state.activeEvent = null
        },
        onUpdateEvent: ( state, { payload } )=>{
            state.events = state.events.map( event => {

                if( event.id === payload.id){
                    return payload
                }

                return event
            })
        },
        onDeleteEvent: ( state ) =>{
            if( state.activeEvent ){
                state.events = state.events.filter( event => event.id !== state.activeEvent._id );
                state.activeEvent = null;
            }
        },
        onLoadEvents: ( state, { payload = [] } )=>{
            state.isLoadingEvents = false;
            //state.events = payload;
            payload.forEach( event => {
                const exist = state.events.some( dbEvent => dbEvent.id === event.id );
                if( !exist ){
                    state.events.push( event )
                }
            });
        }
    }
});


// Action creators are generated for each case reducer function
export const { 

    onAddNewEvent,
    onDeleteEvent,
    onLoadEvents,
    onSetActiveEvent, 
    onUpdateEvent,
    
} = calendarSlice.actions;