# Node.js exercises

## Create server and deploy it

For this exercise, it is recommended to create a new folder (for example on your Desktop). This will make the deployment easier.

1. Create a new folder and make a git repository out of it
2. Create a package.json file using `npm init -y`
3. Install [express](https://www.npmjs.com/package/express)
4. Create a file `server.js` and write the following web server:

```bash
GET / # returns an HTML file. It contains the title "Hello World" and a link to /another-page

GET /another-page # returns an HTML file. It contains the title "Hello Again" and a link to the home page (/).
```

-   Hints:
    -   Use Google if you face a problem, express has a large developer community.
    -   When testing the web server, make sure to always save your changes, stop the running server with `Ctrl + c` and run the server again with `node server.js`.

5. Create the script `start`, which runs the server: `"start": "node server.js"`

6. Create a "database" in `server.js`:
    ```js
    const jokesDatabase = [
        "q. Why was the JavaScript developer sad? a. Because they didn't Node how to Express himself",
        "Sometimes when I'm writing JavaScript I want to throw up my hands and say 'this is bullshit!' but I can never remember what 'this' refers to.",
    ];
    ```
7. Extend the server with the following routes:

```bash
GET /jokes # returns all the jokes as json

POST /jokes with json body { "joke": "<joke here>" } # reads the json body and adds the joke to the jokesDatabase. Remember to add the body parser.
```

9. Test the routes with [Insomnia](https://insomnia.rest/download) or [Postman](https://www.postman.com/downloads/).

10. Create a new GitHub reposity and push your local repo to this new GitHub repo.

11. Create an [CYCLIC](https://app.cyclic.sh/) account

12. Connect your Github with your Cyclic account and deploy it:
    - Connect both accounts
    - Go to Deploy and "Link your own"
    - Select your repo
    - Connect Cyclic
    - :tada: your server is live
