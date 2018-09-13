
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'
export const GETS = "GETS"

//方法加一
export function increment() { 
    return {
        type: INCREMENT_COUNTER
    }
}

//方法减一
export function decrement() {
    return {
        type: DECREMENT_COUNTER
    }
}


