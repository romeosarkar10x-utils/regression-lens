import { useState } from "react";

export default function useFilter<T, FilterMode>(
    originalArr: T[],
    initialMode: FilterMode,
    filterFn: (mode: FilterMode, v: T, i: number) => boolean,
) {
    const [, setModeState] = useState<FilterMode>(initialMode);
    const [filteredArrState, setFilteredArrState] = useState<T[]>(
        originalArr.filter((v, i) => {
            return filterFn(initialMode, v, i);
        }),
    );

    function setMode(mode: FilterMode): void;
    function setMode(fn: (mode: FilterMode) => FilterMode): void;

    function setMode(arg: FilterMode | ((mode: FilterMode) => FilterMode)) {
        if (typeof arg === "function") {
            const fn = arg as (mode: FilterMode) => FilterMode;
            setModeState((mode) => {
                const finalMode = fn(mode);
                setFilteredArrState(
                    originalArr.filter((v, i) => filterFn(finalMode, v, i)),
                );
                return finalMode;
            });
        } else {
            const mode = arg;
            setModeState(mode);
            setFilteredArrState(
                originalArr.filter((v, i) => filterFn(mode, v, i)),
            );
        }
    }

    return {
        setMode,
        filteredArrState,
    };
}
