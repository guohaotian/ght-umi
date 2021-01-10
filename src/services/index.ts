import {post} from '@/utils/request';

export function getMock(data) {
    return post({
            url: `/api/mock`,
            data: data
    });
}