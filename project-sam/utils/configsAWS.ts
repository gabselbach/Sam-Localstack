import { SQSClient, CreateQueueCommand } from "@aws-sdk/client-sqs";

export const SQS = new SQSClient({
    region: "us-east-1",
    endpoint: "http://172.17.0.1:4566",
    credentials: {
      accessKeyId: "test",
      secretAccessKey: "test",
    },
    logger: console,
  });


export function createQueue(name: string): CreateQueueCommand {
    return new CreateQueueCommand({
        QueueName: name,
        Attributes: {
          DelaySeconds: "0",
          MessageRetentionPeriod: "86400", // Retenção de 1 dia em segundos
        },
      });
}