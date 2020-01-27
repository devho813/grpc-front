/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')
const proto = require('./MessageService_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.MessageServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.MessageServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.Message>}
 */
const methodDescriptor_MessageService_GetMessageStream = new grpc.web.MethodDescriptor(
  '/MessageService/GetMessageStream',
  grpc.web.MethodType.SERVER_STREAMING,
  google_protobuf_empty_pb.Empty,
  proto.Message,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Message.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.Empty,
 *   !proto.Message>}
 */
const methodInfo_MessageService_GetMessageStream = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Message,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Message.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.Message>}
 *     The XHR Node Readable Stream
 */
proto.MessageServiceClient.prototype.getMessageStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/MessageService/GetMessageStream',
      request,
      metadata || {},
      methodDescriptor_MessageService_GetMessageStream);
};


/**
 * @param {!proto.google.protobuf.Empty} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.Message>}
 *     The XHR Node Readable Stream
 */
proto.MessageServicePromiseClient.prototype.getMessageStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/MessageService/GetMessageStream',
      request,
      metadata || {},
      methodDescriptor_MessageService_GetMessageStream);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Message,
 *   !proto.PostMessageResponse>}
 */
const methodDescriptor_MessageService_PostMessage = new grpc.web.MethodDescriptor(
  '/MessageService/PostMessage',
  grpc.web.MethodType.UNARY,
  proto.Message,
  proto.PostMessageResponse,
  /**
   * @param {!proto.Message} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.PostMessageResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Message,
 *   !proto.PostMessageResponse>}
 */
const methodInfo_MessageService_PostMessage = new grpc.web.AbstractClientBase.MethodInfo(
  proto.PostMessageResponse,
  /**
   * @param {!proto.Message} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.PostMessageResponse.deserializeBinary
);


/**
 * @param {!proto.Message} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.PostMessageResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.PostMessageResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.MessageServiceClient.prototype.postMessage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/MessageService/PostMessage',
      request,
      metadata || {},
      methodDescriptor_MessageService_PostMessage,
      callback);
};


/**
 * @param {!proto.Message} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.PostMessageResponse>}
 *     A native promise that resolves to the response
 */
proto.MessageServicePromiseClient.prototype.postMessage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/MessageService/PostMessage',
      request,
      metadata || {},
      methodDescriptor_MessageService_PostMessage);
};


module.exports = proto;

