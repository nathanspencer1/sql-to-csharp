# SQL to C#

A tool used to help create Entity and DTO (Data Transfer Object) C# classes from a SQL table. In SSMS highlight a table name and press Alt+F1 to get the table info. You must have the database the table is in selected. Copy the table info into your clipboard and click the 'Import Clipboard' button to fill the table and generate the classes. You can change the C# Name of any property using the text field. You can also modify the checkboxes that control if a property is nullable, public, or has a getter/setter.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run deploy`

Deploys the site to https://nathanspencer1.github.io/sql-to-csharp. Runs `npm run build` followed by `gh-pages -d build`. Deploys an optimized build to github pages. See https://github.com/gitname/react-gh-pages. The repo needs to be set to Deploy from the `gh-pages` branch. See https://github.com/nathanspencer1/sql-to-csharp/settings/pages.
