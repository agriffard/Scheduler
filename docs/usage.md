# Usage guide

## 1) Reference namespaces

```razor
@using Scheduler
@using Scheduler.Models
```

## 2) Render the component

```razor
<SchedulerComponent CurrentDate="CurrentDate"
                    View="View"
                    Events="Events"
                    OnEventChanged="OnEventChanged" />
```

## 3) Handle event updates

```csharp
private Task OnEventChanged(SchedulerEventChangedArgs args)
{
    // persist args.Event.Start and args.Event.End
    return Task.CompletedTask;
}
```

## Notes

- `SchedulerView.Month` focuses on date-level moves/resizes.
- `SchedulerView.Week` and `SchedulerView.Day` apply 15-minute snapping.
- `StartHour` and `EndHour` can be used to tune visible hours in week/day mode.
