const ical = require('ical-generator');

exports.handler = async function(event, context) {
  const calendar = ical({name: 'Exam Calendar'});

  // Add your exam events here
  calendar.createEvent({
    start: new Date(2024, 8, 12),
    end: new Date(2024, 8, 12),
    summary: 'GCSE Basedata issued',
    description: 'GCSE Basedata is issued on this day.'
  });

  calendar.createEvent({
    start: new Date(2024, 8, 21),
    end: new Date(2024, 8, 21),
    summary: 'BTEC Entry deadline',
    description: 'Deadline for BTEC entries.'
  });

  calendar.createEvent({
    start: new Date(2024, 8, 30),
    end: new Date(2024, 8, 30),
    summary: 'IGCSE Speaking tests begin',
    description: 'IGCSE Speaking tests start on this day.'
  });

  const icalString = calendar.toString();

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/calendar; charset=utf-8',
      'Content-Disposition': 'attachment; filename="exam-calendar.ics"'
    },
    body: icalString
  };
};
