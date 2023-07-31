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

## Add Hotkey to SSMS
Save a .bat file anywhere on your machine with the command line to open the SQL to C# URL.
```cmd
start "" https://nathanspencer1.github.io/sql-to-csharp/
```
In SSMS go to _Tools > External Tools..._. Enter a title and the path to the .bat file. Apply changes.

![image](https://user-images.githubusercontent.com/80844931/194934433-559f1423-c343-4b4d-b4db-f54d9035a2f1.png)

To set a hotkey for the external tool, go to _Tools > Options... > Keyboard_ and search for _Tools.ExternalCommand1_. The number at the end will match the index of the entry in the External Tools window. Assign a hotkey and click OK.

![image](https://user-images.githubusercontent.com/80844931/194935630-70ba5e54-316a-4842-a4c9-a01d3fcd7c1f.png)

## PostgreSQL Support

This tool can be utilized for PostgreSQL databases by running the following query and importing the column information.
```sql
SELECT
  column_name,
  CASE data_type
    WHEN 'integer' THEN 'int'
    WHEN 'boolean' THEN 'bit'
    ELSE data_type
  END as type,
  CASE is_generated WHEN 'NEVER' THEN 'no' ELSE 'yes' END as computed,
  character_maximum_length as length,
  numeric_precision as prec,
  numeric_scale as scale,
  is_nullable as nullable
FROM information_schema.columns
WHERE table_name = 'your_table_name';
```
