import Utils from '../utils/utils';

class QuickSort {
    
    async func(array: HTMLDivElement[], start: number, end: number, colors: string[], draw: Function, render: HTMLDivElement):Promise<void> {
        if (start >= end) {
            await draw(array, colors, render);
            return;
        }

        let index = await this.partition(array, start, end, colors, draw, render);

        colors[index]='#007bff';

        await Promise.all([
            this.func(array, start, index - 1, colors, draw, render),
            this.func(array, index + 1, end, colors, draw, render)
        ]);
        
    }

    async partition(array: HTMLDivElement[], start: number, end: number, colors: string[], draw: Function, render: HTMLDivElement):Promise<number> {
        
        for(let i = start; i < end; i++) {
            colors[i] = '#28a745';
        }
        
        let pivotIndex: number = start;
        let pivotValue: number = Number(array[end].getAttribute('aria-valuenow'));
        colors[pivotIndex]='#ffc107';
        for(let i = start; i < end; i++) {
            if(Number(array[i].getAttribute('aria-valuenow')) < pivotValue) {
                await Utils.swap(array, i, pivotIndex);
                colors[pivotIndex]='#007bff';
                pivotIndex++;
                colors[pivotIndex]='#ffc107';
            }
            await draw(array, colors, render);
        }
        await Utils.swap(array, pivotIndex, end);

        for(let i = start; i < end; i++) {
            colors[i] = '#007bff';
        }

        return pivotIndex;
    }
}

export default QuickSort;