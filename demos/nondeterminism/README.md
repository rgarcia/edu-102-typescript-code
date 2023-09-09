# Nondeterminism demo

This project demonstrates nondeterministic activity in a Workflow. It uses
a random number generator that's nondeterministic, rather than the sandboxed
`Math.random` function. 




### Running this sample

1. `temporal server start-dev` to start [Temporal Server](https://github.com/temporalio/cli/#installation).
1. `npm install` to install dependencies.
1. `npm run start` to start the Worker.
1. In another shell, `npm run workflow` to run the Workflow Client.
1.  Open the Web UI, navigate to the detail page for this execution, and then click 
   the **Download** button that appears on the right side of the 
   page, just above the table showing the Event History.
   Save the file as `history.json` in your `nondeterminism` directory.
1. Run `npm test` to run a test that replays the history.
1. Observe that the test fails because the Workflow is not deterministic.


