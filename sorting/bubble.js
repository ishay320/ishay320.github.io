
class Bubble {
    i = 0;
    j = 0;
    array = []
    x_pos = 0
    y_pos = 0
    rect_size = 0
    max_in_array = 500
    constructor(arr, x_pos, y_pos, rect_size, max_in_array = 1) {
        this.array = arr
        this.x_pos = x_pos
        this.y_pos = y_pos
        this.rect_size = rect_size
        this.max_in_array = max_in_array
    }

    /**
     * return: if done - true
     *          else false
     */
    step(times) {
        // doing `times` element at one draw
        for (let index = 0; index < times; index++) {
            if (this.i == (array_size)) {
                return true
            }
            if (this.array[this.j] > this.array[this.j + 1]) {
                var temp = this.array[this.j]
                this.array[this.j] = this.array[this.j + 1]
                this.array[this.j + 1] = temp
            }
            this.j++
            if (this.j == (array_size - this.i)) {
                this.j = 0
                this.i++
            }
        }
        return false
    }

    show() {
        let i = 0
        main_array.forEach(element => {
            rect((i++) * this.rect_size / this.array.length + this.x_pos, this.rect_size + this.y_pos, this.rect_size / this.array.length, -(map(element, 0, this.max_in_array, 0, this.rect_size)))
        });
    }

    show_text() {
        text("Bubble sort", this.x_pos + (this.rect_size / 4), this.y_pos + (this.rect_size / 8))
        textSize(this.rect_size / 8)
    }

    reset(array, max_in_array = 1) {
        this.array = array
        this.i = 0
        this.j = 0
        this.max_in_array = max_in_array
    }
}