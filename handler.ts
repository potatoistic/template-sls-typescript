import type { APIGatewayProxyHandlerV2 } from 'aws-lambda';

export const hello: APIGatewayProxyHandlerV2 = async () => {
  const response = {
    timestamp: Date.now(),
    message: 'Hello World',
  };

  return {
    statusCode: 200,
    body: JSON.stringify(response),
  };
};
