import type Expense from './types/Expense'

function getLocalStorage(): Expense[] {
  return JSON.parse(localStorage.getItem('expenses')) ?? []
}

function setLocalStorage(expenses: Expense[]): void {
  localStorage.setItem('expenses', JSON.stringify(expenses))
}

export { getLocalStorage, setLocalStorage }
