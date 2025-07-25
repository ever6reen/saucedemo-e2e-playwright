// sheetsWriter.ts
import { google } from 'googleapis';
import fs from 'fs';

// 1. JSON 키로 인증
const auth = new google.auth.GoogleAuth({
  keyFile: 'credencials/google-service-account.json',
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

async function writeResults() {
  const client = await auth.getClient();
  const sheets = google.sheets({ version: 'v4', auth });

  const spreadsheetId = '1RGF6s_-XcK_N-fTo2g1mWaAnaaUh3kRrVchpf4Om1GI';
  const sheetName = 'Playwright Results';

  // 2. 결과 파일 읽기
  const data = JSON.parse(fs.readFileSync('test-results/result.json', 'utf-8'));

  // 3. 필요한 정보 추출 (예시: 각 테스트 이름과 결과)
  const values = data.suites.flatMap((suite: any) =>
    suite.specs.map((spec: any) => [
      spec.title.join(' > '),
      spec.tests[0].results[0].status,
    ])
  );

  // 4. Google Sheets에 쓰기
  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: `${sheetName}!A1`,
    valueInputOption: 'RAW',
    requestBody: {
      values: [['Test Name', 'Status'], ...values],
    },
  });

  console.log('✅ Google Sheets 업데이트 완료!');
}

writeResults().catch(console.error);
