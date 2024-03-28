declare module "*.png" {
  const value: any;
  export = value;
}
declare module "*.svg" {
  const value: any;
  export = value;
}
export interface GlobalContext {
  request: () => Promise<any>;
}

declare const GlobalContext;
export default GlobalContext;
