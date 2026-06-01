# Scheduler

[![CI](https://github.com/agriffard/Scheduler/actions/workflows/ci.yml/badge.svg)](https://github.com/agriffard/Scheduler/actions/workflows/ci.yml)
[![NuGet](https://img.shields.io/nuget/v/Scheduler.svg)](https://www.nuget.org/packages/Scheduler)
[![GitHub Pages](https://github.com/agriffard/Scheduler/actions/workflows/pages.yml/badge.svg)](https://github.com/agriffard/Scheduler/actions/workflows/pages.yml)

`Scheduler` is a Blazor component library targeting **.NET 10**. It provides month, week and day calendar views with draggable and resizable events.

## Features

- Month, week and day scheduler views
- Draggable events
- Resizable events
- Event change callback (`OnEventChanged`) for persistence
- Sample Blazor WebAssembly app for manual testing

## Install from NuGet

```bash
dotnet add package Scheduler
```

## Quick start

```razor
@using Scheduler
@using Scheduler.Models

<SchedulerComponent CurrentDate="currentDate"
                    View="SchedulerView.Week"
                    Events="events"
                    OnEventChanged="OnEventChanged" />
```

```csharp
private readonly IList<SchedulerEvent> events =
[
    new SchedulerEvent
    {
        Id = "evt-1",
        Title = "Planning",
        Start = DateTime.Today.AddHours(9),
        End = DateTime.Today.AddHours(10)
    }
];

private Task OnEventChanged(SchedulerEventChangedArgs args)
{
    // Save updated event times in your store
    return Task.CompletedTask;
}
```

## Repository layout

- `/src/Scheduler`: NuGet-ready Blazor component library
- `/samples/Scheduler.SampleApp`: sample app to test the component behavior
- `/docs`: usage and architecture docs

## Local build and test

```bash
dotnet build Scheduler.sln
dotnet test Scheduler.sln
```

Run sample app:

```bash
dotnet run --project /tmp/workspace/agriffard/Scheduler/samples/Scheduler.SampleApp/Scheduler.SampleApp.csproj
```

## Docs

- [Overview](docs/index.md)
- [Component usage](docs/usage.md)
