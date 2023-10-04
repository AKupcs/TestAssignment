# Artis Kupčs test assignment project

## This project is made of 3 parts 
1. **CleanTechSources** - server that emulates Clean-Tech energy sources like solar panels and windmills, It has API endpoints that provide metrics like it would be a real energy source.
2. **CleanTechProxy** - proxy server that makes API requests to solar panel and windmill (CleanTechSources), combines them and return processed json response for FE part.
3. **Dashboard** - FE part that makes requests to CleanTechProxy and shows real-time Clean-Tech energy sources metrics to user.

## Additional done
- Simple error handling in case CleanTechProxy or CleanTechSources server is not responding
- Loading screen before getting first response
- Responsive dashboard according to screen size
- Additional data along with metrics to make dashboard more interesting

## How to run project
to run project enter commands in command prompt

1. CleanTechSources - **dotnet run --project CleanTechSources** from project root directory
2. CleanTechProxy - **dotnet run --project CleanTechProxy** from project root directory
3. Dashboard - **npm start** from Dashboard directory (npm have to be installed)