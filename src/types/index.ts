/**
 * @private { LavalinkSearchIdentifier } Official Search Identifier.
 * @private { LavalinkSource } Official Source Identifier.
 * @private { Severity } Lavalink Severity Level used when there is a Error.
 * @private { TrackEndReason } Reason sent by the Lavalink Server to end the Track.
 * @private { LoadType } Load Type which is returned by the Lavalink Server.
 * @private { WebSocketType } WebSocket Event Type sent by the Lavalink Server.
 * @private { WebsocketCloseCode } Code sent by Discord to close the Websocket Connection.
 * @private { WebsocketOp } Lavalink OP sent by the Client. NOTE: Volume OP is Deprecated.
 */

export type LavalinkSearchIdentifier = 'ytsearch' | 'ytmsearch' | 'scsearch' | string;
export type LavalinkSource = 'youtube' | 'soundcloud' | 'bandcamp' | 'local' | 'vimeo' | 'twitch' | string;
export type Severity = 'COMMON' | 'SUSPICIOUS' | 'FAULT';
export type TrackEndReason = 'FINISHED' | 'LOAD_FAILED' | 'STOPPED' | 'REPLACED' | 'CLEANUP';
export type LoadType = 'SEARCH_RESULT' | 'TRACK_LOADED' | 'PLAYLIST_LOADED' | 'NP_MATCHES' | 'LOAD_FAILED';
export type WebSocketType = 'WebSocketClosedEvent' | 'TrackStartEvent' | 'TrackEndEvent' | 'TrackExceptionEvent' | 'TrackStuckEvent';
export type WebsocketCloseCode = 4006 | 4001 | 4002 | 4003 | 4004 | 4005 | 4006 | 4009 | 4011 | 4012 | 4014 | 4015 | 4016;
export type WebsocketOp = | 'pause' | 'stop' | 'play' | 'seek' | 'volume' | 'filters' | 'destroy' | 'playerUpdate' | 'stats' | 'configureResuming' | 'voiceUpdate';

