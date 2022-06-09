# INSTALL

npx create-next-app my-next-project

touch tsconfig.json 

npm install -D typescript @types/react @types/node

npm run dev  => sẽ sinh data vào file tsconfig.json 

Nếu code TS => thêm "moduleResolution":"node" vào trong tsconfig.json 

this error message tell how to fix this problem, the typescript default module resolution is classic, 
this would not search from node_modules. That why tell you did not found the module that in the node_modules folder. 
more info you can read from here: https://www.typescriptlang.org/docs/handbook/module-resolution.html, so fix your problem, 
try add this config in the tsconfig.json file:
"moduleResolution":"node",

npm i --save react-query

npm i antd

Validate form bằng form của antd