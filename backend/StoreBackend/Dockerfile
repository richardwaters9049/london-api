FROM mcr.microsoft.com/dotnet/sdk:9.0 AS development
WORKDIR /src

# First, copy just the solution/project files
COPY ["backend/StoreBackend/*.csproj", "backend/StoreBackend/"]
COPY ["backend/*.sln", "backend/"]

# Force complete NuGet restore
RUN dotnet restore "backend/StoreBackend/StoreBackend.csproj" --disable-parallel

# Then copy everything else
COPY . .
WORKDIR "/src/backend/StoreBackend"

# Development command with forced restore
CMD ["dotnet", "watch", "run"]

# Production build stage (keep your existing build)
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src
COPY ["backend/StoreBackend/StoreBackend.csproj", "backend/StoreBackend/"]
RUN dotnet restore "backend/StoreBackend/StoreBackend.csproj"
COPY . .
WORKDIR "/src/backend/StoreBackend"
RUN dotnet build -c Release -o /app/build

FROM build AS publish
RUN dotnet publish -c Release -o /app/publish

FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "StoreBackend.dll"]