function yesterdayDate() {
  const today = new Date()
  const yesterday = new Date(today)

  yesterday.setDate(yesterday.getDate() - 1)

  return yesterday
}

module.exports = yesterdayDate()