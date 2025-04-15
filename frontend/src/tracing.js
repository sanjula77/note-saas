import { WebTracerProvider } from '@opentelemetry/sdk-trace-web';
import { BatchSpanProcessor } from '@opentelemetry/sdk-trace-base';
import { ConsoleSpanExporter } from '@opentelemetry/sdk-trace-base';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
import { FetchInstrumentation } from '@opentelemetry/instrumentation-fetch';
import { registerInstrumentations } from '@opentelemetry/instrumentation';
import { diag, DiagConsoleLogger, DiagLogLevel } from '@opentelemetry/api';

try {
  // Optional: enable OpenTelemetry internal logging (for debugging)
  diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.INFO);

  // Create the provider
  const provider = new WebTracerProvider();

  // Set up a Console Exporter (for dev)
  const consoleExporter = new ConsoleSpanExporter();
  provider.addSpanProcessor(new BatchSpanProcessor(consoleExporter));

  // Optional: OTLP exporter (Jaeger, etc.)
  const otlpExporter = new OTLPTraceExporter({
    url: 'http://localhost:4318/v1/traces',
  });
  provider.addSpanProcessor(new BatchSpanProcessor(otlpExporter));

  // Register the provider globally
  provider.register();

  // Auto-instrument fetch calls
  registerInstrumentations({
    instrumentations: [new FetchInstrumentation()],
  });
} catch (err) {
  console.error('Failed to initialize OpenTelemetry tracing:', err);
}
