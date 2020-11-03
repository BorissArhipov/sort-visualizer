import Utils from '../utils/utils';
class InsertionSort {
    async func(array: HTMLDivElement[], colors: string[], draw: Function, render: HTMLDivElement):Promise<void> {
        for(let i = 0; i < array.length; i++) {
            colors[i] = '#ffc107';
            await draw(array, colors, render);
            await Utils.sleep(100);
            for(let j = i; j > 0; j--) {
                let a = Number(array[j].getAttribute('aria-valuenow'));
                let b = Number(array[j - 1].getAttribute('aria-valuenow'));
                if(a < b) {
                    if(j != i) {
                        colors[j] = '#28a745';
                    }
                    colors[j-1] = '#28a745';
                    await draw(array, colors, render);
                    await Utils.sleep(100);
                    await Utils.swap(array, j, j - 1);
                    if(j != i) {
                        colors[j] = '#007bff';
                    }
                    colors[j-1] = '#007bff';
                    await draw(array, colors, render);
                } else {
                    colors[j-1] = '#ffc107';
                    await draw(array, colors, render);
                    await Utils.sleep(100);
                    colors[j-1] = '#007bff';
                    await draw(array, colors, render);
                    break;
                }
            }
            colors[array.length - 1] ='#007bff';
            await draw(array, colors, render);
        }
    }
}

export default InsertionSort;