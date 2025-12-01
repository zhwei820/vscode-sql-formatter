# Sql Formatter

Format SQL files using the [sql-formatter-plus](https://github.com/kufii/sql-formatter-plus) npm package.

## Building for Local Installation

To build the extension as a `.vsix` file for local installation:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Install the VS Code Extension CLI (`vsce`):
   ```bash
   npm install -g @vscode/vsce
   ```
   
   Or use it directly with npx (no global install needed):
   ```bash
   npx @vscode/vsce package
   ```

3. Package the extension:
   ```bash
   vsce package
   ```
   
   Or with npx:
   ```bash
   npx @vscode/vsce package
   ```

4. This will generate a `vscode-sql-formatter-{version}.vsix` file in the project directory.

   **Note**: The `.vscodeignore` file has been configured to exclude unnecessary files (tests, documentation, development files from node_modules, etc.) to reduce the extension package size.

5. Install the `.vsix` file in VS Code:
   - Open VS Code
   - Go to Extensions view (Ctrl+Shift+X / Cmd+Shift+X)
   - Click the "..." menu at the top of the Extensions view
   - Select "Install from VSIX..."
   - Choose the generated `.vsix` file

## Configuration

**`sql-formatter.dialect`**: Changes which dialect to format with (`sql`: Standard SQL, `n1ql`: Couchbase N1QL, `db2`: IBM DB2, `pl/sql`: Oracle PL/SQL). Defaults to `sql`.

**`sql-formatter.uppercase`**: Convert keywords to uppercase. Defaults to false.

**`sql-formatter.linesBetweenQueries`**: Number of linebreaks between queries. Defaults to 2.
