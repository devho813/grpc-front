import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';

import {
  Message,
  PostMessageResponse} from './MessageService_pb';

export class MessageServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  getMessageStream(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<Message>;

  postMessage(
    request: Message,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: PostMessageResponse) => void
  ): grpcWeb.ClientReadableStream<PostMessageResponse>;

}

export class MessageServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  getMessageStream(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<Message>;

  postMessage(
    request: Message,
    metadata?: grpcWeb.Metadata
  ): Promise<PostMessageResponse>;

}

