Dit is de standaard readme van Ripple project (met uitzondering van stap 4 bij 'Getting Started', die ik zelf heb bijgedaan):

# Ripple Basic Template

A minimal Ripple application template with TypeScript and Vite.

## Getting Started

1. Install dependencies:

    ```bash
    npm install # or pnpm or yarn
    ```

2. Start the development server:

    ```bash
    npm run dev
    ```

3. Build for production:
    ```bash
    npm run build
    ```
    
    ^ this will build the app and create a "dist" folder
3. Extra (Serve app through http server, but install http-server first!):
    ```bash
    npx http-server dist
    ```

## Code Formatting

This template includes Prettier with the Ripple plugin for consistent code formatting.

### Available Commands

- `npm run format` - Format all files
- `npm run format:check` - Check if files are formatted correctly

### Configuration

Prettier is configured in `.prettierrc` with the following settings:

- Uses tabs for indentation
- Single quotes for strings
- 100 character line width
- Includes the `@ripple-ts/prettier-plugin` for `.ripple` file formatting

### VS Code Integration

For the best development experience, install the [Prettier VS Code extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) and the [Ripple VS Code extension](https://marketplace.visualstudio.com/items?itemName=ripple-ts.vscode-plugin).

## Learn More

- [Ripple Documentation](https://github.com/Ripple-TS/ripple)
- [Vite Documentation](https://vitejs.dev/)
