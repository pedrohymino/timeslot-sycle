# 📆 Available Timeslots

## Overview

Your team is building a scheduling feature that will allow a clinic staff member to book appointments.

You are tasked with generating a list of _available_ time slots. Each time slot indicates a period of
bookable time for an appointment.

For example: You're looking to book an appointment between the hours of 2pm and 4pm, and your clinic
settings indicate that appointmentss can occur in 15 minute increments with variable duration.
You want to see the list of durations of those available time slots between 2 and 4pm.

A list of available appointments would be as follows:

```JS
15 minutes
30 minutes
45 minutes
... more
2 hours
```

> Note: You are not expected to generate the start/end times for the appointments, only the possible durations given a duration (increment) value.

## Details

The maximum number of hours in any given day that is bookable is **8 hours**.

The length of each time slot is configurable. You will be asked to support any time slot duration.

_For example: ClinicA may wish to have 15-minute increments so their appointments can be 15-, 30-, 45-minutes long, etc to a maximum of 8 hours. ClinicB may wish to have 25-minute increments._

## ✏️ Basic Requirements

- Write a function that takes in one parameter and returns the output below:

  ```JS
  // expected output with '15' as the increment value
  [
      { label: "15 min", minutes: 15 },
      { label: "30 min", minutes: 30 },
      { label: "45 min", minutes: 45 },
      { label: "1 hour", minutes: 60 },
      { label: "1 hour 15 min", minutes: 75 },
      ...
      { label: "3 hours 45 minutes", minutes: 225 },​
      ...
      // up to a maximum of 8 hours.
  ];

  // expected output with '35' as the increment value
  [
      { label: "35 min", minutes: 35 },
      { label: "1 hour 10 minutes", minutes: 70 },
      { label: "1 hour 45 minutes", minutes: 105  },
      { label: "2 hours 20 minutes", minutes: 140 },
      ...
      { label: "7 hours", minutes: 420 },
      ...
      // up to a maximum of 8 hours.
  ];
  ```

- Any value of time slot should be supported. Ex: 15, 35, 75, etc

## 🍬Nice-to-haves

_(in no particular order)_

- Number of bookable hours is configurable (ex: Clinic may only be bookable for 6 hours of the day)
- Display the results in a select input with a label titled 'Available timeslots' and the labels displayed in the options.
  - ![Hello World](https://i.ibb.co/VgTTz83/Screen-Shot-2020-08-19-at-1-08-50-PM.png)
- Generate a _single_ time slot given 2 parameters:
  - start time in ISO datetime format (ex: `"2020-08-26T07:00:00.000Z"`)
  - desired length of appointment in minutes (ex: `25`, meaning 25 minutes)
  ```JS
  // expected output with "1990-03-17T11:45:00.000Z" and '75' as parameters
  { label: "03:45 - 05:00", minutes: 75 }
  ```

---

## 📓Notes

Make sure that your code is presentable because you will be presenting it!

Please feel free to ask any questions you may have as you go. We are here to see you at your best and clarifications are encouraged and welcome.

---
