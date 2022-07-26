import { renderHook } from "@testing-library/react";
import useForm from "hooks/useForm";
import { act } from "react-dom/test-utils";

test('should change keyword', () => {
    const { result } = renderHook(() => useForm())
    
    act(() => {
        result.current.updateKeyword('batman')
    })
    expect(result.current.keyword).toBe('batman')
})
test('should change the count', () => {
    const { result } = renderHook(() => useForm())
    
    act(() => {
        result.current.updateKeyword('b')
        result.current.updateKeyword('ba')
    })
    expect(result.current.keyword).toBe('ba')
    expect(result.current.times).toBe(2)
})
