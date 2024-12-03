import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { createQueue, SQS } from '@utils/configsAWS';

export const create_sqs = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    
      try {
        const response = await SQS.send(createQueue(event.pathParameters?.name || 'fila'));
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: `Fila criada com sucesso no LocalStack! URL: ${response.QueueUrl}`,
            }),
        }
      } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: `Erro ao criar a fila no LocalStack:, ${error}`,
            }),
        }
      }
};
