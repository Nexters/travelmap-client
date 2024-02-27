import type { CourseDetailType, CourseType, PaginationType } from '@/types';

export interface CourseRequestParamType {
    getAllCourses: PaginationType;
    getOwnedCourses: PaginationType;
    getMemberCourses: PaginationType;
    postInviteCourse: {
        courseId: number;
    };
    patchUpdateCourse: {
        courseId: number;
        courseName: string;
    };
    postSaveCourse: {
        userId: number;
        courseName: string;
    };
    deleteCourse: {
        userId: number;
        courseId: number;
    };
}

export interface CourseResponseType {
    getCourse: CourseDetailType;
    getAllCourses: {
        courseGetResList: CourseType[];
        isLast: boolean;
    };
    getOwnedCourses: {
        courseGetResList: CourseType[];
        isLast: boolean;
    };
    getMemberCourses: {
        courseGetResList: CourseType[];
        isLast: boolean;
    };
    postInviteCourse: {
        url: string;
    };
    postSaveCourse: {
        courseId: number;
    };
}

export interface CourseSocketPubType {
    addition: {
        courseId: number;
        pinName: string;
        originName: string;
        latitude: number;
        longitude: number;
        address: string;
        sequence: number;
    };
    modificationName: {
        pinId: string;
        pinName: string;
    };
    modificationOrder: {
        pinId: string;
        sequence: number;
    };
    removal: {
        pinId: string;
    };
}

export interface CourseSocketSubType {
    addition: {
        courseId: number;
        pinId: string;
        pinName: string;
        originName: string;
        latitude: number;
        longitude: number;
        address: string;
        sequence: number;
    };
    modificationName: {
        pinId: string;
        pinName: string;
    };
    modificationOrder: {
        pinId: string;
        sequence: number;
    };
    removal: {
        pinId: string;
    };
}
