import LoaderRender from './LoaderRender';

export default container => {
    const canvas = createCanvas(document, container);
    const loaderRender = new LoaderRender(canvas);

    let canvasHalfWidth;
    let canvasHalfHeight;

    resizeCanvas();
    render();
    

    function createCanvas(document, container) {
        const canvas = document.createElement('canvas');     
        container.appendChild(canvas);
        return canvas;
    }

    function resizeCanvas() {        
        canvas.style.width = '100%';
        canvas.style.height= '100%';
        
        canvas.width  = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        canvasHalfWidth = Math.round(canvas.offsetWidth/2);
        canvasHalfHeight = Math.round(canvas.offsetHeight/2);
    }

    function render() {
        requestAnimationFrame(render);
        loaderRender.update();
    }
}