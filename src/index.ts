import type { IpBlockTypeEnum, LavalinkSourceEnum, LoadTypeEnum, SeverityEnum, WebsocketCloseCodeEnum, WebsocketOpEnum, WebSocketTypeEnum } from './enums';
import type { LavalinkSource, LoadType, Severity, WebSocketType, TrackEndReason, WebsocketCloseCode } from './types';

export interface LavalinkTrack {
    track: string;
    info: {
        identifier: string;
        sourceName: LavalinkSource | LavalinkSourceEnum
        isSeekable: boolean;
        isStream: boolean;
        position: number;
        length: number;
        author: string;
        title: string;
        url: string;
    }
}

export interface LoadTrackResponse {
    playlistInfo?: { name: string; selectedTrack: number };
    exception?: Omit<Exception, 'cause'>;
    loadType: LoadType | LoadTypeEnum;
    tracks: LavalinkTrack[];
}

export interface PlayerUpdatePayload {
    op: WebsocketOpEnum.PLAYER_UPDATE;
    guildId: string;
    state: {
        time: number;
        position: number;
        connected?: boolean;
    }
}

export interface LavalinkStatsPayload {
	op: WebsocketOpEnum.STATS;
	players: number;
	playingPlayers: number;
	uptime: number;
	memory: {
		free: number;
		allocated: number;
		used: number;
		reservable: number;
	};
	cpu: {
		cores: number;
		systemLoad: number;
		lavalinkLoad: number;
	};
	frameStats: { sent: number; nulled: number; deficit: number } | null;
}

export interface Exception {
	severity: Severity | SeverityEnum;
	message: string;
	cause: string;
}

export interface LavalinkPlayerPayload {
    op: 'event';
    type: WebSocketType | WebSocketTypeEnum;
    guildId: string;
}

export interface TrackStartEventPayload extends LavalinkPlayerPayload {
	type: WebSocketTypeEnum.TrackStartEvent;
	track: string;
}

export interface TrackEndEventPayload extends LavalinkPlayerPayload {
	type: WebSocketTypeEnum.TrackEndEvent;
	track: string;
	reason: TrackEndReason;
}

export interface TrackExceptionEventPayload extends LavalinkPlayerPayload {
	type: WebSocketTypeEnum.TrackExceptionEvent;
	exception?: Exception;
	error: string;
}

export interface TrackStuckEventPayload extends LavalinkPlayerPayload {
	type: WebSocketTypeEnum.TrackStuckEvent;
	thresholdMs: number;
}

export interface WebSocketClosedEventPayload extends LavalinkPlayerPayload {
	type: WebSocketTypeEnum.WebSocketClosedEvent;
	code: WebsocketCloseCode | WebsocketCloseCodeEnum | number;
	byRemote: boolean;
	reason: string;
}

export interface Equalizer {
	band: number;
	gain: number;
}

export interface KaraokeEqualizer {
	level: number;
	monoLevel: number;
	filterBand: number;
	filterWidth: number;
}

export interface TimeScaleEqualizer {
	speed: number;
	pitch: number;
	rate: number;
}

export interface TremoloEqualizer {
	depth: number;
	frequency: number;
}

export interface VibratoEqualizer {
	depth: number;
	frequency: number;
}

export interface RotationEqualizer {
	rotationHz: number;
}

export interface DistortionEqualizer {
	sinOffset: number;
	sinScale: number;
	cosOffset: number;
	cosScale: number;
	tanOffset: number;
	tanScale: number;
	offset: number;
	scale: number;
}

export interface ChannelMixEqualizer {
	leftToLeft: number;
	leftToRight: number;
	rightToRight: number;
	rightToLeft: number;
}

export interface LowPassEqualizer {
	smoothing: number;
}

export type RoutePlannerClass = 'RotatingNanoIpRoutePlanner';

export type IpBlockType = 'Inet6Address' | 'Inet4Address';

export interface RoutePlannerStatusResponse {
	class: RoutePlannerClass;
	details: {
		ipBlock: {
			type: IpBlockType | IpBlockTypeEnum;
			size: number;
		};
		failingAddresses: {
			address: string;
			failingTimestamp: number;
			failingTime: string;
		}[];
		blockIndex: number;
		currentAddressIndex: string;
	};
}

export * from './enums/index';
export * from './types/index';
export * from './routes/index';



