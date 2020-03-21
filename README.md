# gatsbyjs sample code

> dev 
- npm install -g gatsby-cli
- gatsby new gatsbyjssample

> user 
- yarn install 
- yarn develop
- http://localhost:8000/

> Ref
- https://velog.io/@_jouz_ryul/-리액트-hooks-함수형-컴포넌트
- https://velog.io/@velopert/react-hooks

# +Redux

> dev
- yarn add redux react-redux
- yarn add redux-actions (비추)
- Sample Code : setting 
- https://github.com/gatsbyjs/gatsby/tree/master/examples/using-redux
- Sample Code : Counter 
- https://github.com/onifts/reactjssample
- Sample Code : Counter - React+Redux 
- https://github.com/onifts/reactjssample
- Sample Code : Chat - Thunk
- https://velopert.com/3401

# +middleWare (미들웨어)(중간자)

> dev
- yarn add redux-logger 
- yarn add redux-thunk // Asynchronous (비동기처리)
- yarn add redux-pender // promise status manager 
- https://velopert.com/3401

# gatsbyjs+redux dev file structure
- /
  - src
    - actions // redux, action+action creator 
    - components // gatsbyjs component
    - contrainers // gatsbyjs component + redux action, status
    - pages // gatsbyjs component
    - reducers // redux, reducers (※Real Action Define)
    - store // redux store, one app one store 


