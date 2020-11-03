import Utils from '../utils/utils';
class SelectionSort {
    async func(array: HTMLDivElement[], colors: string[], draw: Function, render: HTMLDivElement):Promise<void> {
        for(let i = 0; i < array.length; i++) {
            let minInd = i;

            colors[i] = '#ffc107';
            await draw(array, colors, render);
            await Utils.sleep(100);

            for(let j = i; j < array.length; j++) {
                if(j != i) {
                    colors[j] = '#28a745';
                }
                await draw(array, colors, render);
                await Utils.sleep(100);
                let a = Number(array[minInd].getAttribute('aria-valuenow'));
                let b = Number(array[j].getAttribute('aria-valuenow'));
                if(a > b) {
                    minInd = j;
                    colors[j] = '#ffc107';
                    await draw(array, colors, render);
                    await Utils.sleep(100);
                    colors[j] = '#007bff';
                }
                if(j != i) {
                colors[j] = '#007bff';    
                }    
            }
            await Utils.swap(array, i, minInd);    
                colors[i] = '#007bff';
            await draw(array, colors, render);
        }
    }
}

export default SelectionSort;