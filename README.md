# Svelte.NetCore

This template provides a robust starting point for projects utilizing a .NET Core 8 backend API and a Svelte / SvelteKit frontend as a Single Page Application (SPA). Designed to streamline development, this template combines powerful server-side API capabilities with a responsive, dynamic front end. Built following Microsoft’s ASP.NET Core SPA guidelines, this project serves as a foundation for scalable, modern web applications.

## Libraries Used

### Svelte Frontend
- Svelte 5
- SvelteKit 
- Vite (for building)
- TypeScript 
- Tailwind CSS


### .NET Core 8 Backend
- ASP.NET Core Web API


## Getting Started

### Prerequisites
- Node.js (version 20.X or higher)
- .NET Core SDK (version 8.X or higher)

### Setup and Run

1. Clone the repository:
   ```
   git clone https://github.com/your-username/Svelte.NetCore.git
   cd Svelte.NetCore
   ```

2. Set up the Svelte frontend:
   ```
   cd Sample.Svelte
   npm install
   npm run predev
   ```

3. Set up the .NET Core backend:

    In visual studio right click on the Sample.Api project and select "properties"
    Go to the "Debug" tab
    Uncheck "Launch browser"
    ![alt text](README_images/image.png)
4. Run the backend:

    In visual studio right click on the Sample.Api project and select "Set as Startup Project"
    Press F5 to run the project

5. In a new terminal, run the frontend:
   ```
   cd ../Sample.Svelte
   npm run dev
   ```

6. Hit F5 in Visual Studio Code to launch the browser or navigate to `http://localhost:5173` in your browser



## Contributing



## License

MIT License
