import { Operation } from "express-openapi";
export declare const parameters: ({
    in: string;
    name: string;
    type: string;
    enum: string[];
    required: boolean;
    minimum?: undefined;
    maximum?: undefined;
} | {
    in: string;
    name: string;
    type: string;
    required: boolean;
    enum?: undefined;
    minimum?: undefined;
    maximum?: undefined;
} | {
    in: string;
    name: string;
    type: string;
    minimum: number;
    enum?: undefined;
    required?: undefined;
    maximum?: undefined;
} | {
    in: string;
    name: string;
    type: string;
    minimum: number;
    maximum: number;
    enum?: undefined;
    required?: undefined;
})[];
export declare const get: Operation;
