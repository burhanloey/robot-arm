export const keyPressed = { up: false, down: false,
                            w: false, s: false,
                            a: false, d: false };

function handleKeyup(event) {
    event.preventDefault();
    const keycode = event.which;

    switch ( keycode ) {
    case 38: keyPressed.up = false; break;
    case 40: keyPressed.down = false; break;
    case 87: keyPressed.w = false; break;
    case 83: keyPressed.s = false; break;
    case 65: keyPressed.a = false; break;
    case 68: keyPressed.d = false; break;
    }
}
document.addEventListener("keyup", handleKeyup, false);

function handleKeydown(event) {
    event.preventDefault();
    const keycode = event.which;

    switch ( keycode ) {
    case 38: keyPressed.up = true; break;
    case 40: keyPressed.down = true; break;
    case 87: keyPressed.w = true; break;
    case 83: keyPressed.s = true; break;
    case 65: keyPressed.a = true; break;
    case 68: keyPressed.d = true; break;
    }
}
document.addEventListener("keydown", handleKeydown, false);
