import { Connection, Client } from '@temporalio/client';
import { deterministicWorkflow } from './workflows';
import { nanoid } from 'nanoid';

async function run() {
  const connection = await Connection.connect({ address: 'localhost:7233' });

  const client = new Client({
    connection,
  });

  const handle = await client.workflow.start(deterministicWorkflow, {
    taskQueue: 'nondeterminism-demo',
    args: [],
    workflowId: 'workflow-' + nanoid(),
  });
  console.log(`Started workflow ${handle.workflowId}`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
