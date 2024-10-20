/**
* @OnlyCurrentDoc
*/
function sendMap() {
    var sheet = SpreadsheetApp.getActiveSheet();
    var address = sheet.getRange("A1").getValue();
    var map = Maps.newStaticMap().addMarker(address);
    GmailApp.sendEmail("student-04-49551823f159@qwiklabs.net", "Map", 'See below.', {attachments:[map]});
}
