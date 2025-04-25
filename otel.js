const { NodeSDK } = require('@opentelemetry/sdk-node');
const { OTLPTraceExporter } = require('@opentelemetry/exporter-trace-otlp-http');
const { getNodeAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-node');
const { diag, DiagConsoleLogger, DiagLogLevel } = require('@opentelemetry/api');

// Enable OpenTelemetry internal logging (optional, for debugging)
diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.INFO);

// Configure the OTLP Trace Exporter to send traces to Jaeger
const traceExporter = new OTLPTraceExporter({
  url: 'http://localhost:4318/v1/traces', // Jaeger's OTLP HTTP endpoint
});

// Initialize the OpenTelemetry Node SDK
const sdk = new NodeSDK({
  traceExporter,
  instrumentations: [getNodeAutoInstrumentations()], // Automatically instrument libraries like Express, MongoDB, etc.
});

// Start the SDK
sdk.start()
  .then(() => console.log('Tracing initialized'))
  .catch((error) => console.error('Error initializing tracing', error));

// Gracefully shut down the SDK on process exit
process.on('SIGTERM', () => {
  sdk.shutdown()
    .then(() => console.log('Tracing terminated'))
    .catch((error) => console.error('Error terminating tracing', error))
    .finally(() => process.exit(0));
});