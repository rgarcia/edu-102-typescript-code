import * as activity from '@temporalio/activity';

export async function importSalesData(): Promise<string> {
  const context = activity.Context.current();
  context.log.info("importing sales data", {});
  return `sales data imported`;
}

export async function runDailyReport(): Promise<string> {
  const context = activity.Context.current();
  context.log.info("Daily report run", {});
  return `daily report run`;
}
