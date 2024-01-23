import { getAsync, postAsync } from '@/apis/api';

import {
    GetReverseGeoCodingType,
    type TmapReqParamsType,
    type TmapResponseType,
} from './type';

export const TmapRepository = {
    baseUrl: `https://apis.openapi.sk.com/tmap`,
    appKey: import.meta.env.VITE_TMAP_APP_KEY,

    async getRoutePathAsync({
        startX,
        startY,
        endX,
        endY,
        passList,
        reqCoordType = 'WGS84GEO',
        resCoordType = 'WGS84GEO',
    }: TmapReqParamsType['getRoutePath']) {
        return postAsync<
            TmapResponseType['getRoutePath'],
            TmapReqParamsType['getRoutePath']
        >(
            `/routes`,
            {
                startX,
                startY,
                endX,
                endY,
                ...(passList && { passList }),
                reqCoordType,
                resCoordType,
            },
            {
                baseURL: this.baseUrl,
                headers: {
                    appKey: this.appKey,
                },
                params: {
                    version: 1,
                    format: 'json',
                },
            },
        );
    },

    getAddressFromLatLng: async function ({
        latitude,
        longitude,
    }: {
        latitude: number;
        longitude: number;
    }) {
        const response = await getAsync<GetReverseGeoCodingType>(
            '/geo/reversegeocoding',
            {
                baseURL: this.baseUrl,
                headers: { appKey: this.appKey },
                params: {
                    version: 1,
                    lat: latitude,
                    lon: longitude,
                    coordType: 'WGS84GEO',
                    addressType: 'A04', // TODO: 논의 후 수정 예정
                    callback: 'result',
                },
            },
        );

        return response.addressInfo;
    },
};
