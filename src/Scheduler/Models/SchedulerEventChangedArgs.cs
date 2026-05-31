namespace Scheduler.Models;

public sealed class SchedulerEventChangedArgs
{
    public required SchedulerEvent Event { get; init; }

    public required DateTime PreviousStart { get; init; }

    public required DateTime PreviousEnd { get; init; }
}
