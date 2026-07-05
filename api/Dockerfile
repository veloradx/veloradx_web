FROM mcr.microsoft.com/dotnet/sdk:10.0 AS builder

WORKDIR /src

COPY ["../VeloraDX.sln", "."]
COPY ["VeloraDX.Api/", "VeloraDX.Api/"]
COPY ["../VeloraDX.Application/", "VeloraDX.Application/"]
COPY ["../VeloraDX.Infrastructure/", "VeloraDX.Infrastructure/"]
COPY ["../VeloraDX.Domain/", "VeloraDX.Domain/"]

RUN dotnet restore "VeloraDX.sln"

RUN dotnet build "VeloraDX.sln" -c Release -o /app/build

FROM mcr.microsoft.com/dotnet/sdk:10.0 AS publish

WORKDIR /src

COPY ["../VeloraDX.sln", "."]
COPY ["VeloraDX.Api/", "VeloraDX.Api/"]
COPY ["../VeloraDX.Application/", "VeloraDX.Application/"]
COPY ["../VeloraDX.Infrastructure/", "VeloraDX.Infrastructure/"]
COPY ["../VeloraDX.Domain/", "VeloraDX.Domain/"]

RUN dotnet publish "VeloraDX.Api/VeloraDX.Api.csproj" -c Release -o /app/publish

FROM mcr.microsoft.com/dotnet/aspnet:10.0

WORKDIR /app

COPY --from=publish /app/publish .

EXPOSE 5000

ENV ASPNETCORE_URLS=http://+:5000
ENV ASPNETCORE_ENVIRONMENT=Production

ENTRYPOINT ["dotnet", "VeloraDX.Api.dll"]
