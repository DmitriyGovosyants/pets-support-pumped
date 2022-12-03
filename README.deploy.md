**Read documentation: [About](README.md).**

# React Deploy

This project was created with
[Create React App](https://github.com/facebook/create-react-app). For
acquaintance and customize additional features
[refer to documentation](https://facebook.github.io/create-react-app/docs/getting-started).

## New project preparation

1. Make sure that the computer has the LTS version of Node.js.
   [Download and install](https://nodejs.org/en/) it if necessary.
2. Decline this repository.
3. Change the folder name from `react-homework-template` to the name of your
   project.
4. Create a new empty repository on GitHub.
5. Open the project in VSCode, launch the terminal and connect the project to
   the GitHub repository
   [as instructed](https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories#changing-a-remote-repositorys-url).
6. Set the basic dependencies of the project `npm install`.
7. Start the development mode by executing the command `npm start`.
8. Browse to [http://localhost:3000](http://localhost:3000). This page will
   automatically restart after saving the changes to project files.

## Deploy

The production version of the project will be automatically lynching, gathering
and deploying on GitHub Pages, in a branch `gh-pages`, every time it is updated
branch `main`. For example, after a direct flush or taken pool requisition. For
it is necessary to edit the field `homepage` in the file `package.json`
replacing `your_username` and `your_repo_name` on their own, and send the
changes to GitHub.

```json
"homepage": "https://your_username.github.io/your_repo_name/"
```

Then you need to go to the GitHub Repository settings (`Settings` > `Pages`) and
display the distribution of the production version of files from the folder
`/root` of the branch `gh-pages`, it wasn’t done automatically.

### Deploy status

The status of the extreme commit is displayed by an icon near its ID.

- **Yellow** - creaacting and deploying project.
- **Green** - deploy completed successfully.
- **Red** - there was an error during linting, assembly or cornflower.

For more detailed status information, click on the icon, and to the drop-down
window, click the link `Details`.

### Live Page

After a while, usually a couple of minutes, the live page can be viewed at the
address specified in the edited property `homepage`.

If an empty page is opened, make sure that the `Console` tab does not contain
any errors connected with wrong paths to CSS and JS project files (**404**).
Rather in total, you have an incorrect property value of `homepage` in the file
`package.json`.

### Routing

Since the application uses the `react-router-dom` library for routing, it is
necessary to further configure the component `<BrowserRouter>`, by passing in
prop `basename` is the exact name of your repository. Slashes at the beginning
and end of the line mandatorily.

```jsx
<BrowserRouter basename="/your_repo_name/">
  <App />
</BrowserRouter>
```

## How It Works

![How it works](./assets/how-it-works.png)

1. After each flush in the branch `main` GitHub repository, a special script
   (GitHub Action) from the file `.github/workflows/deploy.yml`.
2. All repository files are copied to the server where the project is
   initialized and linting and assembly in front of the defla.
3. If all steps are successful, the assembled production version of the project
   files is sent to the branch `gh-pages`. Otherwise, in the execution log
   script will indicate what the problem is.
