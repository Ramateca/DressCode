export type Wall = {
  [key: string]: 'string' | 'number' | 'boolean' | Wall | WallArray;
};
export type WallArray = [Wall[keyof Wall]];
