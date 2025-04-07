FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src

# Copy just the project file first
COPY ["backend/StoreBackend/StoreBackend.csproj", "backend/StoreBackend/"]
RUN dotnet restore "backend/StoreBackend/StoreBackend.csproj"

# Then copy everything else
COPY . .
WORKDIR "/src/backend/StoreBackend"
RUN dotnet build -c Release -o /app/build

FROM build AS publish
RUN dotnet publish -c Release -o /app/publish

FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "StoreBackend.dll"]