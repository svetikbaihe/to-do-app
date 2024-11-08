type DraggableEventHandler = (e: Event, data: DraggableData) => void | false
type DraggableData = {
  node: HTMLElement
  x: number
  y: number
  deltaX: number
  deltaY: number
  lastX: number
  lastY: number
}
