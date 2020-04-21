# gatsbyjs sample code

> Dev 
- install nodejs at https://nodejs.org/ko/
- npm install -g yarn 
- npm install -g gatsby-cli
- npm install -g supervisor
- gatsby new gatsbyjssample
- install vscode as https://code.visualstudio.com/

> User 
- yarn install 
- yarn develop
- http://localhost:8000/

> Ref
- https://velog.io/@_jouz_ryul/-리액트-hooks-함수형-컴포넌트
- https://velog.io/@velopert/react-hooks

# +Redux

> Dev
- yarn add redux react-redux
- yarn add redux-actions 

> Ref
- Sample Code : setting 
  - https://github.com/gatsbyjs/gatsby/tree/master/examples/using-redux
- Sample Code : Counter 
  - https://github.com/onifts/reactjssample
- Sample Code : Counter - React+Redux 
  - https://github.com/onifts/reactjssample
- Sample Code : Chat - Thunk
  - https://velopert.com/3401
- Emoji 
  - https://github.com/missive/emoji-mart
- GIF
  - giphy, https://giphy.com/
  - tenor, https://tenor.com/

# +middleWare (미들웨어)(중간자)

> Dev
- yarn add redux-logger 
- yarn add redux-thunk // Asynchronous (비동기처리)
- yarn add redux-pender // promise status manager 

> Ref
- https://velopert.com/3401

# webpack 

> Def
- Build Tool (vs Jake, Brunch, Grunt, Gulp, Brocolli, Cha)
- Package Bundler
- Entry, Output, Loader, Plug-In

> Dev
- disable source map 

> Ref 
- https://kdydesign.github.io/2017/07/27/webpack/
- https://kdydesign.github.io/2017/11/04/webpack-tutorial/

# +FCM (Firebase Cloud Messaging)

> Dev 
- yarn add firebase

> Demo
- https://frigatebirdfcm.netlify.com/

# +Xamarin WebView +FCM

> Ref
- https://www.youtube.com/watch?v=yIZzX3YNFiM
- https://github.com/SPTutorial/NotificationSample

# gatsbyjs+redux dev file structure
- /
  - src
    - actions // redux, action+action creator 
    - components // gatsbyjs component
    - contrainers // gatsbyjs component + redux action, status
    - pages // gatsbyjs component
    - reducers // redux, reducers (※Real Action Define)
    - store // redux store, one app one store 


