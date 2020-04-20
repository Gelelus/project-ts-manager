// Drag & Drop Interfaces

export interface Dragable {
  dragStartHandler(evenet: DragEvent): void;
  dragEndHandler(event: DragEvent): void;
}

export interface DragTarget {
  dragOverHandler(evenet: DragEvent): void;
  dropHandler(evenet: DragEvent): void;
  dragLeaveHandler(evenet: DragEvent): void;
}
