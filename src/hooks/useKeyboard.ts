import { useAppDispatch } from 'src/hooks/useStore'
import { changeFocusState } from 'src/store/slice/Search'

/**
 * 调用该函数,返回一个函数,改变搜索下拉框的状态(默认为false)
 * 改变搜索下拉框的状态
 */
export function useChangeDropBoxState(state = false) {
  const dispatch = useAppDispatch()
  return () => {
    dispatch(changeFocusState(state))
  }
}

/**
 * 调用该hook注册全局键盘事件: ctrl+k唤醒搜索框  esc关闭下拉框
 */
export async function useGlobalKeyboardEvent() {
  const showDropBoxState = useChangeDropBoxState(true)
  const closeDropBoxState = useChangeDropBoxState(false)
  if (typeof document !== 'undefined') {
    document.addEventListener('keydown', (e) => {
      if (e.ctrlKey && e.key === 'k') {
        // 阻止默认事件
        e.preventDefault()
        showDropBoxState()
      }
      if (e.key === 'Escape')
        closeDropBoxState()
    })
  }
}
