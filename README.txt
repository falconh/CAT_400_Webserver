1. Copy over the entire CST333_Galileo folder over to your machine
2. Make sure node.js is installed in ur machine
3. Make sure the temperature is properly connect to the IO of Galileo
4. Open the app.js file in the js/ directory. Modify the IP address to your server IP address:
		
		return socketFactory ({ ioSocket : io.connect('<PUT IP HERE>:8000') });
		
		->For example, you are loopback to your own machine. You can change the IP to 127.0.0.1 or localhost
5. If you want to change the port number too, you will need to modify at main.js in CST333_Galileo/
		
		server.listen(<PORT.NO HERE>);
		
6. In the directory where the "main.js" resides. Do the following:
	->node main.js
	
7. Access to the web server with the IP address of your server and port number your server listen at.