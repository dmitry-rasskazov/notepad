import { sprintf } from 'sprintf-js';

export function currentDateAsString()
{
    const dateObject = new Date();
    return sprintf(
        "%04d-%02d-%02d %02d:%02d:%02d",
        dateObject.getFullYear(),
        dateObject.getMonth(),
        dateObject.getDay(),
        dateObject.getHours(),
        dateObject.getMinutes(),
        dateObject.getSeconds(),
    );
}
