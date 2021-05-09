import {AppEvents} from './events';

export type CounterActionType = ReturnType<typeof setMaxValue>
    | ReturnType<typeof setMinValue>
    | ReturnType<typeof setCurrentValue>
    | ReturnType<typeof setError>
    | ReturnType<typeof setEditMode>
    | ReturnType<typeof setValuesFromLC>
    ;


export const setMaxValue = (maxValue: number) => {
    return {
        type: AppEvents.SET_MAX_VALUE,
        maxValue
    } as const
}


export const setCurrentValue = (currentValue: number) => {
    return {
        type: AppEvents.SET_CURRENT_VALUE,
        currentValue
    } as const
}


export const setError = (error: string | null) => {
    return {
        type: AppEvents.SET_ERROR,
        error
    } as const
}


export const setMinValue = (minValue: number) => {
    return {
        type: AppEvents.SET_MIN_VALUE,
        minValue
    } as const
}


export const setEditMode = (isEditMode: boolean) => {
    return {
        type: AppEvents.SET_EDIT_MODE,
        isEditMode
    } as const
}

export const setValuesFromLC = (minValue: number, maxValue: number) => {
    return {
        type: AppEvents.SET_VALUES_FROM_LC,
        minValue,
        maxValue
    } as const
}


type InitialStateType = {
    minValue: number
    maxValue: number
    currentValue: number
    isSetMode: boolean
    error: string | null
}

const initialState: InitialStateType = {
    maxValue: 1,
    minValue: 0,
    isSetMode: false,
    currentValue: 0,
    error: null
}


export const counterReducer = (state: InitialStateType = initialState, action: CounterActionType): InitialStateType => {
    switch (action.type) {
        case AppEvents.SET_MAX_VALUE:
            return {
                ...state,
                maxValue: action.maxValue
            }
        case AppEvents.SET_MIN_VALUE:
            return {
                ...state,
                minValue: action.minValue
            }
        case AppEvents.SET_CURRENT_VALUE:
            return {
                ...state,
                currentValue: action.currentValue
            }
        case AppEvents.SET_EDIT_MODE:
            return {
                ...state,
                isSetMode: action.isEditMode
            }
        case AppEvents.SET_ERROR:
            return {
                ...state,
                error: action.error
            }
        case AppEvents.SET_VALUES_FROM_LC:
            return {
                ...state,
                minValue: action.minValue,
                maxValue: action.maxValue
            }
        default:
            return state
    }

}