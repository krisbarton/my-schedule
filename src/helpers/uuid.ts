export const UUID = () => {
    const array: Uint32Array = new Uint32Array(4);
    crypto.getRandomValues(array);
    return array.join('-');
}