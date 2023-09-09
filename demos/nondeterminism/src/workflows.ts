import type * as activities from './activities';
import { proxyActivities, sleep, log } from '@temporalio/workflow';

// Set up the activities with their options
const { importSalesData, runDailyReport } = proxyActivities<typeof activities>({
  startToCloseTimeout: '45 minutes',
});

export async function deterministicWorkflow(): Promise<void> {
  // Execute ImportSalesData activity
  await importSalesData();

  if (getRandomNumber(1, 100) >= 50) {
    log.info("sleeping...", {});
    await sleep("10 seconds");
  }

  log.info("Preparing to run daily report", {});

  // Execute RunDailyReport activity
  await runDailyReport();
}

function getRandomNumber(min:number, max:number) {
  let seed = 1234;
  seed = Math.floor(((seed * seed) % 10000) / 100);
  return min + seed % (max - min + 1);
}
