# Com-BrowController
![image](https://github.com/yialexlee/yialexlee.github.io/blob/master/images/work/work10.png)

Com-Brow Controller is a tool develop with Node.js and flutter webview( for app ) that allow user to shutdown/sleep/lock and logout their computer by phone browser or app, if their phone and computer connected the same Wi-Fi. 

## Requirement
 [Node.js](https://nodejs.org/en/download/)
 
 ## Installation
 ``` bash
git clone https://github.com/yialexlee/Com-BrowController.git
cd Com-BrowController
npm install
```
 ## Setup
 ### Setup Password
 In `index.js` line 2 , change `set_password` to your password.
 ``` javascript
const password = 'set_password';
```
 ### Setup IP 
 In `index.js` line 26 , change `ip_address` to your device local ip address.
 ``` javascript
app.listen(port,'ip_address',() => console.log(`Server listening on port: ${port}`));
```

 ## Usage
 Open terminal and change your directory to `Com-BrowController` and run following command.
 ``` bash
npm start
```
Make sure your phone or tablet connect the same wifi with the computer you want to control. Then, open your phone or tablet browser and browse `http://yourip:3000`.

![index](https://github.com/yialexlee/Com-BrowController/blob/master/epphoto/index.png)

Select the function you want, and enter the password you have set in `index.js`

![image](https://github.com/yialexlee/Com-BrowController/blob/master/epphoto/pass.png)
