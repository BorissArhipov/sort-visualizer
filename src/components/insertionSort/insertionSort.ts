class InsertionSort {
    
    async func(array: HTMLDivElement[], colors: string[], draw: Function, render: HTMLDivElement):Promise<void> {
        for(let i = 0; i < array.length; i++) {
            colors[i] = '#ffc107';
            await draw(array, colors, render);
            await this.sleep(100);
            for(let j = i; j > 0; j--) {
                let a = Number(array[j].getAttribute('aria-valuenow'));
                let b = Number(array[j - 1].getAttribute('aria-valuenow'));
                if(a < b) {
                    if(j != i) {
                        colors[j] = '#28a745';
                    }
                    colors[j-1] = '#28a745';
                    await draw(array, colors, render);
                    await this.sleep(100);
                    await this.swap(array, j, j - 1);
                    if(j != i) {
                        colors[j] = '#007bff';
                    }
                    colors[j-1] = '#007bff';
                    await draw(array, colors, render);
                } else {
                    colors[j-1] = '#ffc107';
                    await draw(array, colors, render);
                    await this.sleep(100);
                    colors[j-1] = '#007bff';
                    await draw(array, colors, render);
                    break;
                }
            }
            colors[array.length - 1] ='#007bff';
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

export default InsertionSort;