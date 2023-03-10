"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const options = {
    path: './',
    hostIP: '172.16.10.199',
    user: 'test',
    password: 'test123',
    serverPath: '/home/test/',
    localDownLoadPath: './'
};
const cp = new index_1.myscp(options);
// const log = cp.list();
const log = cp.download('game1.txt');
// console.log(log);
cp.on('result', msg => {
    console.log(`Process Exited with success result:`, msg);
});
cp.on('error', msg => {
    console.log(`Process Exited with Error:`, msg);
});
cp.on('exit', msg => {
    console.log(`Process Exited with code:`, msg);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy90ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQTZCO0FBRzdCLE1BQU0sT0FBTyxHQUFJO0lBQ2IsSUFBSSxFQUFFLElBQUk7SUFDVixNQUFNLEVBQUUsZUFBZTtJQUN2QixJQUFJLEVBQUUsTUFBTTtJQUNaLFFBQVEsRUFBRSxTQUFTO0lBQ25CLFVBQVUsRUFBRSxhQUFhO0lBQ3pCLGlCQUFpQixFQUFFLElBQUk7Q0FDMUIsQ0FBQTtBQUNELE1BQU0sRUFBRSxHQUFHLElBQUksYUFBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzlCLHlCQUF5QjtBQUN6QixNQUFNLEdBQUcsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBRXJDLG9CQUFvQjtBQUVwQixFQUFFLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsRUFBRTtJQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLHFDQUFxQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO0FBQzNELENBQUMsQ0FBQyxDQUFBO0FBRUYsRUFBRSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLEVBQUU7SUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsRUFBRSxHQUFHLENBQUMsQ0FBQTtBQUNsRCxDQUFDLENBQUMsQ0FBQTtBQUVGLEVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxFQUFFO0lBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLEVBQUUsR0FBRyxDQUFDLENBQUE7QUFDakQsQ0FBQyxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge215c2NwfSBmcm9tICcuL2luZGV4J1xuXG5cbmNvbnN0IG9wdGlvbnMgPSAge1xuICAgIHBhdGg6ICcuLycsXG4gICAgaG9zdElQOiAnMTcyLjE2LjEwLjE5OScsXG4gICAgdXNlcjogJ3Rlc3QnLFxuICAgIHBhc3N3b3JkOiAndGVzdDEyMycsXG4gICAgc2VydmVyUGF0aDogJy9ob21lL3Rlc3QvJyxcbiAgICBsb2NhbERvd25Mb2FkUGF0aDogJy4vJ1xufVxuY29uc3QgY3AgPSBuZXcgbXlzY3Aob3B0aW9ucyk7XG4vLyBjb25zdCBsb2cgPSBjcC5saXN0KCk7XG5jb25zdCBsb2cgPSBjcC5kb3dubG9hZCgnZ2FtZTEudHh0Jyk7IFxuXG4vLyBjb25zb2xlLmxvZyhsb2cpO1xuXG5jcC5vbigncmVzdWx0JywgbXNnID0+e1xuICAgIGNvbnNvbGUubG9nKGBQcm9jZXNzIEV4aXRlZCB3aXRoIHN1Y2Nlc3MgcmVzdWx0OmAsIG1zZylcbn0pXG5cbmNwLm9uKCdlcnJvcicsIG1zZyA9PntcbiAgICBjb25zb2xlLmxvZyhgUHJvY2VzcyBFeGl0ZWQgd2l0aCBFcnJvcjpgLCBtc2cpXG59KVxuXG5jcC5vbignZXhpdCcsIG1zZyA9PntcbiAgICBjb25zb2xlLmxvZyhgUHJvY2VzcyBFeGl0ZWQgd2l0aCBjb2RlOmAsIG1zZylcbn0pIl19