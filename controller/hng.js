const getRequest = async (req, res) => {
  // Get the query parameters from the request query
  const { slack_name, track } = req.query;

  // Get the current day and time in UTC
  const currentDay = new Date().toLocaleString('en-US', { weekday: 'long' });
  const currentUtcTime = new Date().toISOString().split('.')[0] + 'Z' ;

  // Validate UTC time to within +/-2 minutes of the current time
  const currentTime = new Date();
  const twoMinutesAgo = new Date(currentTime);
  twoMinutesAgo.setMinutes(currentTime.getMinutes() - 2);
  const twoMinutesFromNow = new Date(currentTime);
  twoMinutesFromNow.setMinutes(currentTime.getMinutes() + 2);

  if (
    new Date(currentUtcTime) < twoMinutesAgo ||
    new Date(currentUtcTime) > twoMinutesFromNow
  ) {
    return res.status(400).json({ error: 'Invalid UTC time' });
  }

  // Construct the response JSON object. the Slack_name and track will be passed in the request.
  const response = {
    slack_name,
    "current_day": currentDay,
    "utc_time": currentUtcTime,
    track,
    "github_file_url": 'https://github.com/Chrinonso/HNG-Internships/blob/main/controller/hng.js',
    "github_repo_url": 'https://github.com/Chrinonso/HNG-Internships',
    "status_code": 200,
  };

  // Send the JSON response
  res.status(200).json(response);
};

module.exports = getRequest;