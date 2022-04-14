export const loadMore = (array: Array<any>, range: number, add: number) => {
    return array?.length > range + add ? range + add : array?.length ?? range;
};

export const goToUrl = (url: string) => window.open(url, '_blank');

export const getMyAge = () => {
    const nasc = new Date(1999, 6, 10);
    const diff_ms = Date.now() - nasc.getTime();
    const age_dt = new Date(diff_ms);
    return Math.abs(age_dt.getUTCFullYear() - 1970);
};
