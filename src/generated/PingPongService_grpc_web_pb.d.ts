import * as grpcWeb from 'grpc-web';

import {
  PingRequest,
  PongResponse} from './PingPongService_pb';

export class PingPongServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  pingPong(
    request: PingRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: PongResponse) => void
  ): grpcWeb.ClientReadableStream<PongResponse>;

}

export class PingPongServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  pingPong(
    request: PingRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<PongResponse>;

}

