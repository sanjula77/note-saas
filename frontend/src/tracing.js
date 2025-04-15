import { WebTracerProvider } from '@opentelemetry/sdk-trace-web';
import { BatchSpanProcessor } from '@opentelemetry/sdk-trace-base';
import { ConsoleSpanExporter } from '@opentelemetry/sdk-trace-base';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
import { diag, DiagConsoleLogger, DiagLogLevel } from '@opentelemetry/api';

// Enable OpenTelemetry internal logging (for debugging)
diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.INFO);

try {
  // Create the provider
  const provider = new WebTracerProvider();

  // Add a ConsoleSpanExporter for debugging
  provider.addSpanProcessor(new BatchSpanProcessor(new ConsoleSpanExporter()));

  // Add an OTLP exporter (e.g., Jaeger or OpenTelemetry Collector)
  const otlpExporter = new OTLPTraceExporter({
    url: 'http://localhost:4318/v1/traces', // Ensure the OTLP server is running
  });
  provider.addSpanProcessor(new BatchSpanProcessor(otlpExporter));

  // Register the provider globally
  provider.register();

  console.log('OpenTelemetry tracing initialized successfully.');
} catch (error) {
  console.error('Failed to initialize OpenTelemetry tracing:', error);
}
