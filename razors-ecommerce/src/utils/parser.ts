function amountParser(amount: number): string {
  const formatter = Intl.NumberFormat('us-en', {
    currency: 'USD',
    style: 'currency',
  })

  return formatter.format(amount)
}

function priceParser(amount: number): number {
  const formatter = Intl.NumberFormat('us-en', {
    minimumFractionDigits: 2,
  })

  return Number(formatter.format(amount))
}

export { amountParser, priceParser }
