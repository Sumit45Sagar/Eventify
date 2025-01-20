const express = require('express');
const { google } = require('googleapis');

const router = express.Router();

router.get('/events', async (req, res) => {
  if (!req.user) return res.status(401).send('Unauthorized');
  const { accessToken } = req.user;
  const calendar = google.calendar({ version: 'v3', auth: accessToken });

  try {
    const response = await calendar.events.list({
      calendarId: 'primary',
      timeMin: new Date().toISOString(),
      singleEvents: true,
      orderBy: 'startTime',
    });
    res.json(response.data.items);
  } catch (error) {
    res.status(500).send('Error fetching calendar events');
  }
});

module.exports = router;
