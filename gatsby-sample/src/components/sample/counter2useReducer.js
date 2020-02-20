import React, { useReducer } from 'react';

function reducer(state, action) {
  // action.type 에 따라 다른 작업 수행
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value - 1 };
    default:
      // 아무것도 해당되지 않을 때 기존 상태 반환
      return state;
  }
}

const Counter = () => {

    const [state, dispatch] = useReducer(reducer, { value: 0 });
    /*
        useReducer( param1, param2 )
        - param1 : reducer 함수 
        - param2 : reducer 의 기본값 

        state = { value: 0 } 
        dispatch : 액션을 발생시키는 함수 
                   dispatch(action) 와 같은 형태로, 
                   함수 안에 파라미터로 액션 값을 넣어주면 리듀서 함수가
        
    */ 

    return (
        <div>
        <p>
            현재 카운터 값은 <b>{state.value}</b> 입니다.
        </p>
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
        </div>
    );
};

export default Counter;
