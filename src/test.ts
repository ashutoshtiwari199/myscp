import {myscp} from './index'


const options =  {
    path: './',
    hostIP: '172.16.10.199',
    user: 'test',
    password: 'test123',
    serverPath: '/home/test/',
    localDownLoadPath: './'
}
const cp = new myscp(options);
// const log = cp.list();
const log = cp.download('game1.txt'); 

// console.log(log);

cp.on('result', msg =>{
    console.log(`Process Exited with success result:`, msg)
})

cp.on('error', msg =>{
    console.log(`Process Exited with Error:`, msg)
})

cp.on('exit', msg =>{
    console.log(`Process Exited with code:`, msg)
})