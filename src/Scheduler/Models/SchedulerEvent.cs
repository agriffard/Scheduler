namespace Scheduler.Models;

public sealed class SchedulerEvent
{
    public required string Id { get; set; }

    public required string Title { get; set; }

    public DateTime Start { get; set; }

    public DateTime End { get; set; }

    public string? Color { get; set; }
}
