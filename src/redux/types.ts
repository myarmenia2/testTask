export type Action<T, P = undefined> = {
    type: T;
    payload?: P;
};
