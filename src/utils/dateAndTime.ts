export function formatDay(dateString: string, index: number) {
    if (index === 0) return "Today"
    if (index === 1) return "Tomorrow"

    const date = new Date(dateString)

    return date.toLocaleDateString("en-US", {
        weekday: "long"
    })
}

export function formatTime(timeString: string) {
    return new Date(timeString).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true
    });
}

export function formatDate(dateString: string) {
    return new Date(dateString).toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric"
    })
}

export function getCurrentHourIndex(
    times: string[],
    currentTime: string
) {
    const currentHour = currentTime.slice(0, 13);

    return times.findIndex((time) =>
        time.startsWith(currentHour)
    );
}