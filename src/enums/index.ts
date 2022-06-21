export enum LavalinkSearchIdentifierEnum {
    YT_SEARCH = 'ytsearch',
    YTM_SEARCH = 'ytmsearch',
    SC_SEARCH = 'scsearch'
}

export enum LavalinkSourceEnum {
    Youtube = 'youtube',
    Soundcloud = 'soundcloud',
    Bandcamp = 'bandcamp',
    Local = 'local',
    Vimeo = 'vimeo',
    Twitch = 'twitch'
}

export enum SeverityEnum {
	COMMON = 'COMMON',
	SUSPICIOUS = 'SUSPICIOUS',
	FAULT = 'FAULT'
}

export enum LoadTypeEnum {
	SEARCH_RESULT = 'SEARCH_RESULT',
	TRACK_LOADED = 'TRACK_LOADED',
	PLAYLIST_LOADED = 'PLAYLIST_LOADED',
	NO_MATCHES = 'NO_MATCHES',
	LOAD_FAILED = 'LOAD_FAILED'
}

export enum WebSocketTypeEnum {
	WebSocketClosedEvent = 'WebSocketClosedEvent',
	TrackStartEvent = 'TrackStartEvent',
	TrackEndEvent = 'TrackEndEvent',
	TrackExceptionEvent = 'TrackExceptionEvent',
	TrackStuckEvent = 'TrackStuckEvent'
}

export enum WebsocketCloseCodeEnum {
	UNKNOWN_ERROR = 4006,
	UNKNOWN_OPCODE = 4001,
	DECODE_ERROR = 4002,
	NOT_AUTHENTICATED = 4003,
	AUTHENTICATION_FAILED = 4004,
	ALREADY_AUTHENTICATED = 4005,
	SESSION_INVALID = 4006,
	SESSION_TIMEOUT = 4009,
	SERVER_NOT_FOUND = 4011,
	UNKNOWN_PROTOCOL = 4012,
	DISCONNECTED = 4014,
	VOICE_SERVER_CRASHED = 4015,
	UNKNOWN_ENCRYPTION_MODE = 4016
}

export enum WebsocketOpEnum {
	PAUSE = 'pause',
	STOP = 'stop',
	PLAY = 'play',
	SEEK = 'seek',
	/** @deprecated Will be removed on lavalink major update */
	VOLUME = 'volume',
	FILTERS = 'filters',
	DESTROY = 'destroy',
	PLAYER_UPDATE = 'playerUpdate',
	STATS = 'stats',
	CONFIGURE_RESUMING = 'configureResuming',
	VOICE_UPDATE = 'voiceUpdate'
}

export enum TrackEndReasonEnum {
	FINISHED = 'FINISHED',
	LOAD_FAILED = 'LOAD_FAILED',
	STOPPED = 'STOPPED',
	REPLACED = 'REPLACED',
	CLEANUP = 'CLEANUP'
}

export enum RoutePlannerClassEnum {
	ROTATING_NANO_IP_ROUTE_PLANNER = 'RotatingNanoIpRoutePlanner'
}

export enum IpBlockTypeEnum {
	I_NET_6_ADDRESS = 'Inet6Address',
	I_NET_4_ADDRESS = 'Inet4Address'
}