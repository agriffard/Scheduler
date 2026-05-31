# Scheduler docs

`Scheduler` is a .NET 10 Blazor component library focused on calendar planning scenarios.

## Views

- **Month**: month grid for high-level planning.
- **Week**: hourly planning over the current week.
- **Day**: detailed single-day planning.

All views expose draggable and resizable event blocks. When a user drags or resizes an event, the component updates the event in memory and emits `OnEventChanged`.

## Data model

- `SchedulerEvent`: event identifier, title, start/end times and optional color.
- `SchedulerEventChangedArgs`: old/new values available after drag/resize.

## Sample app

Use `/samples/Scheduler.SampleApp` as the reference host to validate interactions and UI behavior.
