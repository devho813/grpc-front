import * as jspb from "google-protobuf"

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';

export class PostMessageResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostMessageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PostMessageResponse): PostMessageResponse.AsObject;
  static serializeBinaryToWriter(message: PostMessageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostMessageResponse;
  static deserializeBinaryFromReader(message: PostMessageResponse, reader: jspb.BinaryReader): PostMessageResponse;
}

export namespace PostMessageResponse {
  export type AsObject = {
    status: string,
  }
}

export class Message extends jspb.Message {
  getText(): string;
  setText(value: string): void;

  getCreateTime(): number;
  setCreateTime(value: number): void;

  getAuthorName(): string;
  setAuthorName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Message.AsObject;
  static toObject(includeInstance: boolean, msg: Message): Message.AsObject;
  static serializeBinaryToWriter(message: Message, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Message;
  static deserializeBinaryFromReader(message: Message, reader: jspb.BinaryReader): Message;
}

export namespace Message {
  export type AsObject = {
    text: string,
    createTime: number,
    authorName: string,
  }
}

