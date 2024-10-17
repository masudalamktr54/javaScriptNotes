# Date and Time in javascript - 13

```javascript
let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023");

console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);

console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();

console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString("default", {
  weekday: "long",
  timeZone: "Asia/Kolkata",
});
```

### Notes >>

---

- JavaScript `Date` objects represent a single moment in time in a platform-independent format. `Date` objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the _epoch_).

- `YYYY` is the year, with four digits (`0000` to `9999`), or as an expanded year of `+` or `-` followed by six digits. The sign is required for expanded years. `-000000` is explicitly disallowed as a valid year.

- `MM` is the month, with two digits (`01` to `12`).

- `DD` is the day of the month, with two digits (`01` to `31`).

- `HH` is the hour, with two digits (`00` to `23`). As a special case, `24:00:00` is allowed, and is interpreted as midnight at the beginning of the next day. Defaults to `00`.

- `mm` is the minute, with two digits (`00` to `59`). mm is the minute, with two digits (00 to 59). Defaults to `00`.

- `ss` is the second, with two digits (`00` to `59`). ss is the second, with two digits (00 to 59). Defaults to `00`.

- `SSS` is the millisecond, with three digits (`000` to `999`). SSS is the millisecond, with three digits (000 to 999). Defaults to `000`.

> > Various components can be omitted, so the following are all valid:

- Date-only form: `YYYY`, `YYYY-MM`, `YYYY-MM-DD`

- Date-time form: one of the above date-only forms, followed by `T`, followed by `HH:mm`, `HH:mm:ss`, or `HH:mm:ss.sss`. Each combination can be followed by a time zone offset.

**For example**, `"2011-10-10"` (date-only form), `"2011-10-10T14:48:00"` (date-time form), or `"2011-10-10T14:48:00.000+09:00"` (date-time form with milliseconds and time zone) are all valid date time strings.
