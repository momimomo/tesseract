import LoaderRender from './LoaderRender';

export default container => {
    const canvas = createCanvas(document, container);
    const loaderRender = new LoaderRender(canvas);

    render();

    function render() {
        requestAnimationFrame(render);
        loaderRender.update();
    }

    function createCanvas(document, container) {
        const canvas = document.createElement('canvas');     
        container.appendChild(canvas);
        return canvas;
    }
}