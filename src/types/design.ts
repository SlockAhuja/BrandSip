export type DesignOrientation = "vertical" | "horizontal";

export interface DesignState {
  orientation: DesignOrientation;
  logo: string | null;
  brandName: string;
  scale: number;
  positionX: number;
  positionY: number;
}
