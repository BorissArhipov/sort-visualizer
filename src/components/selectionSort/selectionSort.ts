class SelectionSort {
    
    async func(array: HTMLDivElement[], colors: string[], draw: Function, render: HTMLDivElement):Promise<void> {
        for(let i = 0; i < array.length; i++) {
            let minInd = i;

            colors[i] = '#ffc107';
            await draw(array, colors, render);
            await this.sleep(100);

            for(let j = i; j < array.length; j++) {
                if(j != i) {
                    colors[j] = '#28a745';
                }
                await draw(array, colors, render);
                await this.sleep(100);
                let a = Number(array[minInd].getAttribute('aria-valuenow'));
                let b = Number(array[j].getAttribute('aria-valuenow'));
                if(a > b) {
                    minInd = j;
                    colors[j] = '#ffc107';
                    await draw(array, colors, render);
                    await this.sleep(100);
                    colors[j] = '#007bff';
                }
                if(j != i) {
                colors[j] = '#007bff';    
                }    
            }
            await this.swap(array, i, minInd);    
                colors[i] = '#007bff';
            await draw(array, colors, render);
        }
    }


    async swap(arr: HTMLDivElement[], a: number, b: number) {
        await this.sleep(100);
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;  
    }

    async sleep(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

export default SelectionSort;