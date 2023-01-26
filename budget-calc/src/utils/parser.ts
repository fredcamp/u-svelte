function amountParser(amount: number): string {
  const formatter = new Intl.NumberFormat('en-us', {
    currency: 'USD',
    style: 'currency',
    minimumFractionDigits: 0,
  })

  return formatter.format(amount)
}

export { amountParser }
