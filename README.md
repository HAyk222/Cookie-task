# Cookie-task

1. Added middleware to the "/" route that sets current time to the cookie if there was no cookie for time
2. Renders a page for route "/myroute/:param" param, param query, param header, and param cookie
3. Renders a page for route "/form" with a HTML form (method=post, action=/form) with inputs (username, password, gender, "agree with" checkbox).
4. Done form validation width cookie session.
5.The POST /form route save data to the global array and redirects to the /result route with all data saved.
6. /api/time rout returns current time in {time: current_time} format
7. /api/users rout returns the array of users in json format

To run task locally write "npm start" in comand line.
