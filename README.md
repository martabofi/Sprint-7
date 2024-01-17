This React web application has encountered challenges while working with json-server-auth, leading to issues in the login process. Currently, users can register successfully; however, when attempting to log in, an error message appears: POST http://localhost:3000/ 404 (Not Found). As a result, the login functionality is not fully operational.

**User Registration**

New users can register by providing their email and password. The registration process is expected to work smoothly.

**Login Issues**

Unfortunately, attempting to log in results in a 404 Not Found error at POST http://localhost:3000/. This issue is currently under investigation, and efforts are being made to resolve it.

**Access to Starships List**

To view the Starships list, users are required to log in. However, due to the ongoing login issues, it is recommended to comment out the code section that protects the route providing access to the Starships list. This will allow users to explore the Starships list without the need for login credentials.
