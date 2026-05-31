const listeners = new Map();

export function registerScheduler(rootId, dotNetRef) {
    const root = document.getElementById(rootId);
    if (!root) {
        return;
    }

    const pointerDown = (event) => {
        const resizeHandle = event.target.closest('.scheduler-resize-handle');
        const eventElement = event.target.closest('.scheduler-event');

        if (!eventElement) {
            return;
        }

        const eventId = eventElement.dataset.eventId;
        if (!eventId) {
            return;
        }

        const mode = resizeHandle ? 'resize' : 'drag';
        const originX = event.clientX;
        const originY = event.clientY;

        const pointerMove = (moveEvent) => {
            const deltaX = moveEvent.clientX - originX;
            const deltaY = moveEvent.clientY - originY;

            if (mode === 'drag') {
                eventElement.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
                return;
            }

            eventElement.style.height = `${Math.max(24, eventElement.offsetHeight + deltaY)}px`;
        };

        const pointerUp = async (upEvent) => {
            const deltaX = upEvent.clientX - originX;
            const deltaY = upEvent.clientY - originY;

            eventElement.style.transform = '';
            eventElement.style.height = '';

            if (mode === 'drag') {
                await dotNetRef.invokeMethodAsync('OnEventDragEnd', eventId, deltaX, deltaY);
            } else {
                await dotNetRef.invokeMethodAsync('OnEventResizeEnd', eventId, deltaX, deltaY);
            }

            document.removeEventListener('pointermove', pointerMove);
            document.removeEventListener('pointerup', pointerUp);
        };

        document.addEventListener('pointermove', pointerMove);
        document.addEventListener('pointerup', pointerUp, { once: true });
    };

    root.addEventListener('pointerdown', pointerDown);
    listeners.set(rootId, pointerDown);
}

export function unregisterScheduler(rootId) {
    const root = document.getElementById(rootId);
    const pointerDown = listeners.get(rootId);

    if (!root || !pointerDown) {
        return;
    }

    root.removeEventListener('pointerdown', pointerDown);
    listeners.delete(rootId);
}
