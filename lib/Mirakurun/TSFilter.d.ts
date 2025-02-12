/// <reference types="node" />
/// <reference types="node" />
import { Writable } from "stream";
import EventEmitter = require("eventemitter3");
import { StreamInfo } from "./common";
interface TSFilterOptions {
    readonly output?: Writable;
    readonly networkId?: number;
    readonly serviceId?: number;
    readonly eventId?: number;
    readonly parseNIT?: boolean;
    readonly parseSDT?: boolean;
    readonly parseEIT?: boolean;
    readonly tsmfRelTs?: number;
}
export default class TSFilter extends EventEmitter {
    streamInfo: StreamInfo;
    private _output;
    private _provideServiceId;
    private _provideEventId;
    private _parseNIT;
    private _parseSDT;
    private _parseEIT;
    private _targetNetworkId;
    private _enableParseCDT;
    private _enableParseDSMCC;
    private _tsmfEnableTsmfSplit;
    private _tsmfSlotCounter;
    private _tsmfRelativeStreamNumber;
    private _tsmfTsNumber;
    private _parser;
    private _epg;
    private _epgReady;
    private _epgState;
    private _packet;
    private _offset;
    private _buffer;
    private _patsec;
    private _patCRC;
    private _closed;
    private _ready;
    private _providePids;
    private _parsePids;
    private _tsid;
    private _serviceIds;
    private _parseServiceIds;
    private _pmtPid;
    private _pmtTimer;
    private _streamTime;
    private _essMap;
    private _essEsPids;
    private _dlDataMap;
    private _logoDataTimer;
    private _provideEventLastDetectedAt;
    private _provideEventTimeout;
    private _maxBufferBytesBeforeReady;
    private _eventEndTimeout;
    constructor(options: TSFilterOptions);
    get closed(): boolean;
    write(chunk: Buffer): void;
    end(): void;
    close(): void;
    private _processPackets;
    private _onPAT;
    private _onPMT;
    private _onNIT;
    private _onSDT;
    private _onEIT;
    private _onTOT;
    private _onCDT;
    private _onDSMCC;
    private _observeProvideEvent;
    private _standbyLogoData;
    private _updateEpgState;
    private _clearEpgState;
    private _close;
}
export {};
