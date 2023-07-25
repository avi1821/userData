/**
 * Appscript for sheets
 */
const sheets = SpreadsheetApp.openByUrl(
  "https://docs.google.com/spreadsheets/d/1gAlq50Q3Va9YWUZ5xCylwREOtGlwsX9P8K4sWeGiPPQ/edit#gid=0"
);
const sheet = sheets.getSheetByName("user");
function doPost(e) {
  let data = e.parameter;
  sheet.appendRow([data.name, data.mobile_number, data.t_create]);
  return ContentService.createTextOutput(
    `Done ${data.name}, ${data.mobile_number}, ${data.t_create}`
  );
}
