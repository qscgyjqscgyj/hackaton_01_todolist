export function paramsToQuery(params: { [key: string]: string | number }) {
    return Object.keys(params)
        .map((key) => `${key}=${params[key]}`)
        .join('&');
}
