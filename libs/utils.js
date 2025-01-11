export function absoluteUrl(input) {
    return `${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}${input}`;
}

export function formatDate(date) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(date).toLocaleDateString("en-US", options);
}

export function formatDateFull(date) {
    //crete this format: Thursday, May 30, 2016, 09:49 AM
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
    };
    return new Date(date).toLocaleDateString("en-US", options);
}

export function formatDateYear(date) {
    const options = { year: "numeric" };
    return new Date(date).toLocaleDateString("en-US", options);
}

export function formatDateMonthDayYear(date) {
    const options = { month: "long", day: "numeric", year: "numeric" };
    return new Date(date).toLocaleDateString("en-US", options);
}
