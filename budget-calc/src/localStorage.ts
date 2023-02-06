import type Expense from './types/Expense'
import expenses from './expenses'

function getLocalStorage(): Expense[] {
  const data = JSON.parse(localStorage.getItem('expenses'))
  return data?.length > 0 ? data : []
}

function setLocalStorage(expenses: Expense[]): void {
  localStorage.setItem('expenses', JSON.stringify(expenses))
}

export { getLocalStorage, setLocalStorage }
