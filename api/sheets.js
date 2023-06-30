const { GoogleSpreadsheet } = require('google-spreadsheet');
const { JWT } = require('google-auth-library');

require('dotenv').config();


async function main() {

  const sheetId = process.env.GOOGLE_SHEET_ID
  console.log("sheetId", sheetId)
  const auth = new JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const doc = new GoogleSpreadsheet(sheetId, auth);

  await doc.loadInfo(); // loads document properties and worksheets
  console.log(doc.title);

}

main().catch(console.error);