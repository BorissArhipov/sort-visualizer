class BubbleSort {
    
    async func(array: HTMLDivElement[], colors: string[], draw: Function, render: HTMLDivElement):Promise<void> {
        let j = 0;
        let len = array.length;
        while(j < array.length) {
            for(let i = 0; i < len; i++) {
                colors[i] = '#ffc107';
                let a: number = Number(array[i].getAttribute('aria-valuenow'));
                await draw(array, colors, render);
                await this.sleep(100);
                if(array[i + 1]) {
                    let b: number = Number(array[i + 1].getAttribute('aria-valuenow'));
                    colors[i + 1] = '#28a745';
                    if(a > b) {
                        await draw(array, colors, render);
                        this.swap(array, i, i + 1);
                        i--
                    }
                }
                colors[i] = '#007bff';
                colors[i + 1] = '#007bff';
            } 
            len--;
            j++;        
        }
        colors[0] = '#007bff';  
        await draw(array, colors, render);
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

export default BubbleSort;