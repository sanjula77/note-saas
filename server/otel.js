const { NodeSDK } = require('@opentelemetry/sdk-node');
const { getNodeAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-node');
const { OTLPTraceExporter } = require('@opentelemetry/exporter-trace-otlp-http');

const sdk = new NodeSDK({
  traceExporter: new OTLPTraceExporter({
    url: 'http://localhost:4318/v1/traces', // OTLP endpoint
  }),
  instrumentations: [getNodeAutoInstrumentations()],
});

try {
  sdk.start();
  console.log('✅ OpenTelemetry tracing started (backend)');
} catch (err) {
  console.error('❌ Failed to start OpenTelemetry SDK:', err);
}
